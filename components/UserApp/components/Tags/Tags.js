import React from 'react';
import PropTypes from "prop-types";
import { forIn, isEmpty, map, toPairs, assign, keys, find, includes, forEach, indexOf } from 'lodash';
import { Accordion, Table } from "semantic-ui-react";
import TableRow from "./TableRow";

const Tags = props => {
    const {
        appName,
        tagsData,
        moderateTag,
        contentIndex,
        searchingContent,
    } = props;

    const categories = toPairs(tagsData);
    const allCategories = {};

    forIn(tagsData, tags => {
        assign(allCategories, tags)
    });

    const allTagsData = [['All', allCategories], ...categories];

    const dataTagsKeys = keys(allTagsData[contentIndex][1]);

    const deleteHandleClick = (category, tagKey, tag) => {
        if (typeof tagKey === 'number') {
            tagKey = dataTagsKeys[tagKey]
        }
        const requestData = {
            data: {
                action: 'delete',
                tags: {
                    category,
                    tag: tagKey,
                    value: tag
                }
            },
            app: appName };
        moderateTag(requestData)
    };

    let searchingCategory;
    forEach(searchingContent, tag => {
        searchingCategory = find(categories, category => {
            return includes(map(category[1]), tag)
        });
    });

    return (
        <Accordion fluid styled>
            <Table fixed singleLine unstackable className="user-app-content__blackList-content">
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Tags</Table.HeaderCell>
                        <Table.HeaderCell/>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {contentIndex === 0 ?
                        map(categories,
                            (category) => map(isEmpty(searchingContent) ? category[1] : searchingContent,
                                (tag, tagKey) => {
                                    const keyIndex = indexOf(map(allTagsData[contentIndex][1]), searchingContent[tagKey]);
                                    return (
                                        !isEmpty(searchingCategory)
                                            ?
                                            searchingCategory[0] === category[0]
                                            &&
                                            <TableRow
                                                key={tagKey}
                                                tag={tag}
                                                tagKey={tagKey}
                                                category={searchingCategory}
                                                keyIndex={keyIndex}
                                                appName={appName}
                                                tagsData={tagsData}
                                                dataTagsKeys={dataTagsKeys}
                                                deleteHandleClick={deleteHandleClick}
                                            />
                                            :
                                            <TableRow
                                                key={tagKey}
                                                tag={tag}
                                                tagKey={tagKey}
                                                category={category}
                                                keyIndex={-1}
                                                appName={appName}
                                                tagsData={tagsData}
                                                dataTagsKeys={dataTagsKeys}
                                                deleteHandleClick={deleteHandleClick}
                                            />
                                    )
                                }
                            )
                        )
                        :
                        map(isEmpty(searchingContent) ? allTagsData[contentIndex][1] : searchingContent,
                            (tag, tagKey) => {
                                const keyIndex = indexOf(map(allTagsData[contentIndex][1]), searchingContent[tagKey]);
                                return <TableRow
                                            key={tagKey}
                                            tag={tag}
                                            tagKey={tagKey}
                                            category={allTagsData[contentIndex]}
                                            keyIndex={keyIndex}
                                            appName={appName}
                                            tagsData={tagsData}
                                            dataTagsKeys={dataTagsKeys}
                                            deleteHandleClick={deleteHandleClick}
                                        />
                            })}
                </Table.Body>
            </Table>
        </Accordion>
    );
};

Tags.propTypes = {
    tags: PropTypes.array,
    deleteSupportedHashTag: PropTypes.func,
    appName: PropTypes.string,
};

export default Tags;

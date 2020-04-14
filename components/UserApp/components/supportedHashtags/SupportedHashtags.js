import React from 'react';
import PropTypes from "prop-types";
import { map } from 'lodash'
import { Accordion, Table } from "semantic-ui-react";
import { CustomButton } from '../../../common/buttons';

const SupportedHashtags = ({ supported_hashtags, deleteSupportedHashTag, appName }) => {
    const handleClick = (hashtag) => {
        const requestData = { data: { permlinks: hashtag }, app: appName };
        deleteSupportedHashTag(requestData)
    };

    return (
        <Accordion fluid styled>
            <Table fixed singleLine unstackable className="user-app-content__blackList-content">
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Supported Hashtags</Table.HeaderCell>
                        <Table.HeaderCell></Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {map(supported_hashtags, (hashtag, index) => {
                        return (
                            <Table.Row key={`${hashtag}${index}`}>
                                <Table.Cell>{hashtag}</Table.Cell>
                                <Table.Cell textAlign="right">
                                    <CustomButton onClick={() => handleClick(hashtag)} content='Delete' color='orange'/>
                                </Table.Cell>
                            </Table.Row>
                        );
                    })}
                </Table.Body>
            </Table>
        </Accordion>
    );
};

SupportedHashtags.propTypes = {
    supported_hashtags: PropTypes.array,
    deleteSupportedHashTag: PropTypes.func,
    appName: PropTypes.string,
};

export default SupportedHashtags;

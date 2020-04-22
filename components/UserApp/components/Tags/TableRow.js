import React from 'react';
import { Table } from "semantic-ui-react";
import { CustomButton } from "../../../common/buttons";
import ModalTagsUpdate from "../../../Modals/ModalTags/ModalTagsUpdate";

export default props => {
    const {
        tag,
        tagKey,
        appName,
        keyIndex,
        tagsData,
        category,
        dataTagsKeys,
        deleteHandleClick
    } = props;

    return (
        <Table.Row key={`${tag}${tagKey}`}>
            <Table.Cell>{tag}</Table.Cell>
            <Table.Cell textAlign="right">
                <ModalTagsUpdate
                    oldCategory={category[0]}
                    tag={ tag }
                    tagKey={tagKey}
                    appName={appName}
                    tagsData={tagsData}
                    dataTagsKeys={dataTagsKeys}
                />
                <CustomButton
                    onClick={() => deleteHandleClick(
                        category[0],
                        keyIndex !== -1 ? keyIndex : tagKey,
                        tag,
                    )}
                    content='Delete'
                    color='orange'
                />
            </Table.Cell>
        </Table.Row>
    )
}

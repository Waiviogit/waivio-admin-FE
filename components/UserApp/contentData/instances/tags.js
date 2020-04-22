import React from "react";
import ContentData from "../contentDataInterface";
import Tags from "../../components/Tags";
import ModalTags from "../../../Modals/ModalTags";
import TagsTitle from "../../components/Tags/TagsTitle";
import TagsSearch from "../../components/Tags/TagsSearch";

const tagsTitle = ({ tagsData }) => <TagsTitle tagsData={tagsData}/>;

const tagsModal = ({ name, tagsData }) => (
    <ModalTags
        showButtonContent="Add tag"
        submitButtonContent="Add"
        title="Tag"
        appName={ name }
        tagsData={tagsData}
    />
);

const tagsContent = ({ tagsData, name }, index) =>  (
    <div key={index} className="user-app-content__moderators">
        <div className="user-app-content__moderators">
            <Tags tagsData={ tagsData } appName={ name } />
        </div>
    </div>
);

const tagsSearch = ({ tagsData }) => <TagsSearch tagsData={ tagsData }/>;

export default new ContentData(
    tagsTitle,
    5,
    tagsContent,
    tagsModal,
    tagsSearch,
);

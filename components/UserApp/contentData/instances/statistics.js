import StatisticsTitle from "../../components/Statistics/StatisticsTitle";
import ContentData from "../contentDataInterface";
import React from "react";
import { connect } from 'react-redux'
import StatisticsSearch from "../../components/Statistics/StatisticsSearch";

const statisticsTitle = ({ statistics }) => <StatisticsTitle statistics={statistics}/>;

const statisticsModal = ({ }) => (
   <div/>
);

const statisticsContent = ({ tagsData, name }, index) =>  (
    <div key={index} className="user-app-content__moderators">
        <div className="user-app-content__moderators">
        </div>
    </div>
);

const statisticsSearch = ({  }) => {
    const mapSateToProps = state => ({

    });
    const mapDispatchToProps = (dispatch) => ({

    });
    const ConnectedStatisticsSearch = connect(mapSateToProps, mapDispatchToProps)(StatisticsSearch);
    return <ConnectedStatisticsSearch/>;
};

const statisticsCalendar = () => <StatisticsSearch/>;

export default new ContentData(
    statisticsTitle,
    6,
    statisticsContent,
    statisticsModal,
    statisticsSearch,
    null,
);

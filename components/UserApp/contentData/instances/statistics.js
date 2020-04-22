import StatisticsTitle from "../../components/Statistics/StatisticsTitle";
import Search from "../../components/Search";
import ContentData from "../contentDataInterface";
import React from "react";
import { connect } from 'react-redux'
import { searchStatistics, setInputValue } from "../../../../redux/actions/searchActions";

const statisticsTitle = ({ statistics }) => <StatisticsTitle statistics={statistics}/>;

const statisticsModal = ({ name, tagsData }) => (
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
        inputValue: state.ui.search.inputValue
    });
    const mapDispatchToProps = (dispatch) => ({
        searchHandle: (payload) => dispatch(searchStatistics(payload)),
        setInputValue: (payload) => dispatch(setInputValue(payload))
    });
    const ConnectedStatisticsSearch = connect(mapSateToProps, mapDispatchToProps)(Search);
    return <ConnectedStatisticsSearch list={{}}/>;
};

export default new ContentData(
    statisticsTitle,
    6,
    statisticsContent,
    statisticsModal,
    statisticsSearch,
);

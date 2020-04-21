import React from "react";
import ContentData from "../contentDataInterface";
import ServiceBots from "../../components/ServiceBots";
import ModalServiceBot from "../../../Modals/ModalServiceBot";
import { searchServiceBots, setInputValue } from "../../../../redux/actions/searchActions";
import { connect } from "react-redux";
import Search from "../../components/Search";

const serviceBotsTitle = ({ service_bots }) => {
    return service_bots ?
        <>
            <span>Service Bots</span>
            <div className='total-number-of-block'>
                {service_bots.length}
            </div>
        </> :
        <span>Service Bots</span>;
};

const serviceBotsModal = ({ name, createServiceBot }) => (
    <ModalServiceBot
        showButtonContent="Create Service Bot"
        submitButtonContent="Create"
        title="Create Service Bot"
        type="create"
        onFormSubmit={ createServiceBot }
        appName={ name }
    />);

const serviceBotsContent = ({ service_bots, name } , index) => (
    <div key={index} className="user-app-content__serviceBots">
        <div className="user-app-content__serviceBots">
            <ServiceBots service_bots={ service_bots } appName={ name } />
        </div>
    </div>
);

const serviceBotsSearch = ({ service_bots }) => {
    const mapSateToProps = state => ({
        inputValue: state.ui.search.inputValue
    });
    const mapDispatchToProps = (dispatch) => ({
        searchHandle: (payload) => dispatch(searchServiceBots(payload)),
        setInputValue: (payload) => dispatch(setInputValue(payload))

    });
    const ConnectedServiceBotsSearch = connect(mapSateToProps, mapDispatchToProps)(Search);
    return (
        <ConnectedServiceBotsSearch
            list={service_bots}
        />
    )
};

export default new ContentData(
    serviceBotsTitle,
    1,
    serviceBotsContent,
    serviceBotsModal,
    serviceBotsSearch,
);

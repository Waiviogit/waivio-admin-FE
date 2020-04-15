import React from "react";
import ContentData from "../contentDataInterface";
import ServiceBots from "../../components/ServiceBots";
import ModalServiceBot from "../../../Modals/ModalServiceBot";

const serviceBotsModal = ({ name, createServiceBot }) => (
    <ModalServiceBot
        showButtonContent="Create Service Bot"
        submitButtonContent="Create"
        title="Create Service Bot"
        type="create"
        onFormSubmit={ createServiceBot }
        appName={ name }
    />);

const serviceBotsContent = ({ service_bots, name }) => (
    <div className="user-app-content__serviceBots">
        <div className="user-app-content__serviceBots">
            <ServiceBots service_bots={ service_bots } appName={ name } />
        </div>
    </div>
);

const serviceBotsTotal = ({ service_bots }) => (
    <div className='total-number-of-block'>
        { service_bots.length }
    </div>
);

export default new ContentData(
    'Service Bots',
    1,
    serviceBotsContent,
    serviceBotsModal,
    serviceBotsTotal
);

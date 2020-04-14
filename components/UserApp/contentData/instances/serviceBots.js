import React from "react";
import ContentData from "../contentDataInterface";
import ServiceBots from "../../components/ServiceBots";
import ModalServiceBot from "../../../Modals/ModalServiceBot";

const serviceBotsModal = ({ appName, createServiceBot }) => (
    <ModalServiceBot
        showButtonContent="Create Service Bot"
        submitButtonContent="Create"
        title="Create Service Bot"
        type="create"
        onFormSubmit={ createServiceBot }
        appName={ appName }
    />);

const serviceBotsContent = ({ service_bots, appName }) => (
    <div className="user-app-content__serviceBots">
        <div className="user-app-content__serviceBots">
            <ServiceBots service_bots={ service_bots } appName={ appName } />
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

import './CustomModalHeader.scss';
import { Modal } from "semantic-ui-react";
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { ButtonClose } from "../buttons";

const CustomModalHeader = ({ onClose, title }) => {
    // const inputEl = null;
    // useEffect(() => {
    //     if (inputEl) inputEl.focus();
    // }, []);
    return (
        <Modal.Header className="is-custom-modal-header" title={title}>
            <div className="is-custom-modal-header__body">
                <div className="is-custom-modal-header__body-text">{title}</div>
            </div>
            <ButtonClose title='Close' onClick={onClose} />
        </Modal.Header>
    );
};

CustomModalHeader.propTypes = {
    onClose: PropTypes.func.isRequired,
    title: PropTypes.string,
};

export default CustomModalHeader;

import React, { useState } from "react";
import PropTypes from "prop-types";
import { CustomButton } from "../../../common/buttons";

const ModalBotDeleteContent = ({
  onClose,
  submitButtonContent,
  appName,
  onFormSubmit,
  type,
  bot
}) => {
  console.log('ModalBotDeleteContent', appName);
  const [isLoading, setIsLoading] = useState(false);
  const { name, postingKey, roles } = bot;

  const handleSubmit = () => {
    console.log('handleSubmit');
    const requestData = {
      app: appName,
      name: name,
      postingKey: postingKey,
      roles: roles
    };
    setIsLoading(true);
    onFormSubmit(requestData)
      .then(() => {
        setIsLoading(false);
        onClose();
      })
      .catch(() => setIsLoading(false));
  };

  const handleClose = () => onClose();

  return (
    <div className="modal-serviceBot__content-form">
      {type === "delete" && <div>Are you sure?</div>}

        <>
          <CustomButton color="orange" content="No" onClick={handleClose} />
          <CustomButton
            color="orange"
            content={submitButtonContent}
            // loading={isLoading}
            // disabled={isLoading}
            onClick={handleSubmit}
          />
        </>

    </div>
  );
};

ModalBotDeleteContent.propTypes = {
  submitButtonContent: PropTypes.string,
  isUpdate: PropTypes.bool,
  upgradeToModerator: PropTypes.func,
  updateModerator: PropTypes.func,
  upgradeToUser: PropTypes.func,
  isDelete: PropTypes.bool,
  isCreate: PropTypes.bool,
  onClose: PropTypes.func
};

export default ModalBotDeleteContent;

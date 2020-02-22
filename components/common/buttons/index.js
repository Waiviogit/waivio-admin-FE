import './Buttons.scss';
import React from 'react';
import { Button, Image } from 'semantic-ui-react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { colors } from './constants';

export const ButtonClose = ({ icon = 'clear', ...props }) => <Image src={`/static/icons/${icon}.svg`} {...props} className="custom-button close"/>;

export const CustomButton = ({ className, icon, color, content, loading, width, ...props }) => (
    <Button {...props} className={classnames('button', className)} style={{ backgroundColor: colors[color], width }} loading={loading}>
        <div className="button-content">
            {(!loading && icon) ? <Image className="button-content-image" src={`/static/icons/${icon}.svg`}/> : null}
            {content}
        </div>
    </Button>
);

ButtonClose.propTypes = {
    icon: PropTypes.string,
};

CustomButton.propTypes = {
    icon: PropTypes.string,
    className: PropTypes.string,
    color: PropTypes.string,
    content: PropTypes.string,
    loading: PropTypes.bool,
    width: PropTypes.string,
};


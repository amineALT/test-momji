import React from 'react';
import PropTypes from 'prop-types';
import { buttonStyle } from './style';

const Button = props => {
    const {
        type,
        label,
        className
    } = props;

    return (
        <button
            type={type}
            className={className}
        >
            {label}
        </button>
    );
};

Button.defaultProps = {
    className: buttonStyle
};

Button.propTypes = {
    type: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    className: PropTypes.string
};

export default Button;
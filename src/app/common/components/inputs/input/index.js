import React from 'react';
import PropTypes from 'prop-types';
import { inputStyle } from './style';

const Input = props => {

    const {
        type,
        placeholder,
        name,
        value,
        onChange,
        className
    } = props;

    return (
        <input
            type={type}
            placeholder={placeholder}
            name={name}
            value={value}
            onChange={onChange}
            className={className}
            {...(type === 'checkbox' && { checked: value })}
        />
    );
};

Input.defaultProps = {
    className: inputStyle
};

Input.propTypes = {
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    name: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    onChange: PropTypes.func.isRequired,
    className: PropTypes.string
};

export default Input;
import React from 'react';
import PropTypes from 'prop-types';
import { selectStyle } from './style';

const Select = props => {

    const {
        name,
        options,
        value,
        onChange,
        label,
        className
    } = props;

    const optionsFormatter = options => {
        const optionsValues = options === 'boolean' ? [true, false] : [];

        return (
            <>
                < option value=''>{label || 'Select option'}</option>
                {
                    optionsValues.map(option => (
                        <option
                            key={option}
                            value={option}
                        >
                            {String(option)}
                        </option>
                    ))
                }
            </>
        )
    };

    return (
        <select
            value={value}
            onChange={onChange}
            name={name}
            className={className}
        >
            {optionsFormatter(options)}
        </select>
    );
};

Select.defaultProps = {
    className: selectStyle
};

Select.propTypes = {
    name: PropTypes.string.isRequired,
    options: PropTypes.oneOfType([PropTypes.string, PropTypes.bool, PropTypes.arrayOf(PropTypes.object)]),
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    onChange: PropTypes.func.isRequired,
    label: PropTypes.string,
    className: PropTypes.string
};

export default Select;
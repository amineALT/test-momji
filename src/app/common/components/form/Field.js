import React from 'react';
import { Label } from '../display';
import { Input } from '../inputs';
import * as Helpers from '../../data';
import PropTypes from 'prop-types';

const Field = props => {

    const {
        label,
        value,
        onChange
    } = props;

    const formatedLabel = Helpers.labelFormatter(label);

    // To generate the inputs based on the values of the properties of the object.
    const getFormElement = () => {
        let element = null;
        switch (true) {
            case Helpers.isEmail(value): {
                const placeHolder = `Add your ${label}`;
                element = (
                    <Input
                        type='email'
                        placeholder={placeHolder}
                        name={label}
                        value={value}
                        onChange={onChange}
                    />
                );
                break;
            }
            case Helpers.isBoolean(value): {
                element = (
                    <Input
                        type='checkbox'
                        name={label}
                        onChange={onChange}
                        value={value}
                    />
                );
                break;
            }
            case Helpers.isDate(value): {
                const placeholder = `Add your date`;
                const _value = value.indexOf('T') ? value.split('T')[0] : value;
                element = (
                    <Input
                        type='date'
                        placeholder={placeholder}
                        name={label}
                        value={_value}
                        onChange={onChange}
                    />
                );
                break;
            }
            default: {
                const placeholder = `Add your ${label}`;
                element = (
                    <Input
                        type='text'
                        placeholder={placeholder}
                        name={label}
                        value={value}
                        onChange={onChange}
                    />
                );
            }
        };

        return element;
    };

    return (
        <Label
            title={Helpers.capitalizeFirstLetter(formatedLabel)}
        >
            {getFormElement()}
        </Label>
    )
};

Field.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    onChange: PropTypes.func.isRequired
};

export default Field;
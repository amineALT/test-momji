import React, { useState } from 'react';
import _ from 'lodash';
import Field from './Field';
import { Button } from '../inputs'
import { flatNestedProperties } from '../../data';
import PropTypes from 'prop-types';

const Form = ({ data, className }) => {

    const { fieldToIgnore, ...restData } = data;
    const formInitialData = flatNestedProperties(restData);
    const [formData, setFormData] = useState(formInitialData);

    // To store modified entries in the form.
    const handleInputChange = ({ target }) => {
        const { name, type } = target;
        const value = type === 'checkbox' ? target.checked : target.value;

        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Function called when sending the form.
    const handleOnSubmitForm = event => {
        event.preventDefault();

        let formattedResponse = {}
        _.keys(formData).forEach((elt) => _.set(formattedResponse, elt.split('.'), formData[elt]));
        // Console the submitted Response
        console.log(formattedResponse);
        alert('A message is displayed in the browser console')
    };

    // To generate the fields of the modification form, based on the properties of the object that will be used as a jsonSchema.
    const dataFields = Object.keys(formInitialData).filter(field => field !== fieldToIgnore);

    return (
        <form
            onSubmit={handleOnSubmitForm}
            className={className}
        >
            {
                dataFields.map(field => (
                    <Field
                        key={field}
                        label={field}
                        value={formData[field]}
                        onChange={handleInputChange}
                    />
                ))
            }
            <Button
                type='submit'
                label={'submit'}
            />
        </form>
    )
};

Form.propTypes = {
    data: PropTypes.object.isRequired,
    className: PropTypes.string
};

export default Form;
import React from 'react';
import _ from 'lodash';
import { Input, Select } from '../inputs';
import { flatNestedProperties, isBoolean, isDate, labelFormatter } from '../../data';
import PropTypes from 'prop-types';
import { filterTableStyle } from './style';

const Filter = (props) => {
    const {
        data,
        onChange,
        filterInput,
        fieldToIgnore
    } = props;

    // To Flatten the content of an object to get the filter block. and pass a parameter to ignore the unwanted field.
    const filterKeys = data && flatNestedProperties(data, null, fieldToIgnore);

    return (
        <div className={filterTableStyle}>
            {_.keys(filterKeys).map(key => {
                const valueFilterType = key.includes('.') ? _.get(data, key) : data[key];
                const filterType = isBoolean(valueFilterType) ? 'select' : isDate(valueFilterType) ? 'date' : 'text';

                return (
                    <React.Fragment key={key}>
                        {filterType === 'select' ? (
                            <Select
                                name={key}
                                value={filterInput[key]}
                                options={'boolean'}
                                onChange={onChange}
                            />
                        ) : (
                            <Input
                                name={key}
                                value={filterInput[key]}
                                type={filterType}
                                onChange={onChange}
                                placeholder={labelFormatter(key)}
                            />
                        )}
                    </React.Fragment>
                );
            })}
        </div>
    );
};

Filter.propTypes = {
    data: PropTypes.object.isRequired,
    fieldToIgnore: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    filterInput: PropTypes.object.isRequired,
};

export default Filter;
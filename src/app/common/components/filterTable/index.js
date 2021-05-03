import React, { useState } from 'react';
import _ from 'lodash';
import { Table } from '../display';
import Filter from './Filter';
import PropTypes from 'prop-types';

const FilterTable = ({ data, fieldToIgnore }) => {
    const [filterInput, setFilterInput] = useState({});

    // To store the search result entered in the form.
    const handleFilterChange = ({ target }) => {
        const { name, type } = target;
        const value = type === 'checkbox' ? target.checked : target.value;

        setFilterInput({
            ...filterInput,
            [name]: value
        });
    };

    // The filter Function.
    const filterDataTable = data => (
        data.filter(dataItem => (
            // To retrieve the filter values according to the fields, stored in the corresponding state.
            Object.keys(filterInput).every(keyFilter => {
                const composedKey = keyFilter.includes('.');
                // To check if the filter parameter is composed of several words in order to retrieve the right value to perform the comparison.
                return composedKey ? _.get(dataItem, keyFilter).toLowerCase().includes(filterInput[keyFilter].trim().toLowerCase())
                    : String(dataItem[keyFilter]).toLowerCase().includes(filterInput[keyFilter].trim().toLowerCase());
            })
        )));

    return (
        <>
            {/* Data filter block */}
            <Filter
                data={data[0]}
                onChange={handleFilterChange}
                filterInput={filterInput}
                fieldToIgnore={fieldToIgnore}
            />

            {/* Table block */}
            <Table
                data={filterDataTable(data)}
                fieldToIgnore={fieldToIgnore}
            />
        </>
    )
};

FilterTable.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.object.isRequired
    ).isRequired,
    fieldToIgnore: PropTypes.string
};

export default FilterTable;
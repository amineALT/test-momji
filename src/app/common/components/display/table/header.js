import React from 'react';
import _ from 'lodash';
import { flatNestedProperties, labelFormatter } from '../../../data';
import PropTypes from 'prop-types';
import { tableStyle } from './style';

const TableHead = ({ data, fieldToIgnore }) => {
    // To Flatten the content of an object to get the table headers.
    const dataHeadCell = flatNestedProperties(data, null, fieldToIgnore);

    return (
        <thead>
            <tr className={tableStyle.tr}>
                {/* To Check if the table header is made up of several words in order to execute a format function to retrieve the right one. */}
                {_.keys(dataHeadCell).map(property => {
                    const headCellValue = property.split('.').length === 1 ? property : labelFormatter(property);

                    return (
                        <th key={headCellValue}>
                            {headCellValue.toUpperCase()}
                        </th>
                    );
                })}
            </tr>
        </thead>
    )
};

TableHead.propTypes = {
    data: PropTypes.object.isRequired,
    fieldToIgnore: PropTypes.string
};

export default TableHead;
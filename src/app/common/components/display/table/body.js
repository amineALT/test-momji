import React from 'react';
import _ from 'lodash';
import { Link as LinkRouter } from 'react-router-dom';
import { dateFormatter, flatNestedProperties, isDate } from '../../../data';
import PropTypes from 'prop-types';
import { tableStyle } from './style';

const TableBody = ({ data, fieldToIgnore }) => {
    // To Flatten the content of an object to get the table headers, and pass a parameter to ignore the unwanted field.
    const dataCellProperties = Object.keys(flatNestedProperties(data[0], null, fieldToIgnore));

    // To format table cells.
    const dataCellFormatter = (dataCell, cellProperty) => {
        // To retrieve data from cells and apply a format according to the type of value.
        return cellProperty.split('.').length > 1 ? _.get(dataCell, cellProperty) : isDate(dataCell[cellProperty])
            ? dateFormatter(dataCell[cellProperty]) : String(dataCell[cellProperty]);
    };

    return (
        <tbody>
            {data.map(dataCell => (
                <tr key={dataCell['id']} className={tableStyle.tr}>
                    {dataCellProperties.map((cellProperty, index) => (
                        <React.Fragment key={cellProperty.toString()}>
                            <td>
                                {dataCellFormatter(dataCell, cellProperty)}
                            </td>
                            {
                                dataCellProperties.length - 1 === index && (
                                    // To add an additional cell that contains a link to a details page.
                                    <td>
                                        {/* A link to the details of an employer. */}
                                        <LinkRouter
                                            to={{
                                                pathname: '/details',
                                                state: { ...dataCell, fieldToIgnore }
                                            }}
                                        >
                                            See the detail
                                        </LinkRouter>
                                    </td>
                                )
                            }
                        </React.Fragment>
                    ))}
                </tr>
            ))}
        </tbody>
    );
};

TableBody.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.object.isRequired
    ).isRequired,
    fieldToIgnore: PropTypes.string
};

export default TableBody;

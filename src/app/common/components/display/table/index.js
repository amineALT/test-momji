import React from 'react';
import TableHead from './header';
import TableBody from './body';
import PropTypes from 'prop-types';
import { tableStyle } from './style';

const Table = ({ data, fieldToIgnore }) => {
    return (
        data.length &&
        <table className={tableStyle.table}>
            <TableHead
                data={data[0]}
                fieldToIgnore={fieldToIgnore}
            />
            <TableBody
                data={data}
                fieldToIgnore={fieldToIgnore}
            />
        </table>
    );
};

TableBody.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.object.isRequired
    ).isRequired,
    fieldToIgnore: PropTypes.string
};

export default Table;
import React from 'react';
import PropTypes from 'prop-types';

const Label = props => {
    const {
        title,
        children
    } = props;

    return (
        <label>
            {title}
            {children}
        </label>
    );
};

Label.defaultProps = {
    message: ''
};

Label.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.object
};

export default Label;
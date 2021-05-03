import React from 'react';
import PropTypes from 'prop-types';

const ErrorPage = ({ message }) => <div>{message}</div>;

ErrorPage.defaultProps = {
    message: ''
};

ErrorPage.propTypes = {
    message: PropTypes.string.isRequired
};

export default ErrorPage;
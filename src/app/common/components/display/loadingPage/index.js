import React from 'react';
import PropTypes from 'prop-types';

const LoadingPage = ({ message }) => <div>{message}</div>;

LoadingPage.defaultProps = {
    message: 'ssss'
};

LoadingPage.propTypes = {
    message: PropTypes.string.isRequired
};

export default LoadingPage;
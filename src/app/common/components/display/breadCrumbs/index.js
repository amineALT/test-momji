import React from 'react';
import PropTypes from 'prop-types';

const BreadCrumbs = props => {
    const {
        title,
        onClick,
        href,
        className
    } = props;

    return (
        <a
            href={href}
            onClick={onClick}
            className={className}
        >
            {title}
        </a>
    );
};

BreadCrumbs.defaultProps = {
    href: '/',
    onClick: () => { }
};

BreadCrumbs.propTypes = {
    href: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    className: PropTypes.string
};

export default BreadCrumbs;
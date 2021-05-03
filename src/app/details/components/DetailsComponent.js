import React from 'react';
import Form from '../../common/components/form';
import { BreadCrumbs } from '../../common/components/display';
import PropTypes from 'prop-types';
import { detailPageStyle, detailPageGoBackLinkStyle } from './style';

const DetailsComponent = props => {
    const { state: data } = props.location;

    return (
        <div className={detailPageStyle.wrapper}>
            <BreadCrumbs
                title={'❮ Previous'}
                onClick={() => props.history.goBack()}
                className={detailPageStyle.goBackLink}
            />
            <Form
                data={data}
                className={detailPageStyle.form}
            />
        </div>
    );
};

DetailsComponent.propTypes = {
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired
};

export default DetailsComponent;
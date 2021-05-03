import React from 'react';
import FilterTable from '../../common/components/filterTable';
import { ErrorPage, LoadingPage } from '../../common/components/display';
import { useDataApi } from '../../common/data';
import { homeStyle } from './style';

const url = 'https://team.momji.fr/api/v2/static/employees';

const HomeComponent = () => {

    const [{ data, isLoading, isError }] = useDataApi(url, []);

    return (
        <div className={homeStyle}>
            {isError && <ErrorPage message='Something went wrong ...' />}
            {isLoading ? (<LoadingPage message='Loading ...' />) : (
                <FilterTable
                    data={data}
                    fieldToIgnore={'id'}
                />
            )}
        </div>
    )
};

export default HomeComponent;
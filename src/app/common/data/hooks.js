import { useEffect, useReducer } from 'react';
import { dataFetchReducer } from './reducers';
import * as Types from './types';
import axios from 'axios';

// A Custom Hook, which allows you to perform a request to retrieve the data.
const useDataApi = (url, initialState) => {

    const [state, dispatch] = useReducer(dataFetchReducer, {
        isLoading: false,
        isError: false,
        data: initialState
    });

    useEffect(() => {
        let didCancel = false;

        const fetchData = async () => {
            dispatch({ type: Types.FETCH_INIT });

            try {
                const result = await axios(url);

                if (!didCancel) {
                    dispatch({
                        type: Types.FETCH_SUCCESS,
                        payload: result.data
                    });
                }
            } catch (error) {
                if (!didCancel) {
                    dispatch({ type: Types.FETCH_FAILURE });
                }
            }
        };

        fetchData();

        return () => {
            didCancel = true;
        };
    }, []);

    return [state];
};

export {
    useDataApi
};
import * as Types from './types';

// Fetch data reducer
const dataFetchReducer = (state, action) => {
    switch (action.type) {
        case Types.FETCH_INIT:
            return {
                ...state,
                isLoading: true,
                isError: false
            };
        case Types.FETCH_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isError: false,
                data: action.payload
            };
        case Types.FETCH_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true
            };
        default:
            throw new Error('Unknown action type');
    }
};

export {
    dataFetchReducer
};
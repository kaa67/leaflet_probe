import { createSlice } from '@reduxjs/toolkit';
import { createRoutine } from 'redux-saga-routines';

const initialState = {
    // list: [
    //     {
    //         id: 345,
    //         name: 'Cевастополь',
    //         lat: 45,
    //         lon: 35,
    //     },
    //     {
    //         id: 34,
    //         name: 'Евпатория',
    //         lat: 45,
    //         lon: 35,
    //     },
    //     {
    //         id: 45,
    //         name: 'Симферополь',
    //         lat: 45,
    //         lon: 35,
    //     },
    //     {
    //         id: 35,
    //         name: 'Керчь',
    //         lat: 45,
    //         lon: 35,
    //     },
    // ],
    sites: [],
    sitesInProgress: false,
};

const sitesFetch = createRoutine('sites/fetch')

const sitesSlice = createSlice({
    name: 'sites',
    initialState,
    reducers: {
        sitesSet: (state, action) => {
            state.list = action.payload;
        },
        sitesInProgress: (state, action) => {
            state.inProgress = action.payload;
        },
    },
});

const {
    sitesSet,
    sitesInProgress,
} = sitesSlice.actions;

export {
    sitesFetch,
    sitesSet,
    sitesInProgress,
};

export default sitesSlice.reducer;

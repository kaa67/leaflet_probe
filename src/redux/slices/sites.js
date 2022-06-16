import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    list: [
        {
            id: 345,
            name: 'Cевастополь',
            lat: 45,
            lon: 35,
        },
        {
            id: 34,
            name: 'Евпатория',
            lat: 45,
            lon: 35,
        },
        {
            id: 45,
            name: 'Симферополь',
            lat: 45,
            lon: 35,
        },
        {
            id: 35,
            name: 'Керчь',
            lat: 45,
            lon: 35,
        },
    ],
};

const sitesSlice = createSlice({
    name: 'sites',
    initialState,
    reducers: {
        sitesSet: (state, action) => {
            state.list = action.payload;
        },
    },
});

export const {
  sitesSet,
} = sitesSlice.actions;

export default sitesSlice.reducer;

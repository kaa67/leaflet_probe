import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    list: [],
    inProgress: false,
};

const handleSitesSet = (state, action) => {
    state.list = action.payload;
};

const handleSitesInProgress = (state, action) => {
    state.inProgress = action.payload;
};

const sitesSlice = createSlice({
    name: 'sites',
    initialState,
    reducers: {
        sitesSet: handleSitesSet,
        sitesInProgress: handleSitesInProgress,
    },
});

export const {
    sitesSet,
    sitesInProgress,
} = sitesSlice.actions;

export default sitesSlice.reducer;

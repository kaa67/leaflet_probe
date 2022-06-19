import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    inProgress: '',
    list: [],
    index: null,
    modeRouteCreator: false,
};

const routesSlice = createSlice({
    name: 'routes',
    initialState,
    reducers: {
        routesSet: (state, action) => {
            state.list = action.payload;
        },
        routesInProgress: (state, action) => {
            state.inProgress = action.payload;
        },
        modeRouteCreator: (state, action) => {
            state.modeRouteCreator = action.payload;
        },
    },
});

export const {
    routesSet,
    routesInProgress,
    modeRouteCreator,
} = routesSlice.actions;

export default routesSlice.reducer;

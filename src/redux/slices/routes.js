import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    list: [],
    index: null,
};

const routesSlice = createSlice({
    name: 'routes',
    initialState,
    reducers: {
        routeAppend: (state, action) => {
            state.list = [...state.list, action.payload];
        },
        routeUpdate: (state, action) => {
            state.list[action.payload.index] = action.payload.route;
        }, 
        routeDelete: (state, action) => {
            state.list = state.list.filter(
                (_, index) => index !== action.payload,
            );
        }, 

    },
});

export const {
    routeCreate,
    routeUpdate,
    routeDelete,
} = routesSlice.actions;

export default routesSlice.reducer;

import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import routes, {
    routesSet,
    routesInProgress,
    modeRouteCreator,
} from './slices/routes';
import sites, {
    sitesSet,
    sitesInProgress,
} from './slices/sites';
import {
    dataFetch,

    routeCreate,
    routeUpdate,
    routeDelete,
} from './actions'; 
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();
const middleware = getDefaultMiddleware =>
    getDefaultMiddleware().concat(sagaMiddleware);
const store = configureStore({
    reducer: {
        routes,
        sites,
    },
    middleware,
});

export {
    routesSet,
    routesInProgress,
    modeRouteCreator,

    sitesSet,
    sitesInProgress,

    dataFetch,

    routeCreate,
    routeUpdate,
    routeDelete,
};

sagaMiddleware.run(rootSaga);

export default store;

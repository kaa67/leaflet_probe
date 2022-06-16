import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import routes, {
    routeCreate,
    routeUpdate,
    routeDelete,
} from './slices/routes';
import sites, {
    sitesFetch,
    sitesSet,
    sitesInProgress,
} from './slices/sites';
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
    routeCreate,
    routeUpdate,
    routeDelete,
    sitesFetch,
    sitesSet,
    sitesInProgress,
};

sagaMiddleware.run(rootSaga);

export default store;

import { configureStore } from '@reduxjs/toolkit';
import routes, {
    routeCreate,
    routeUpdate,
    routeDelete,
} from './slices/routes';
import sites, {
    sitesSet,
} from './slices/sites';

const store = configureStore({
    reducer: {
        routes,
        sites,
    },
});

export {
    routeCreate,
    routeUpdate,
    routeDelete,
    sitesSet,
};

export default store;

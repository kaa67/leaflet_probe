import { createRoutine } from 'redux-saga-routines';

const dataFetch = createRoutine('data/fetch');

const routeCreate = createRoutine('route/create');
const routeUpdate = createRoutine('route/update');
const routeDelete = createRoutine('route/Delete');



export {
    dataFetch,

    routeCreate,
    routeUpdate,
    routeDelete,
};

import makeActionCreator from './makeActionCreator';

export const ROUTE_SET = 'ROUTE_SET';
export const ROUTE_DELETE = 'ROUTE_DELETE';

const routeActions = {
    ROUTE_SET,
    ROUTE_DELETE,

    routeSet: makeActionCreator(ROUTE_SET, 'index', 'route'),
    routeDelete: makeActionCreator(ROUTE_DELETE, 'index'),
};

export default routeActions;

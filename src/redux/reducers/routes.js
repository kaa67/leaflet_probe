import {
    ROUTE_SET,
    ROUTE_DELETE,
} from '../actions/routeActions';

const initialState = {
    routes: [],
};

const routes = (state = initialState, action) => {
    switch (action.type) {
        case ROUTE_SET: {
            const newState = Object.assign({}, state);
            newState.routes[action.index] = action.route;

            return newState;
        }

        case ROUTE_DELETE: {
          const newState = Object.assign({}, state);
          newState.routes = newState.routes.filter(
            (_, index) => index !== action.index,
          );

          return newState;
      }
    

        default:
            return state;
    }
};

export default routes;

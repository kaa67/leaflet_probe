// @flow

import {
  SITES_LIST_SET,
} from '../actions/siteActions';

const initialState = {
  sites: [
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

const sites = (state = initialState, action) => {
    switch (action.type) {
        case SITES_LIST_SET: {
            const newState = Object.assign({}, state);
            newState.sites = action.sites;
            return newState;
        }
      
        default:
            return state;
    }
};

export default sites;

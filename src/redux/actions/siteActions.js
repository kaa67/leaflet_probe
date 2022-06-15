import makeActionCreator from './makeActionCreator';

export const SITES_LIST_FETCH = 'SITES_LIST_FETCH';
export const SITES_LIST_SET = 'SITES_LIST_SET';

const siteActions = {
    SITES_LIST_FETCH,
    SITES_LIST_SET,

    sitesFetch: makeActionCreator(SITES_LIST_FETCH),
    sitesSet: makeActionCreator(SITES_LIST_SET, 'sites'),
};

export default siteActions;

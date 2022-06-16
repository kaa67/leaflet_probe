import { put, takeLatest, delay } from 'redux-saga/effects'

import {
    sitesFetch,
    sitesSet,
    sitesInProgress,
} from '../redux';

import api from '../mock/api';

function* sitesFetchWorker() {
    try {
        yield put(sitesInProgress(true));
        const sitesList = api.getSitesList();
        yield delay(2000);
        yield put(sitesSet(sitesList));
    } catch (error) {
        console.error(error);
    } finally {
        yield put(sitesInProgress(false));
    }
}

export default function* sitesWatcher() {
    yield takeLatest(sitesFetch.TRIGGER, sitesFetchWorker);
}

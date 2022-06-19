import { put, takeLatest, all, call, delay } from 'redux-saga/effects'

import {
    sitesInProgress,
    sitesSet,

    routesInProgress,
    routesSet,

    dataFetch,
} from '../store';

import api from '../mock/api';

function* dataFetchWorker() {
    try {
        yield put(sitesInProgress('Загрузка пунктов подачи и доставки'));
        const sitesList = yield call(api.getSitesList);
        yield delay(500 + 500 * Math.random());
        yield put(sitesInProgress('Валидация пунктов подачи и доставки'));
        yield delay(500 + 500 * Math.random());
        yield put(sitesSet(sitesList));
        yield put(routesInProgress('Загрузка маршрутов'));
        const routesList = yield call(api.getRoutesList);
        yield delay(500 + 500 * Math.random());
        yield put(sitesInProgress(''));
        yield put(routesInProgress('Валидация и сортировка'));
        yield delay(500 + 500 * Math.random());
        yield put(routesSet(routesList));
    } catch (error) {
        console.error(error);
    } finally {
        yield put(sitesInProgress(''));
        yield put(routesInProgress(''));
    }
}

function* dataFetchWatcher() {
    yield takeLatest(dataFetch.TRIGGER, dataFetchWorker);
}

export default function* rootSaga() {
    yield all([
        dataFetchWatcher(),
    ]);
}

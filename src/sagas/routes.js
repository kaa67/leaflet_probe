import { put, takeLatest, delay, all, select } from 'redux-saga/effects'

import {
    routesSet,
    routesInProgress,

    routeCreate,
    routeUpdate,
    routeDelete,
} from '../store';

import {
    routesListSelector,
} from '../store/selectors';


function* routeCreateWorker(action) {
    try {
        yield put(routesInProgress('Регистрация нового маршрута...'));
        yield delay(500 + 500 * Math.random());
        yield put(routesInProgress('Успешно...'));
        yield delay(500 + 500 * Math.random());
        yield put(routesInProgress('Обновление словаря маршрутов...'));
        yield delay(500 + 500 * Math.random());
        const routesList = yield select(routesListSelector);
        yield put(routesSet([
            ...routesList,
            action.payload,
        ]));
    } catch (error) {
        console.error(error);
    } finally {
        yield put(routesInProgress(''));
    }
}

function* routeUpdateWorker(action) {
    try {
        yield put(routesInProgress('Обновление маршрута...'));
        yield delay(500 + 500 * Math.random());
        yield put(routesInProgress('Успешно...'));
        yield delay(500 + 500 * Math.random());
        yield put(routesInProgress('Обновление словаря маршрутов...'));
        yield delay(500 + 500 * Math.random());
        const routesList = yield select(routesListSelector);
        if (routesList[action.payload.index]) {
            routesList[action.payload.index] =
                action.payload.route;
            yield put(routesSet([...routesList]));
        }
    } catch (error) {
        console.error(error);
    } finally {
        yield put(routesInProgress(''));
    }
}

function* routeDeleteWorker(action) {
    try {
        yield put(routesInProgress('Удаление маршрута...'));
        yield delay(500 + 500 * Math.random());
        yield put(routesInProgress('Успешно...'));
        yield delay(500 + 500 * Math.random());
        yield put(routesInProgress('Обновление словаря маршрутов...'));
        yield delay(500 + 500 * Math.random());
        const routesList = yield select(routesListSelector);
        yield put(routesSet([
            ...routesList.filter(
                (_, index) => index !== action.payload,
            ),
        ]));
    } catch (error) {
        console.error(error);
    } finally {
        yield put(routesInProgress(''));
    }
}

function* routeCreateWatcher() {
    yield takeLatest(routeCreate.TRIGGER, routeCreateWorker);
}

function* routeUpdateWatcher() {
    yield takeLatest(routeUpdate.TRIGGER, routeUpdateWorker);
}

function* routeDeleteWatcher() {
    yield takeLatest(routeDelete.TRIGGER, routeDeleteWorker);
}

export default function* rootSaga() {
    yield all([
        routeCreateWatcher(),
        routeUpdateWatcher(),
        routeDeleteWatcher(),
    ]);
}

import { all } from 'redux-saga/effects';
import routesSaga from './routes';
import commonSaga from './common';

export default function* rootSaga() {
    yield all([
        routesSaga(),
        commonSaga(),
    ])
}

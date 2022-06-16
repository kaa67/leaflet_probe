import { all } from 'redux-saga/effects';
import sitesWatcher from './sites';

export default function* rootSaga() {
    yield all([
        sitesWatcher(),
    ])
}

import {loadFilesApi, loadFileApi, saveFileApi, deleteFileApi} from '../../services/fileapi'
import {actionTypes} from '../ducks/file'
import {put, call, takeLatest, all} from 'redux-saga/effects'
// import {loadFilesSaga} from '../ducks'

function* loadFilesSaga() {
  let jsonResponse = yield call(loadFilesApi)
  yield put( {type: actionTypes.SET_FILES, payload: jsonResponse} )
}

function* loadFileSaga(action) {
  let jsonResponse = yield call(loadFileApi, action.payload)
  if(jsonResponse.content) {
    yield put( {type: actionTypes.SET_FILE, payload: jsonResponse} )
  }
}

function* saveSelectedFileSaga(action) {
  let jsonResponse = yield call(saveFileApi, action.payload)
}

function* deleteSelectedFileSaga(action) {
  let jsonResponse = yield call(deleteFileApi, action.payload.id)
  yield put({type: actionTypes.DELETE_FILE, payload: action.payload.id})
  yield put({type: actionTypes.LOAD_FILES_SAGA})
}

export default function* rootSaga() {
  yield all([
    takeLatest(actionTypes.LOAD_FILES_SAGA, loadFilesSaga),
    takeLatest(actionTypes.LOAD_FILE_SAGA, loadFileSaga),
    takeLatest(actionTypes.SAVE_SELECTED_FILE_SAGA, saveSelectedFileSaga),
    takeLatest(actionTypes.DELETE_SELECTED_FILE_SAGA, deleteSelectedFileSaga)
  ])
}
export const actionTypes = {
  SET_FILES: 'SET_FILES',
  SET_FILE: 'SET_FILE',
  SET_SELECTED_FILE: 'SET_SELECTED_FILE',
  LOAD_FILES_SAGA: 'LOAD_FILES_SAGA',
  LOAD_FILE_SAGA: 'LOAD_FILE_SAGA',
  SAVE_SELECTED_FILE_SAGA: 'SAVE_SELECTED_FILE_SAGA',
  DELETE_SELECTED_FILE_SAGA: 'DELETE_SELECTED_FILE_SAGA',
  DELETE_FILE: 'DELETE_FILE'
}

const initialState = {
  selectedFileMenu: null, //selected file on the menu
  selectedFile: null, //selected file content
  files: [], //files and directories list
}

const fileReducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.SET_FILES:
      return {...state, files: action.payload}
    case actionTypes.SET_SELECTED_FILE:
      return {...state, selectedFileMenu: action.payload}
    case actionTypes.SET_FILE:
      return {...state, selectedFile: action.payload}
    case actionTypes.DELETE_FILE:
      return {...state, files: state.files.filter(item => item.id != action.payload)}
    default:
      return state
  }
}

export function setSelectedFile(file) {
  return {
    type: actionTypes.SET_SELECTED_FILE,
    payload: file
  }
}

export function loadFilesSaga() {
  return {
    type: actionTypes.LOAD_FILES_SAGA
  }
}

export function loadFileSaga(idFile) {
  return {
    type: actionTypes.LOAD_FILE_SAGA,
    payload: idFile
  }
}

export function saveFileSaga(file) {
  return {
    type: actionTypes.SAVE_SELECTED_FILE_SAGA,
    payload: file
  }
}

export function deleteFileSaga(id) {
  return {
    type: actionTypes.DELETE_SELECTED_FILE_SAGA,
    payload: id
  }
}

export default fileReducer
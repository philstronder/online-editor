import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux'
import {applyMiddleware, createStore, compose} from 'redux'
import createSaga from 'redux-saga'
import fileReducer from './redux/ducks/file'
import sagas from './redux/sagas'

const sagaMiddleware = createSaga()

const dev = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore(
  fileReducer,
  compose(
    applyMiddleware(sagaMiddleware),
    dev
  )
)
    
sagaMiddleware.run(sagas)

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>
  ,document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

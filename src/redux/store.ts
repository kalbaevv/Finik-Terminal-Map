/* External dependencies */
import { applyMiddleware, combineReducers, createStore as createReduxStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import { combineEpics, createEpicMiddleware } from 'redux-observable';

/* Local dependencies */
import getDevices from '../components/devices/getDevices/redux/reducer';

const rootEpic = combineEpics();

const rootReducer = combineReducers({
  getDevices,
});

let store;

export function createStore(): Store {
  const epicMiddleware = createEpicMiddleware();
  store = createReduxStore(rootReducer, composeWithDevTools(applyMiddleware(epicMiddleware)));

  epicMiddleware.run(rootEpic);

  return store;
}

export type RootState = ReturnType<typeof store.getState>;

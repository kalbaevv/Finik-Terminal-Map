/* Local dependencies */
import { createStore } from '../../src/redux/store';

export function configureTestStore() {
  const store = createStore();
  const origDispatch = store.dispatch;
  store.dispatch = jest.fn(origDispatch);

  return store;
}

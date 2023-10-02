/* External dependencies */
import React from 'react';
import { Provider } from 'react-redux';

/* Local dependencies */
import { createStore } from './store';

const store = createStore();

export default ({ element }) => {
  return (
      <Provider store={store}>{element}</Provider>
  );
};

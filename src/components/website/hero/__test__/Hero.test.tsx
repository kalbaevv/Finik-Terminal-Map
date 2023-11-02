import React from 'react';
import { I18nextProvider } from 'gatsby-plugin-react-i18next';
import renderer from 'react-test-renderer';

import { configureTestStore } from '../../../../../tests/utils';
import i18n from '../../../../../tests/utils/i18nForTest';
import Hero from '../Hero';
import { Provider } from 'react-redux';

describe('AppFeatures component', () => {
  const store = configureTestStore();

  function getRenderComponent() {
    return (
      <I18nextProvider i18n={i18n}>
        <Provider store={store}>
          <Hero />
        </Provider>
      </I18nextProvider>
    );
  }
  it('should match the snapshot', () => {
    const component = renderer.create(getRenderComponent());

    expect(component.toJSON()).toMatchSnapshot();
  });
});

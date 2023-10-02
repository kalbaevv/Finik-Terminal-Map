/* External dependencies */
import React from 'react';
import { I18nextProvider } from 'gatsby-plugin-react-i18next';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';

/* Local dependencies */
import i18n from '../../../../../tests/utils/i18nForTest';
import { configureTestStore } from '../../../../../tests/utils';
import MainPage from '../MainPage';

describe('MainPage component', () => {
  const store = configureTestStore();

  function getRenderComponent() {
    return (
      <Provider store={store}>
        <I18nextProvider i18n={i18n}>
          <MainPage />
        </I18nextProvider>
      </Provider>
    );
  }

  it('should match the snapshot', () => {
    const component = renderer.create(getRenderComponent());

    expect(component.toJSON()).toMatchSnapshot();
  });
});

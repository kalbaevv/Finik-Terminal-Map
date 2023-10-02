/* External dependencies */
import React from 'react';
import { I18nextProvider } from 'gatsby-plugin-react-i18next';
import renderer from 'react-test-renderer';

/* Local dependencies */
import i18n from '../../../../../tests/utils/i18nForTest';
import AboutUs from '../AboutUs';

describe('AboutUs component', () => {
  function getRenderComponent() {
    return (
      <I18nextProvider i18n={i18n}>
        <AboutUs />
      </I18nextProvider>
    );
  }

  it('should match the snapshot', () => {
    const component = renderer.create(getRenderComponent());

    expect(component.toJSON()).toMatchSnapshot();
  });
});

/* External dependencies */
import { Div, Text, Image, Container } from 'atomize';
import React from 'react';
import { useTranslation } from 'react-i18next';

/* Local dependencies */
import StoreAndWebRedirect from './storeAndWebRedirect/StoreAndWebRedirect';

import mapVideo from '../../../assets/images/png/gif.mp4';
import FinikLogo from '../../../assets/images/svg/FinikLogo.svg';
import webIcon from '../../../assets/images/svg/webApp.svg';
import appStoreIcon from '../../../assets/images/svg/apple.svg';
import googlePlayicon from '../../../assets/images/svg/googlePlay.svg';

import { descrStyles, mainTitleStyles } from '../../../assets/styles/globalStyles';
import './Hero.scss';

export default function Hero() {
  const { t } = useTranslation();

  const heroContentStyles = {
    d: 'flex',
    flexDir: 'column',
    align: 'center',
    pos: 'absolute',
    left: '35%',
    top: '35%',
  };

  return (
    <Div bg="black">
      <Div d="flex" justify="center" pos="relative">
        <video className="heroVideo" muted loop autoPlay>
          <source src={mapVideo} />
        </video>
      </Div>
      <Div {...heroContentStyles}>
        <Div d="flex" align="center" m={{ b: '20px' }}>
          <Image w="60px" h="60px" src={FinikLogo} />
          <Text {...mainTitleStyles}>{t('map')}</Text>
        </Div>
        <Div m={{ b: '20px' }}>
          <Text {...descrStyles} textAlign="center">
            {t('finikDescr')}
          </Text>
        </Div>
        <Div d="flex" style={{ gap: 24 }}>
          <StoreAndWebRedirect icon={webIcon} descr={t('goToThe')} title={t('Web app')} />
          <StoreAndWebRedirect icon={googlePlayicon} descr={t('getItOn')} title="Google Play" />
          <StoreAndWebRedirect icon={appStoreIcon} descr={t('downloadOnThe')} title="App Store" />
        </Div>
      </Div>
    </Div>
  );
}

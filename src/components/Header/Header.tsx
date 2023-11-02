import React, { useState } from 'react';
import { Div, Image, Container, Text, Dropdown, Anchor } from 'atomize';

import FinikLogo from '../../assets/images/svg/FinikLogo.svg';
import gb from '../../assets/images/svg/kg.svg';
import ky from '../../assets/images/svg/kg.svg';
import ru from '../../assets/images/svg/kg.svg';

import { Link } from '@reach/router';
import { HeaderWrapper, dropDownStyles } from './HeaderStyles';

export default function Header() {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleClick = () => {
    setShowDropdown(!showDropdown);
  };

  const menuList = (
    <Div p={{ x: '1rem', y: '0.5rem' }}>
      {[
        { name: 'RU', img: `${ru}`, link: '/' },
        { name: 'KG', img: `${ky}`, link: '/ky/' },
        { name: 'EN', img: `${gb}`, link: '/en/' },
      ].map((item) => (
        <Link to={item.link}>
          <Div d="flex" align="center">
            <Anchor d="block" p={{ t: '0.25rem' }}>
              {item.name}
            </Anchor>
          </Div>
        </Link>
      ))}
    </Div>
  );

  const match = window.location.pathname.match(/\/([a-z]+).*/);
  let locale = 'ru';

  if (match && Object.keys(Locales).includes(match[1])) {
    locale = match[1];
  }

  const currentLocale = Locales[locale];

  return (
    <Div bg="black">
      <Container>
        <Div {...HeaderWrapper}>
          <Div w="32px" h="32pxx">
            <Image src={FinikLogo} />
          </Div>
          <Div>
            <Dropdown {...dropDownStyles} isOpen={showDropdown} onClick={handleClick} menu={menuList}>
              {currentLocale}
            </Dropdown>
          </Div>
        </Div>
      </Container>
    </Div>
  );
}

enum Locales {
  en = 'EN',
  ky = 'КЫР',
  ru = 'РУС',
}

/* External dependencies */
import { Div, Image, Text } from 'atomize';
import { Link } from 'gatsby';
import React from 'react';

interface IStoreAndWebRedirect {
  link?: string;
  icon: string;
  descr: string;
  title: string;
}

const wrapperStyles = {
  d: 'flex',
  align: 'center',
  justify: 'space-evenly',
  w: { lg: '190px', md: '150px' },
  h: { lg: '55px', md: '40px' },
  bg: 'black',
  border: '2px solid',
  borderColor: '#A6A6A6',
  rounded: 'lg',
};

const StoreAndWebRedirect: React.FC<IStoreAndWebRedirect> = ({ link, icon, descr, title }) => {
  return (
    <Link to={link}>
      <Div {...wrapperStyles}>
        <Div>
          <Image w={{ lg: '35px', md: '25px', sm: '' }} h={{ lg: '35px', md: '25px', sm: '' }} src={icon} />
        </Div>
        <Div>
          <Text textColor="text_default_color" textSize={{ lg: '12px', md: '10px' }}>
            {descr}
          </Text>
          <Text textColor="text_default_color" textWeight="bold" textSize={{ lg: 'heading2', md: 'display' }}>
            {title}
          </Text>
        </Div>
      </Div>
    </Link>
  );
};

export default StoreAndWebRedirect;

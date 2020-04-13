import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import {
  Container,
  Logo,
  BasketContainer,
  ItemCount,
  LogoButton,
} from './styles';

export default function Header({ data }) {
  const { navigation } = data;

  const cartSize = useSelector((state) => state.cart.length || 0);

  const handleGoToCart = () => {
    navigation.navigate('Cart');
  };

  const handleGoToHome = () => {
    navigation.navigate('Home');
  };

  return (
    <Container>
      <LogoButton onPress={handleGoToHome}>
        <Logo />
      </LogoButton>
      <BasketContainer onPress={handleGoToCart}>
        <Icon name="shopping-basket" color="#FFF" size={24} />
        <ItemCount>{cartSize}</ItemCount>
      </BasketContainer>
    </Container>
  );
}

Header.propTypes = {
  data: PropTypes.shape().isRequired,
};

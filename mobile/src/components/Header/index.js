import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';

import {
  Container,
  Logo,
  BasketContainer,
  ItemCount,
  LogoButton,
} from './styles';

function Header({ data, cartSize }) {
  const { navigation } = data;

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

export default connect((state) => ({
  cartSize: state.cart.length || 0,
}))(Header);

import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Logo,
  Wrapper,
  BasketContainer,
  ItemCount,
  LogoButton,
} from './styles';

export default function Header({ data }) {
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
        <ItemCount>30</ItemCount>
        {/* <ItemCount>{cartSize || 0}</ItemCount> */}
      </BasketContainer>
    </Container>
  );
}

import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Logo, Wrapper, BasketContainer, ItemCount } from './styles';

export default function Header(navigation) {
  console.tron.log({ navigation });
  return (
    <Wrapper>
      <Container>
        <Logo />
        <BasketContainer onPress={() => navigation.navigate('Cart')}>
          <Icon name="shopping-basket" color="#FFF" size={24} />
          <ItemCount>0</ItemCount>
          {/* <ItemCount>{cartSize || 0}</ItemCount> */}
        </BasketContainer>
      </Container>
    </Wrapper>
  );
}

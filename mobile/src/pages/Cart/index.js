import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { FlatList } from 'react-native';

import {
  Container,
  ItemBox,
  ProductImage,
  DescriptionBox,
  ProductTitle,
  ProductPrice,
  SubTotalBox,
  DeleteIconBox,
  AmountBox,
  ProductAmount,
  PriceBox,
  FooterCart,
  TotalLabel,
  TotalValue,
  CheckoutButton,
  CheckoutButtonLabel,
  ImageBox,
} from './styles';

function Cart({ cart }) {
  state = {
    products: [],
  };

  const { products } = this.state;
  return (
    <Container>
      <FlatList
        data={products}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <>
            <ItemBox>
              <ImageBox>
                <ProductImage source={{ uri: item.image }} />
              </ImageBox>
              <DescriptionBox>
                <ProductTitle>{item.title}</ProductTitle>
                <ProductPrice>{item.price}</ProductPrice>
              </DescriptionBox>
              <DeleteIconBox>
                <Icon name="delete-forever" size={25} color="#7159c1" />
              </DeleteIconBox>
            </ItemBox>
            <SubTotalBox>
              <AmountBox>
                <Icon name="remove-circle-outline" size={20} color="#7159c1" />
                <ProductAmount value={String(3)} />
                <Icon name="add-circle-outline" size={20} color="#7159c1" />
              </AmountBox>
              <PriceBox>{item.price}</PriceBox>
            </SubTotalBox>
          </>
        )}
      />
      <FooterCart>
        <TotalLabel>TOTAL</TotalLabel>
        <TotalValue>$1619,10</TotalValue>
      </FooterCart>
      <CheckoutButton>
        <CheckoutButtonLabel>CHECKOUT</CheckoutButtonLabel>
      </CheckoutButton>
    </Container>
  );
}

const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(Cart);

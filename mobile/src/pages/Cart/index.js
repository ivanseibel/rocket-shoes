import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';

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

function Cart({ cart, dispatch }) {
  const handleRemoveFromCart = (id) => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      id,
    });
  };

  return (
    <Container>
      <FlatList
        data={cart}
        keyExtractor={(product) => String(product.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item: product }) => (
          <>
            <ItemBox>
              <ImageBox>
                <ProductImage source={{ uri: product.image }} />
              </ImageBox>
              <DescriptionBox>
                <ProductTitle>{product.title}</ProductTitle>
                <ProductPrice>{product.price}</ProductPrice>
              </DescriptionBox>
              <DeleteIconBox
                onPress={() => {
                  handleRemoveFromCart(product.id);
                }}
              >
                <Icon name="delete-forever" size={25} color="#7159c1" />
              </DeleteIconBox>
            </ItemBox>
            <SubTotalBox>
              <AmountBox>
                <Icon name="remove-circle-outline" size={20} color="#7159c1" />
                <ProductAmount value={String(product.amount)} />
                <Icon name="add-circle-outline" size={20} color="#7159c1" />
              </AmountBox>
              <PriceBox>{product.price}</PriceBox>
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

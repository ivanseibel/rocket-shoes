import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { FlatList, TouchableOpacity, View } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { formatPrice } from '../../util/format';
import {
  CartItem,
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
import * as CartActions from '../../store/modules/cart/actions';

function Cart({ cart, total, removeFromCart, updateAmount }) {
  const incrementAmount = (product) => {
    updateAmount(product.id, product.amount + 1);
  };

  const decrementAmount = (product) => {
    updateAmount(product.id, product.amount - 1);
  };

  return (
    <Container>
      <FlatList
        data={cart}
        keyExtractor={(product) => product.id.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <CartItem>
            <ItemBox>
              <ImageBox>
                <ProductImage source={{ uri: item.image }} />
              </ImageBox>
              <DescriptionBox>
                <ProductTitle>{item.title}</ProductTitle>
                <ProductPrice>{item.formattedPrice}</ProductPrice>
              </DescriptionBox>
              <DeleteIconBox
                onPress={() => {
                  removeFromCart(item.id);
                }}
              >
                <Icon name="delete-forever" size={25} color="#7159c1" />
              </DeleteIconBox>
            </ItemBox>
            <SubTotalBox>
              <AmountBox>
                <TouchableOpacity
                  onPress={() => {
                    decrementAmount(item);
                  }}
                >
                  <Icon
                    name="remove-circle-outline"
                    size={20}
                    color="#7159c1"
                  />
                </TouchableOpacity>
                <ProductAmount value={String(item.amount)} />
                <TouchableOpacity
                  onPress={() => {
                    incrementAmount(item);
                  }}
                >
                  <Icon name="add-circle-outline" size={20} color="#7159c1" />
                </TouchableOpacity>
              </AmountBox>
              <PriceBox>{item.subtotal}</PriceBox>
            </SubTotalBox>
          </CartItem>
        )}
      />
      <FooterCart>
        <TotalLabel>TOTAL</TotalLabel>
        <TotalValue>{total}</TotalValue>
      </FooterCart>
      <CheckoutButton>
        <CheckoutButtonLabel>CHECKOUT</CheckoutButtonLabel>
      </CheckoutButton>
    </Container>
  );
}

const mapStateToProps = (state) => ({
  cart: state.cart.map((product) => ({
    ...product,
    formattedPrice: formatPrice(product.price),
    subtotal: formatPrice(product.price * product.amount),
  })),
  total: formatPrice(
    state.cart.reduce((total, product) => {
      return total + product.price * product.amount;
    }, 0)
  ),
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

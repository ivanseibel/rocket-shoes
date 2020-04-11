import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { FlatList, TouchableOpacity } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { formatPrice } from '../../util/format';
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
                <ProductPrice>{product.formattedPrice}</ProductPrice>
              </DescriptionBox>
              <DeleteIconBox
                onPress={() => {
                  removeFromCart(product.id);
                }}
              >
                <Icon name="delete-forever" size={25} color="#7159c1" />
              </DeleteIconBox>
            </ItemBox>
            <SubTotalBox>
              <AmountBox>
                <TouchableOpacity
                  onPress={() => {
                    decrementAmount(product);
                  }}
                >
                  <Icon
                    name="remove-circle-outline"
                    size={20}
                    color="#7159c1"
                  />
                </TouchableOpacity>
                <ProductAmount value={String(product.amount)} />
                <TouchableOpacity
                  onPress={() => {
                    incrementAmount(product);
                  }}
                >
                  <Icon name="add-circle-outline" size={20} color="#7159c1" />
                </TouchableOpacity>
              </AmountBox>
              <PriceBox>{product.subtotal}</PriceBox>
            </SubTotalBox>
          </>
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

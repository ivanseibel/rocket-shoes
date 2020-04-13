import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { FlatList, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

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
  EmptyCartBox,
  EmptyCartText,
} from './styles';
import * as CartActions from '../../store/modules/cart/actions';

export default function Cart() {
  const cart = useSelector((state) =>
    state.cart.map((product) => ({
      ...product,
      formattedPrice: formatPrice(product.price),
      subtotal: formatPrice(product.price * product.amount),
    }))
  );

  const total = useSelector((state) =>
    formatPrice(
      state.cart.reduce((totalSum, product) => {
        return totalSum + product.price * product.amount;
      }, 0)
    )
  );

  const dispatch = useDispatch();

  function incrementAmount(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount + 1));
  }

  function decrementAmount(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount - 1));
  }

  function removeProduct(id) {
    dispatch(CartActions.removeFromCart(id));
  }

  return (
    <>
      <Container hide={cart.length > 0}>
        <EmptyCartBox>
          <Icon name="remove-shopping-cart" size={40} color="#ddd" />
          <EmptyCartText>Your cart is empty</EmptyCartText>
        </EmptyCartBox>
      </Container>
      <Container hide={cart.length === 0}>
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
                    removeProduct(item.id);
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
    </>
  );
}

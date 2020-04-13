import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector, useDispatch } from 'react-redux';

import * as CartActions from '../../store/modules/cart/actions';
import api from '../../services/api';
import { formatPrice } from '../../util/format';
import {
  Container,
  ProductBox,
  ProductImg,
  ProductTitle,
  ProductPrice,
  AddButton,
  AddText,
  TotalInCart,
  CartBox,
  LabelButtonBox,
  FooterBox,
} from './styles';

export default function Home() {
  const [products, setProducts] = useState([]);

  const amount = useSelector((state) =>
    state.cart.reduce((amountSum, product) => {
      amountSum[product.id] = product.amount;
      return amountSum;
    }, {})
  );

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('/products');

      const data = response.data.map((product) => {
        product.formattedPrice = formatPrice(product.price);
        return product;
      });

      if (response) {
        setProducts([...data]);
      }
    }

    loadProducts();
  }, []);

  const dispatch = useDispatch();

  function handleAddProduct(id) {
    dispatch(CartActions.addToCartRequest(id));
  }

  return (
    <Container>
      <FlatList
        horizontal
        data={products}
        keyExtractor={(product) => String(product.id)}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item: product }) => (
          <ProductBox>
            <ProductImg source={{ uri: product.image }} />
            <ProductTitle>{product.title}</ProductTitle>
            <FooterBox>
              <ProductPrice>{product.formattedPrice}</ProductPrice>
              <AddButton
                onPress={() => {
                  handleAddProduct(product.id);
                }}
              >
                <CartBox>
                  <Icon name="add-shopping-cart" color="#fff" size={20} />
                  <TotalInCart>{amount[product.id] || 0}</TotalInCart>
                </CartBox>
                <LabelButtonBox>
                  <AddText>ADD TO CART</AddText>
                </LabelButtonBox>
              </AddButton>
            </FooterBox>
          </ProductBox>
        )}
      />
    </Container>
  );
}

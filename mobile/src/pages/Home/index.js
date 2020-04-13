import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

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

function Home({ amount, addToCartRequest }) {
  const [products, setProducts] = useState([]);

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

  function handleAddProduct(id) {
    addToCartRequest(id);
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

Home.propTypes = {
  addToCartRequest: PropTypes.func.isRequired,
  amount: PropTypes.shape().isRequired,
};

const mapStateToProps = (state) => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;
    return amount;
  }, {}),
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);

import React, { Component } from 'react';
import { FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

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

class Home extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('/products');

    const data = response.data.map((product) => {
      product.formattedPrice = formatPrice(product.price);
      return product;
    });

    if (response) {
      this.setState({ products: [...data] });
    }
  }

  handleAddProduct = (product) => {
    const { addToCart } = this.props;

    addToCart(product);
  };

  render() {
    const { products } = this.state;
    const { amount } = this.props;

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
                    this.handleAddProduct(product);
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
}

const mapStateToProps = (state) => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;
    return amount;
  }, {}),
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);

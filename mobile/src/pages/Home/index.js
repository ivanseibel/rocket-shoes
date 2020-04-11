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
    const { navigation } = this.props;

    console.tron.log(navigation);
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
                    <TotalInCart>{product.amount || 0}</TotalInCart>
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

// Send CartActions to props
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(CartActions, dispatch);

// First parameter is null because there is no mapStateToProps
export default connect(null, mapDispatchToProps)(Home);

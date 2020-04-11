import React, { Component } from 'react';
import { FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';

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
    const { dispatch } = this.props;

    dispatch({
      type: 'ADD_TO_CART',
      product,
    });
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
          keyExtractor={(item) => String(item.id)}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <ProductBox>
              <ProductImg source={{ uri: item.image }} />
              <ProductTitle>{item.title}</ProductTitle>
              <FooterBox>
                <ProductPrice>{item.formattedPrice}</ProductPrice>
                <AddButton
                  onPress={() => {
                    this.handleAddProduct(item);
                  }}
                >
                  <CartBox>
                    <Icon name="add-shopping-cart" color="#fff" size={20} />
                    <TotalInCart>{3}</TotalInCart>
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

export default connect()(Home);

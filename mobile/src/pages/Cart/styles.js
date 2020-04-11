import styled from 'styled-components/native';

export const Container = styled.View`
  margin: 40px 20px 70px;
  background: #fff;
  padding: 15px;
  border-radius: 4px;
`;

export const ItemBox = styled.View`
  flex-direction: row;
  align-items: center;
  flex: 1;
`;

export const ImageBox = styled.View``;

export const ProductImage = styled.Image`
  width: 80px;
  height: 80px;
`;

export const DescriptionBox = styled.View`
  width: 150px;
  padding: 0 10px;
  flex: 1;
`;

export const ProductTitle = styled.Text`
  color: #333;
`;

export const ProductPrice = styled.Text`
  margin-top: 4px;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: auto;
`;

export const DeleteIconBox = styled.TouchableOpacity`
  width: 25px;
  height: 25px;
`;

export const SubTotalBox = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: #eeeeee;
  padding: 5px 10px;
  border-radius: 4px;
  margin-top: 5px;
  margin-bottom: 10px;
`;

export const AmountBox = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ProductAmount = styled.TextInput.attrs({
  editable: false,
})`
  background: #fff;
  color: #666;
  padding: 0 10px;
  margin: 0 5px;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 52px;
`;

export const PriceBox = styled.Text`
  font-weight: bold;
`;

export const FooterCart = styled.View`
  align-items: center;
  margin-top: 5px;
  margin-bottom: auto;
`;

export const TotalLabel = styled.Text`
  font-size: 16px;
  color: #666;
`;

export const TotalValue = styled.Text`
  font-weight: bold;
  font-size: 25px;
`;

export const CheckoutButton = styled.TouchableOpacity`
  background: #7159c1;
  padding: 15px;
  border-radius: 4px;
  margin-top: 20px;
  align-items: center;
`;

export const CheckoutButtonLabel = styled.Text`
  color: #fff;
  font-weight: bold;
`;

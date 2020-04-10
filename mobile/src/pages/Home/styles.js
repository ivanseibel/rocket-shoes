import styled from 'styled-components/native';
import { darken } from 'polished';

export const Container = styled.View`
  margin-top: 70px;
  background: #141419;
`;

export const ProductBox = styled.View`
  background: #fff;
  padding: 10px;
  margin: 10px 0px 0 20px;
  border-radius: 4px;
  width: 220px;
`;

export const ProductImg = styled.Image`
  height: 200px;
  width: 200px;
  background: #666;
`;

export const ProductTitle = styled.Text`
  color: #333;
  font-size: 16px;
  margin-bottom: 10px;
`;

export const FooterBox = styled.View`
  margin-top: auto;
`;

export const ProductPrice = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const AddButton = styled.TouchableOpacity`
  background: #7159c1;
  flex-direction: row;
  align-items: center;
  border-radius: 4px;
  margin-bottom: 0;
`;

export const CartBox = styled.View`
  background: ${darken(0.03, '#7159c1')};
  padding: 12px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  flex-direction: row;
  align-items: center;
`;

export const AddText = styled.Text`
  color: #fff;
  font-weight: bold;
`;

export const TotalInCart = styled.Text`
  color: #fff;
  margin: 0px 4px 0px 10px;
`;

export const LabelButtonBox = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

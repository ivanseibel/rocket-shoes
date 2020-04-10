import styled from 'styled-components/native';

export const Container = styled.View`
  margin-top: 70px;
  background: #141419;
`;

export const ProductBox = styled.View`
  background: #fff;
  padding: 10px;
  margin: 15px 0px 0 20px;
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
  margin: 4px;
`;

export const ProductPrice = styled.Text`
  margin: 4px;
  font-weight: bold;
  font-size: 18px;
`;

export const AddButton = styled.TouchableOpacity`
  background: #7159c1;
  flex-direction: row;
  align-items: center;
  border-radius: 4px;
  margin-top: auto;
  padding: 15px;
`;

export const AddText = styled.Text`
  color: #fff;
  font-weight: bold;
`;

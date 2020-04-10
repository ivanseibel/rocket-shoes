import styled from 'styled-components/native';

import logo from '../../assets/logo.png';

export const Wrapper = styled.SafeAreaView`
  flex: 0;
  flex-direction: row;
  background: #141419;
`;

export const Container = styled.View`
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
  padding: 20px;
  height: 70px;
  background: #141419;
`;

export const LogoButton = styled.TouchableOpacity`
  height: 24px;
  width: 185px;
`;

export const Logo = styled.Image.attrs({
  source: logo,
  resizeMode: 'cover',
})`
  height: 24px;
  width: 185px;
`;

export const BasketContainer = styled.TouchableOpacity`
  height: 24px;
  width: 24px;
  /* flex: 1; */
  /* align-items: flex-end;
  justify-content: flex-end; */
`;

export const ItemCount = styled.Text`
  position: absolute;
  text-align: center;
  top: -10px;
  right: -10px;
  width: 20px;
  height: 20px;
  background: #7159c1;
  color: #fff;
  font-size: 11px;
  padding: 2px;
  border-radius: 10px;
  overflow: hidden;
`;

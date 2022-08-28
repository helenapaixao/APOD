import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
export const Container = styled.View`
  flex: 1;
  background-color: #11162A;
  padding: 0 24px;
`;

export const Content = styled.Text`
font-size: ${RFValue(14)}px;
align-items: center;
text-align: justify;
margin-top: 140px;
font-family: "Montserrat_400Regular";
color: #FFF;
`

export const Link = styled.Text`
font-style: italic;
font-size: ${RFValue(14)}px;
font-family: "Montserrat_400Regular";
color: #FFF;
align-items: center;
text-align: justify;
margin-top: 50px;
`;
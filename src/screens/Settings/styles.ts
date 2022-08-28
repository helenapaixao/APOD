import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';


export const Container = styled.View`
  flex: 1;
  background-color: #11162A;
  padding: 0 24px;
`;

export const TextContent = styled.Text`
font-size: ${RFValue(18)}px;
font-family: "Montserrat_500Medium";
color: #FFF;
`

export const ContainerSwitch = styled.View`
flex-direction: row;
justify-content: space-between; 
margin-top: 20px;
`

export const Title = styled.Text`
font-size: ${RFValue(18)}px;
align-items: center;
text-align: justify;
margin-top: 100px;
font-family: "Montserrat_700Bold";
color: #FFF;
`;

export const Content = styled.Text`
font-size: ${RFValue(14)}px;
align-items: center;
text-align: justify;
margin-top: 140px;
font-family: "Montserrat_400Regular";
color: #FFF;
`

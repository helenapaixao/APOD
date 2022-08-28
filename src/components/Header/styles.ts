import styled from 'styled-components/native';
import Entypo from '@expo/vector-icons/Entypo';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';


export const Container = styled.View` 
  flex-direction: row;
  align-items: center;
  height: 60px;
  background-color: #11162A ;

`;

export const Icon = styled(Entypo)`
font-size: ${RFValue(20)}px;
color: #FFF;
margin-top: 20px;
margin-left: 350px;
`;

import styled from "styled-components/native";

import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;
  background-color: #f2f3f5;
  padding: 0 24px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: "Montserrat_700Bold";
  color: "#FFF";
  align-content: "center";
  text-align: "center";
  margin-bottom: 20px;
`;

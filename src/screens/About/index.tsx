import React from "react";
import {Image} from 'react-native'
import { Header } from "../../components/Header";
import * as S from "./styles";


export function About() {
  return (
    <>
      {/* <Header /> */}
      <S.Container>
        <S.Content>
          Each day a different image or photograph of our fascinating universe
          is featured, along with a brief explanation written by a professional
          astronomer.
        </S.Content>
        <S.Link>Information from https://api.nasa.gov/</S.Link>
        <Image
        source={require('../../../assets/images/nasa.png')}
      />
      </S.Container>
    
    </>
  );
}
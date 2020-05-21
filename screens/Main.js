import React from "react";
// import { View, Text, Button } from "react-native";
import styled from "styled-components";
import Swiper from "react-native-swiper";

import MAINCOLOR from "../color/MainColor";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("screen");

const Container = styled.View`
  width: 100%;
  height: ${height / 3}px;
`;

const Section = styled.View`
  background-color: red;
  height: 100%;
`;

const Text = styled.Text``;

export default () => (
  <Container>
    <Swiper autoplay={true} autoplayTimeout={4}>
      <Section>
        <Text>화면1</Text>
      </Section>
      <Section>
        <Text>화면2</Text>
      </Section>
      <Section>
        <Text>화면3</Text>
      </Section>
    </Swiper>
  </Container>
);

import React from "react";
// import { View, Text, Button } from "react-native";
import styled from "styled-components";
import Swiper from "react-native-swiper";

import MAINCOLOR from "../color/MainColor";
import { Dimensions, View, ScrollView } from "react-native";
import { color } from "react-native-reanimated";

const { width, height } = Dimensions.get("screen");

// height: ${height / 3}px;
const Container = styled.ScrollView`
  width: 100%;
  height: 100%;
`;

// height: 100px;
const Category = styled.View`
  width: 100%;
  height: 500px
  background-color: blue;
`;

const Section = styled.View`
  background-color: red;
  height: 100%;
`;

const Text = styled.Text``;

export default () => (
  <Container>
    <Swiper
      autoplay={true}
      autoplayTimeout={4}
      style={{ height: 250, marginTop: 15, marginBottom: 15 }}
    >
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
    <Category></Category>
  </Container>
);

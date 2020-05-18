import React from "react";
import { View, Text, Button } from "react-native";
import MAINCOLOR from "../color/MainColor";

export default ({ navigation }) => (
  <View style={{ flex: 1, backgroundColor: MAINCOLOR }}>
    <Text style={{ color: "white" }}>Restaurant</Text>
    <Button title="Restaurant" onPress={() => navigation.navigate("Detail")} />
  </View>
);

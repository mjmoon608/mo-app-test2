import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import DetailScreen from "../screens/Detail";
import Tabs from "./Tabs";
import { Dimensions } from "react-native";

import MAINCOLOR from "../color/MainColor";

const { height, width } = Dimensions.get("window");

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator
    mode="card" // default 값이 card임
    screenOptions={{
      ...Platform.select({
        ios: {
          headerStyle: {
            backgroundColor: MAINCOLOR,
            // borderBottomColor: "pink", // 아이폰에서 헤더와 스크린을 구분하는 선을 없애기 위해 색상 통일
            // shadowColor: "pink", // 아이폰에서 헤더와 스크린을 구분하는 선을 없애기 위해 색상 통일
            // elevation: 0,
            shadowOpacity: 0,
            // borderBottomWidth: 0,
          },
        },
        android: {
          headerStyle: {
            backgroundColor: "pink",
            elevation: 0,
          },
        },
      }),

      headerTintColor: "white",
      headerBackTitleVisible: false,
      headerTitleAlign: "center", // 안드로이드에서 headerTitle을 중간에 놓기 위해 넣음.
    }}
  >
    {/* 여기에 스크린을 넣을 거임 */}
    <Stack.Screen name="Tabs" component={Tabs} />
    <Stack.Screen name="Detail" component={DetailScreen} />
  </Stack.Navigator>
);

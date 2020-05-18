import React, { useEffect, useLayoutEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Main from "../screens/Main";
import Restaurant from "../screens/Restaurant";
import Favorite from "../screens/Favorite";
import More from "../screens/More";
import MAINCOLOR from "../color/MainColor";
import { Platform } from "react-native";

const Tabs = createBottomTabNavigator();

const getHeaderName = (route) =>
  route?.state?.routeNames[route.state.index] || "Main";

export default ({ navigation, route }) => {
  useLayoutEffect(() => {
    const name = getHeaderName(route);
    navigation.setOptions({
      title: name,
    });
  });
  //   useEffect(() => {
  //     navigation.setOptions({
  //       title: route?.state?.routeNames[route.state.index] || "Movies",
  //     });
  //   }, [route]);
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName = Platform.OS === "ios" ? "ios-" : "md-";
          if (route.name === "Main") {
            iconName += "home";
          } else if (route.name === "Restaurant") {
            iconName += "restaurant";
          } else if (route.name === "Favorite") {
            iconName += "heart";
          } else if (route.name === "More") {
            iconName = "ios-more";
          }
          return (
            <Ionicons
              name={iconName}
              color={focused ? MAINCOLOR : "grey"}
              size={26}
            />
          );
        },
      })}
      tabBarOptions={{
        showLabel: true, // tabbar에 라벨 지우고 싶을 때 true 로 변경.
        activeTintColor: MAINCOLOR,
      }}
    >
      <Tabs.Screen name="Main" component={Main} />
      <Tabs.Screen name="Restaurant" component={Restaurant} />
      <Tabs.Screen name="Favorite" component={Favorite} />
      <Tabs.Screen name="More" component={More} />
    </Tabs.Navigator>
  );
};

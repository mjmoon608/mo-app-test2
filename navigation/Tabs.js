import React, { useEffect, useLayoutEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Main from "../screens/Main";
import Restaurant from "../screens/Restaurant";
import Favorite from "../screens/Favorite";
import More from "../screens/More";

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
    <Tabs.Navigator>
      <Tabs.Screen name="Main" component={Main} />
      <Tabs.Screen name="Restaurant" component={Restaurant} />
      <Tabs.Screen name="Favorite" component={Favorite} />
      <Tabs.Screen name="More" component={More} />
    </Tabs.Navigator>
  );
};

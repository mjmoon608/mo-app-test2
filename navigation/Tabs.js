import React, { useEffect, useLayoutEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Main from "../screens/Main";
import Restaurant from "../screens/Restaurant";
import Favorite from "../screens/Favorite";
import More from "../screens/More";
import MAINCOLOR from "../color/MainColor";
import { Platform, Image, Button, Text } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";
import { min } from "react-native-reanimated";

const Tabs = createBottomTabNavigator();

const getHeaderName = (route) =>
  route?.state?.routeNames[route.state.index] || "Main";

const LogoTitle = () => {
  return (
    <Image
      resizeMode={"contain"}
      style={{ width: 100, height: 40 }}
      source={require("../image/mo-eat-edit2.png")}
    />
  );
};

const HeaderButton = () => {
  return (
    <Button
      iconName="my-location"
      title="지역"
      onPress={() => alert("지역선택 추가하기")}
      color={MAINCOLOR}
    />
  );
};

export default ({ navigation, route }) => {
  useLayoutEffect(() => {
    const name = getHeaderName(route);
    navigation.setOptions({
      // title: name, -> 바텀 네비게이션 라벨 이름이랑 헤더 이름 일치시키기
      title: name != "Main" ? name : null,
      headerTitleStyle: {
        fontWeight: "bold",
        color: "#3b3c3c",
      },
      headerLeft: name == "Main" ? (props) => <LogoTitle {...props} /> : null,
      headerRight: name == "Main" || name == "Restaurant" ? HeaderButton : null,
    });
    // navigation.setOptions({
    //   headerLeft: (props) => <LogoTitle {...props} />,
    //   headerRight: HeaderButton,
    // });
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
        showLabel: true, // tabbar에 라벨 지우고 싶을 때 false 로 변경.
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

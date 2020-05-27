import React, { useState } from "react";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import { Image, StatusBar, Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Asset } from "expo-asset";
import { Ionicons } from "@expo/vector-icons";

import Stack from "./navigation/Stack";

const cacheImages = (images) =>
  images.map((image) => {
    if (typeof image === "string") {
      //preload할 이미지가 url로 string 타입일 때 preload 하는 방식
      return Image.prefetch(image);
    } else {
      // preload할 이미지가 string 타입이 아닐 때 preload 하는 방식
      return Asset.fromModule(image).downloadAsync();
    }
  });

const cacheFonts = (fonts) => fonts.map((font) => Font.loadAsync(font));

export default function App() {
  const [isReady, setIsRead] = useState(false);
  const loadAssets = () => {
    //images는 promise들의 array임
    const images = cacheImages([
      //가져올 이미지 url이나 파일 경로 쓰기
      // "https://www.google.com/url?sa=i&url=https%3A%2F%2Fm.mk.co.kr%2Fnews%2Fentertain%2Fview%2F2018%2F07%2F434586%2F&psig=AOvVaw2A-FW6y2gsaWog54oHGVuM&ust=1589885223181000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLi7oJCevekCFQAAAAAdAAAAABAD",
      require("./assets/splash.png"),
    ]);

    const fonts = cacheFonts([Ionicons.font]);

    return Promise.all([...images, ...fonts]);
  };
  const onFinish = () => setIsRead(true);

  return isReady ? (
    <>
      <NavigationContainer>
        <Stack />
      </NavigationContainer>
      <StatusBar
        barStyle={Platform.OS === "ios" ? "dark-content" : "light-content"}
      />
    </>
  ) : (
    <AppLoading
      startAsync={loadAssets}
      onFinish={onFinish}
      onError={console.error}
    />
  );
}

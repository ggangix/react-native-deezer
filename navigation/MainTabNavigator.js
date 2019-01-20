import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import FavoritesScreen from "../screens/FavoritesScreen";

import AlbumsScreen from "../screens/AlbumsScreen";
import AlbumDetailScreen from "../screens/AlbumDetailScreen";
const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Albums: AlbumsScreen,
  AlbumDetail: AlbumDetailScreen
});

HomeStack.navigationOptions = {
  tabBarLabel: "Home",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === "ios"
          ? `ios-home${focused ? "" : "-outline"}`
          : "md-home"
      }
    />
  )
};

const FavoritesStack = createStackNavigator({
  Favorites: FavoritesScreen
});

FavoritesStack.navigationOptions = {
  tabBarLabel: "Favorites",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-heart" : "md-heart"}
    />
  )
};

export default createBottomTabNavigator({
  HomeStack,
  FavoritesStack
});

import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { AppStackNavigator } from './AppStackNavigator'
import SearchLaptops from '../screens/SearchLaptops';


export const AppTabNavigator = createBottomTabNavigator({
  SearchLaptops: {
    screen: SearchLaptops,
    navigationOptions: {
      tabBarIcon: <Image source={require("../assets/suggestions.png")} style={{ width: 20, height: 20 }} />,
      tabBarLabel: "Search Laptops",
    }
  },
  Recommendations: {
    screen: AppStackNavigator,
    navigationOptions: {
      tabBarIcon: <Image source={require("../assets/recommendations.png")} style={{ width: 20, height: 20 }} />,
      tabBarLabel: "See Recommendations",
    }
  }
});

import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import SearchSuggestions from '../screens/SearchSuggestions';
import InformationScreen from '../screens/InformationScreen';
export const AppStackNavigator = createStackNavigator({
  Suggestions: {
    screen: SearchSuggestions,
    navigationOptions: {
      headerShown: false
    }
  },
  Information: {
    screen: InformationScreen,
    navigationOptions: {
      headerShown: false
    }
  }
},
  {
    initialRouteName: 'Suggestions'
  }
);

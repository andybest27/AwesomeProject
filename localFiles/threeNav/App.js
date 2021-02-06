// ./App.js

import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import BottomTabNavigator from "./localFiles/threeNav/TabNavigator.js";

 const App = () => {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
}
export default App;

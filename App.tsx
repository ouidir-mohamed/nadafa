import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import React from "react";
import HomeScreen from "./src/ui/home/home";
import SelectCity from "./src/ui/select-city/select-city";




const Stack = createNativeStackNavigator();

const App= ()=>{
    return( <NavigationContainer>
        <Stack.Navigator
        screenOptions={{
              headerShown: false
            }}>
                 
          <Stack.Screen
     
            name="SelectCity"
            component={SelectCity}
            
            
          />
          <Stack.Screen name="Home" component={HomeScreen}  />
        </Stack.Navigator>
      </NavigationContainer>);
}  



export default App;

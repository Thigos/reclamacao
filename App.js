import * as React from 'react';
import { Button, View, Text, LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Initial from './src/View/Initial';
import Main from './src/View/Main';
import Finally from './src/View/Finally';
import About from './src/View/About';
import Devs from './src/View/Devs';

const Stack = createNativeStackNavigator();
LogBox.ignoreAllLogs();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Initial" 
        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen name="Initial" component={Initial} />
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Finally" component={Finally} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Devs" component={Devs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

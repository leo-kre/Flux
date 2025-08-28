import React, { useState } from 'react';
import { View } from 'react-native';
import { useColorScheme } from 'nativewind';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from './pages/Welcome';
import ConnectAppleHealth from './pages/ConnectAppleHealth';
import Home from './pages/Home';

export type RootStackParamList = {
  Welcome: undefined;
  ConnectAppleHealth: undefined;
  Home: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function AppNavigator() {
  const [isUserSetUp, setIsUserSetUp] = useState(false);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={isUserSetUp ? 'Home' : 'Welcome'}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="ConnectAppleHealth" component={ConnectAppleHealth} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  const { colorScheme } = useColorScheme(); // 'light' | 'dark' (aus System, oder später toggeln)
  return (
    <View className={`${colorScheme} flex-1 bg-white dark:bg-black`}>
      <AppNavigator />
    </View>
  );
}

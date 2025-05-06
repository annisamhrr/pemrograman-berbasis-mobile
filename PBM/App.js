import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import BookListScreen from './screens/BookListScreen';
import AboutScreen from './screens/AboutScreen';
import DetailScreen from './screens/DetailScreen';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Beranda">
      <Drawer.Screen name="Beranda" component={HomeScreen} />
      <Drawer.Screen name="Daftar Buku" component={BookListScreen} />
      <Drawer.Screen name="Tentang Kami" component={AboutScreen} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Main" component={DrawerNavigator} />
        <Stack.Screen name="Detail Buku" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

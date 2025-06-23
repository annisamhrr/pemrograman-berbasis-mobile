import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ItemList from './screens/ItemList';
import AddItem from './screens/AddItem';
import EditItem from './screens/EditItem';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ItemList" component={ItemList} options={{ title: 'Daftar Barang' }} />
        <Stack.Screen name="AddItem" component={AddItem} options={{ title: 'Tambah Barang' }} />
        <Stack.Screen name="EditItem" component={EditItem} options={{ title: 'Edit Barang' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

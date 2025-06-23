import React, { useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';
import { Button, List } from 'react-native-paper';
import axios from 'axios';

const ItemList = ({ navigation }) => {
  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const res = await axios.get('http://localhost:5000/items');
    setItems(res.data);
  };

  const deleteItem = async (id) => {
    await axios.delete(`http://localhost:5000/items/${id}`);
    fetchItems();
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', fetchItems);
    return unsubscribe;
  }, [navigation]);

  return (
    <View>
      <Button mode="contained" onPress={() => navigation.navigate('AddItem')}>Tambah Barang</Button>
      <FlatList
        data={items}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <List.Item
            title={item.nama_barang}
            description={`Harga: ${item.harga} | Stok: ${item.stok}`}
            onPress={() => navigation.navigate('EditItem', { item })}
            right={() => (
              <Button onPress={() => deleteItem(item._id)}>Hapus</Button>
            )}
          />
        )}
      />
    </View>
  );
};

export default ItemList;

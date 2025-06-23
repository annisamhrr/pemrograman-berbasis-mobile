import React, { useState } from 'react';
import { View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import axios from 'axios';

const EditItem = ({ route, navigation }) => {
  const { item } = route.params;
  const [nama_barang, setNama] = useState(item.nama_barang);
  const [harga, setHarga] = useState(String(item.harga));
  const [stok, setStok] = useState(String(item.stok));
  const [kategori, setKategori] = useState(item.kategori);

  const handleUpdate = async () => {
    await axios.put(`http://localhost:5000/items/${item._id}`, {
      nama_barang, harga: Number(harga), stok: Number(stok), kategori
    });
    navigation.goBack();
  };

  return (
    <View>
      <TextInput label="Nama Barang" value={nama_barang} onChangeText={setNama} />
      <TextInput label="Harga" value={harga} onChangeText={setHarga} keyboardType="numeric" />
      <TextInput label="Stok" value={stok} onChangeText={setStok} keyboardType="numeric" />
      <TextInput label="Kategori" value={kategori} onChangeText={setKategori} />
      <Button mode="contained" onPress={handleUpdate}>Update</Button>
    </View>
  );
};

export default EditItem;

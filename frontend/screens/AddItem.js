import React, { useState } from 'react';
import { View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import axios from 'axios';

const AddItem = ({ navigation }) => {
  const [nama_barang, setNama] = useState('');
  const [harga, setHarga] = useState('');
  const [stok, setStok] = useState('');
  const [kategori, setKategori] = useState('');

  const handleSubmit = async () => {
    await axios.post('http://localhost:5000/items', {
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
      <Button mode="contained" onPress={handleSubmit}>Simpan</Button>
    </View>
  );
};

export default AddItem;

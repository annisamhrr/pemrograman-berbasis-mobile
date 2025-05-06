import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

export default function DetailScreen({ route }) {
  const { title, image, description } = route.params;
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, backgroundColor: '#f4f4f4' }}>
      <ScrollView contentContainerStyle={[styles.container, { flexGrow: 1 }]}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backText}>Kembali</Text>
      </TouchableOpacity>
        <Image source={{ uri: image }} style={styles.image} />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </ScrollView>
    </View>
  ); 
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: '90%',          // Batasi lebar maksimal
    height: 200,           // Atur tinggi agar tidak terlalu besar
    borderRadius: 0,
    marginBottom: 20,
    resizeMode: 'contain', // Ubah dari 'cover' ke 'contain' agar tidak terpotong
  },  
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#444',
    lineHeight: 22,
  },
  backButton: {
    alignSelf: 'flex-start',
    marginBottom: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    backgroundColor: '#eee',
  },
  backText: {
    fontSize: 16,
    color: '#333',
  },  
});

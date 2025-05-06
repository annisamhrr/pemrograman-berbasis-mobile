import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

export default function AboutScreen() {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.header}>
        <Image 
          source={{ uri: 'https://example.com/logo-perpustakaan.png' }} 
          style={styles.logo} 
        />
        <Text style={styles.title}>Tentang Kami</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.description}>
          Selamat datang di <Text style={styles.bold}>Perpustakaan Digital!</Text> Kami menyediakan akses ke berbagai koleksi buku dan sumber daya pendidikan untuk mendukung pembelajaran dan pengetahuan masyarakat.
        </Text>
        <Text style={styles.description}>
          Kami berkomitmen untuk memberikan layanan terbaik bagi seluruh anggota perpustakaan dan terus mengembangkan platform kami agar mudah diakses semua orang.
        </Text>
        <Image 
          source={{ uri: 'https://img.freepik.com/free-vector/library-concept-illustration_114360-1066.jpg' }} 
          style={styles.illustration} 
        />
        <Text style={styles.contact}>
          📧 Hubungi kami: <Text style={styles.email}>info@perpustakaan.com</Text>
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    padding: 20,
    backgroundColor: '#f0f9f9', // WARNA HIJAU LEMBUT SEPERTI DI HOME
    alignItems: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2c3e50',
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 16,
    width: screenWidth * 0.9,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  description: {
    fontSize: 16,
    color: '#555',
    marginBottom: 12,
    lineHeight: 22,
    textAlign: 'justify',
  },
  bold: {
    fontWeight: 'bold',
    color: '#34495e',
  },
  illustration: {
    width: '100%',
    height: 180,
    marginTop: 10,
    borderRadius: 12,
  },
  contact: {
    marginTop: 16,
    fontSize: 16,
    fontStyle: 'italic',
    color: '#333',
    textAlign: 'center',
  },
  email: {
    color: '#2980b9',
    fontWeight: '600',
  },
});

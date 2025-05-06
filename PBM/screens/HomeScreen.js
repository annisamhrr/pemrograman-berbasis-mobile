import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
  Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const books = [
  {
    title: 'Kamu tak harus Sempurna',
    image: 'https://yrama-widya.co.id/wp-content/uploads/2021/01/Cover-Kamu-Tak-Harus-Sempurna.jpg',
  },
  {
    title: 'Cerita Rakyat Nusantara',
    image: 'https://bintangpusnas.perpusnas.go.id/api/getImage/bb66788874c7075a62644fa5c9ed65b3.webp',
  },
  {
    title: 'Berani tidak Disukai',
    image: 'https://cdn-web-2.ruangguru.com/landing-pages/assets/81b66268-488f-49b5-a313-e7bf3e9c92c3.png',
  },
  {
    title: 'Filsafat Pendidikan Islam',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ_tU9Am-bgNqXAdpm6QWucy-pQe6w8oSdfQ&s',
  }
];

const screenWidth = Dimensions.get('window').width;

export default function HomeScreen() {
  const [search, setSearch] = useState('');
  const navigation = useNavigation();

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Hero Section */}
      <View style={styles.heroContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.subtitle}>Perpustakaan</Text>
          <Text style={styles.title}>
            Baca Semua{'\n'}yang Kamu Inginkan
          </Text>
          <Text style={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iste quam velit saepe dolorem deserunt quo quidem ad optio.
          </Text>
        </View>
        <Image
          source={{ uri: 'https://img.freepik.com/free-vector/flat-illustration-online-library_23-2148813987.jpg' }}
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      {/* Book List */}
      <Text style={styles.bookHeader}>Daftar Buku</Text>

      {filteredBooks.length === 0 ? (
        <Text style={styles.emptyText}>Tidak ada buku ditemukan.</Text>
      ) : (
        filteredBooks.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.bookCard}
            onPress={() =>
              navigation.navigate('Detail Buku', {
                title: item.title,
                image: item.image,
              })
            }
          >
            <Image source={{ uri: item.image }} style={styles.bookImage} />
            <Text style={styles.bookTitle}>{item.title}</Text>
          </TouchableOpacity>
        ))
      )}

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2025 Perpustakaan</Text>
        <Text style={styles.footerSubText}>Dikelola oleh Tim Perpustakaan</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, alignItems: 'center' },

  // Hero section
  heroContainer: {
    flexDirection: screenWidth > 600 ? 'row' : 'column',
    backgroundColor: '#f0f9f9',
    borderRadius: 16,
    padding: 20,
    marginBottom: 24,
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  textContainer: {
    flex: 1,
    marginRight: screenWidth > 600 ? 16 : 0,
    marginBottom: screenWidth > 600 ? 0 : 16,
    alignItems: screenWidth > 600 ? 'flex-start' : 'center',
  },
  subtitle: {
    color: '#00A78E',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 6,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 12,
    textAlign: screenWidth > 600 ? 'left' : 'center',
  },
  description: {
    fontSize: 14,
    color: '#555',
    marginBottom: 16,
    textAlign: screenWidth > 600 ? 'left' : 'center',
  },
  readMoreButton: {
    backgroundColor: '#2FB18B',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  readMoreText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  image: {
    width: screenWidth > 600 ? screenWidth * 0.4 : screenWidth * 0.8,
    height: screenWidth > 600 ? screenWidth * 0.3 : screenWidth * 0.5,
    borderRadius: 12,
  },

  // Book list
  bookHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
    alignSelf: 'flex-start',
  },
  searchInput: {
    height: 40,
    borderColor: '#ccc', 
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 16,
    width: '100%',
  },
  bookCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e0f7f4', // GANTI WARNA INI
    padding: 10,
    borderRadius: 10,
    marginBottom: 12,
    width: '100%',
  },
  bookImage: {
    width: 60,
    height: 90,
    marginRight: 16,
    borderRadius: 6,
  },
  bookTitle: {
    fontSize: 16,
    fontWeight: '500',
  },
  emptyText: {
    fontStyle: 'italic',
    color: '#777',
    marginBottom: 20,
  },

  // Footer
  footer: {
    marginTop: 30,
    paddingVertical: 20,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    alignItems: 'center',
    width: '100%',
  },
  footerText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#444',
  },
  footerSubText: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
});

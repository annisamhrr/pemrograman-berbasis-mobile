import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const books = [
  {
    title: 'The Psychology of Money',
    image: 'https://i1.sndcdn.com/artworks-rUgw9KmWQqZpUgNd-NZ6WRA-t500x500.jpg',
    description: 'Buku ini membahas bagaimana perilaku manusia dalam mengambil keputusan keuangan seringkali lebih penting daripada pengetahuan teknis. Dilengkapi dengan kisah nyata yang mudah dicerna, buku ini memberikan perspektif baru tentang uang, kekayaan, dan kebahagiaan.'
  },
  {
    title: 'The Power Of Your Subconscious Mind',
    image: 'https://m.media-amazon.com/images/I/71UwSHSZRnS.jpg',
    description: 'Buku klasik pengembangan diri yang menjelaskan kekuatan pikiran bawah sadar dan bagaimana memanfaatkannya untuk mencapai kesehatan, kekayaan, dan kedamaian batin. Ditulis dengan pendekatan spiritual dan ilmiah.'
  },
  {
    title: 'Persahabatan Tupai dan Kura-Kura',
    image: 'https://online.anyflip.com/odbml/jvfb/files/large/08801a369d578f6f58b09df132b907b7.webp?1738030742',
    description: 'Sebuah cerita anak penuh makna tentang persahabatan sejati antara tupai yang gesit dan kura-kura yang lambat namun cerdas. Cerita ini mengajarkan tentang saling membantu, menerima perbedaan, dan arti kerja sama.'
  },
  {
    title: 'Cerita Rakyat Nusantara',
    image: 'https://bintangpusnas.perpusnas.go.id/api/getImage/bb66788874c7075a62644fa5c9ed65b3.webp',
    description: 'Kumpulan cerita rakyat dari berbagai daerah di Indonesia yang sarat akan nilai budaya, kearifan lokal, dan pesan moral. Cocok untuk mengenalkan anak-anak pada kekayaan budaya Nusantara.'
  },
  {
    title: 'Cantik itu Luka',
    image: 'https://cdn.gramedia.com/uploads/items/9786020366517_Cantik-Itu-Luka-Hard-Cover---Limited-Edition.jpg',
    description: 'Novel karya Eka Kurniawan ini mengangkat kisah tragis dan mistis seorang wanita cantik di masa kolonial. Dibalut dengan gaya surealisme, buku ini mengeksplorasi luka sosial dan sejarah Indonesia.'
  },
  {
    title: 'Surat Kecil untuk Ayah',
    image: 'https://bukune.com/wp-content/uploads/2016/08/surat-kecil-utk-ayah.jpg',
    description: 'Buku ini adalah kumpulan kisah penuh haru dan kenangan dari anak-anak kepada ayah mereka. Penuh emosi, refleksi, dan penghargaan terhadap sosok ayah dalam kehidupan.'
  },
  {
    title: 'Sejarah Dunia Abad ke-19',
    image: 'https://indoliterasi.com/wp-content/uploads/2023/06/SEJARAH-DUNIA-ABAD-19-709x1024.jpg',
    description: 'Buku ini membahas dinamika sejarah global pada abad ke-19, termasuk kolonialisme, revolusi industri, hingga pergerakan nasionalisme. Cocok untuk pelajar, mahasiswa, atau siapa saja yang ingin memahami sejarah dunia secara mendalam.'
  },
  {
    title: 'Berani tidak Disukai',
    image: 'https://cdn-web-2.ruangguru.com/landing-pages/assets/81b66268-488f-49b5-a313-e7bf3e9c92c3.png',
    description: 'Buku ini menyampaikan filosofi hidup ala Adlerian Psychology yang menekankan pada keberanian untuk hidup bebas tanpa tergantung pada validasi orang lain. Inspiratif dan membebaskan.'
  },
  {
    title: 'Kamu tak harus Sempurna',
    image: 'https://yrama-widya.co.id/wp-content/uploads/2021/01/Cover-Kamu-Tak-Harus-Sempurna.jpg',
    description: 'Sebuah buku self-help yang mengajak pembaca untuk berdamai dengan ketidaksempurnaan. Dilengkapi dengan cerita dan refleksi yang memotivasi pembaca untuk mencintai diri sendiri.'
  },
  {
    title: 'Nalar Tasawuf',
    image: 'https://deepublishstore.com/wp-content/uploads/2019/09/NALAR-TASAWUF-DALAM-PENDIDIKAN-ISLAM_Istania-Widayati-Hidayati-M.Pd-depan-717x1024.jpg',
    description: 'Buku ini membahas pemikiran tasawuf dalam pendidikan Islam. Mengupas aspek spiritualitas dan pengembangan karakter dalam proses belajar mengajar.'
  },
  {
    title: 'Filsafat Pendidikan',
    image: 'https://ebooks.gramedia.com/ebook-covers/80769/image_highres/BLK_FPEK1671079351386.jpg',
    description: 'Menjelaskan konsep dasar dan pemikiran filosofis dalam dunia pendidikan. Cocok bagi mahasiswa, dosen, dan praktisi pendidikan yang ingin memahami fondasi teori pendidikan secara kritis.'
  },
  {
    title: 'Filsafat Pendidikan Islam',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ_tU9Am-bgNqXAdpm6QWucy-pQe6w8oSdfQ&s',
    description: 'Fokus pada dasar filosofis pendidikan dalam Islam, buku ini membahas nilai-nilai spiritual, moral, dan intelektual dalam proses pendidikan yang berbasis Al-Qur\'an dan Hadis.'
  }
];

export default function BookListScreen() {
  const [search, setSearch] = useState('');
  const navigation = useNavigation();

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Daftar Buku</Text>
      <TextInput
        style={styles.input}
        placeholder="Cari buku..."
        value={search}
        onChangeText={setSearch}
      />
      <FlatList
        data={filteredBooks}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={{ paddingBottom: 20 }}
        renderItem={({ item }) => (
          <View style={styles.bookItem}>
            <Image source={{ uri: item.image }} style={styles.bookImage} />
            <Text style={styles.bookTitle}>{item.title}</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() =>
                navigation.navigate('Detail Buku', {
                  title: item.title,
                  image: item.image,
                  description: item.description,
                })
              }
            >
              <Text style={styles.buttonText}>Lihat Detail</Text>
            </TouchableOpacity>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.noResult}>Buku tidak ditemukan.</Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  header: { fontSize: 22, fontWeight: 'bold', marginBottom: 16 },
  input: {
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
  },
  row: { justifyContent: 'space-between' },
  bookItem: {
    width: Dimensions.get('window').width / 2 - 24,
    marginBottom: 24,
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  bookImage: {
    width: 240,
    height: 140,
    resizeMode: 'cover',
    borderRadius: 6,
    marginBottom: 8,
  },  
  bookTitle: {
    marginVertical: 8,
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#3498db',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 6,
  },
  buttonText: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '500',
  },
  noResult: {
    fontSize: 16,
    fontStyle: 'italic',
    color: '#666',
    textAlign: 'center',
  },
});

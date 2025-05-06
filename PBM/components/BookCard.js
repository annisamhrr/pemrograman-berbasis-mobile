import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function BookCard({ title, author }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text>{author}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: '#e3f2fd', padding: 16, marginVertical: 8, borderRadius: 8 },
  title: { fontWeight: 'bold', fontSize: 16 },
});

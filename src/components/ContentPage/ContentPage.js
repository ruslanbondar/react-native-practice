import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import axios from 'axios';
import ItemList from '../ItemList/ItemList';

const url = 'https://jsonplaceholder.typicode.com/photos?_limit=10';

const ContentPage = () => {
  const [items, setItems] = useState();

  const getPhotos = async () => {
    const res = await axios.get(url);
    setItems(res.data);
  };

  useEffect(() => {
    getPhotos();
  }, []);

  return (
    <View style={styles.container}>
      <ItemList items={items} />
    </View>
  );
};

export default ContentPage;

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});

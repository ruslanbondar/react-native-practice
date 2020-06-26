import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import axios from 'axios';
import ItemList from './src/components/ItemList/ItemList';

const url = 'https://jsonplaceholder.typicode.com/photos?_limit=10';

export default App = () => {
  const [items, setItems] = useState();

  useEffect(() => {
    let mounted = true;

    const getPhotos = async () => {
      const res = await axios.get(url);
      if (mounted) {
        setItems(res.data);
      }
    };
    getPhotos();

    return () => {
      mounted = false;
    };
  }, [url]);

  return (
    <View style={styles.container}>
      <ItemList items={items} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});

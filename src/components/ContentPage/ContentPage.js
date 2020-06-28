import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View } from 'react-native';
// import axios from 'axios';
import ItemList from '../ItemList/ItemList';
import { getPhotos } from '../../../store/sagas/photoSaga';

// const url = 'https://jsonplaceholder.typicode.com/photos?_limit=10';

const ContentPage = ({ items, getPhotos }) => {
  // const [items, setItems] = useState();

  useEffect(() => {
    // const getPhotos = async () => {
    //   const res = await axios.get(url);
    //   setItems(res.data);
    // };
    getPhotos();
  }, []);

  return (
    <View style={styles.container}>
      <ItemList items={items} />
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    items: state.photoReducer.data,
  };
};

export default connect(mapStateToProps, { getPhotos })(ContentPage);

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});

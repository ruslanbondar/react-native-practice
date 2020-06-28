import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  // Button,
} from 'react-native';
// import AddModal from '../AddModal/AddModal';

export default Item = ({ item }) => {
  // const [open, setOpen] = useState(false);

  return (
    <>
      {/* <Button onPress={setOpen(true)}>Add</Button> */}
      <TouchableOpacity style={styles.touchable}>
        <View style={styles.imgContainer}>
          <Image
            style={styles.img}
            source={{
              uri: item.url,
            }}
          />

          <Text style={styles.text}>{item.title}</Text>
        </View>
      </TouchableOpacity>

      {/* <AddModal open={open} setOpen={setOpen} /> */}
    </>
  );
};

const styles = StyleSheet.create({
  imgContainer: {
    width: '100%',
    padding: 5,
    height: 200,
    marginBottom: 20,
  },
  img: {
    width: '100%',
    height: 150,
    marginTop: 20,
  },
  text: {
    textAlign: 'center',
    fontSize: 10,
  },
  touchable: {
    width: '50%',
  },
});

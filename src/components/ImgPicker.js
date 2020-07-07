import React from 'react'
import { Image, View, StyleSheet } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import { CustomButton } from './common/CustomButton'
import { FontAwesome, MaterialIcons } from '@expo/vector-icons'

export const ImgPicker = ({ url, setUrl }) => {
  const pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      })
      if (!result.cancelled) {
        setUrl(result.uri)
      }
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <View style={styles.wrapper}>
      {url ? (
        <View style={styles.imgWrapper}>
          <Image source={{ uri: url }} style={styles.img} />
        </View>
      ) : (
        <FontAwesome name="photo" size={220} />
      )}

      <CustomButton onPress={pickImage} color="#3949ab">
        <MaterialIcons name="add-a-photo" size={20} />
      </CustomButton>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgWrapper: {
    width: '100%',
    marginBottom: 10,
  },
  img: {
    height: 220,
  },
})

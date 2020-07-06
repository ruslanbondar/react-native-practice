import React, { useState } from 'react'
import {
  StyleSheet,
  View,
  Button,
  Image,
  ActivityIndicator,
} from 'react-native'
import ImagePicker from 'react-native-image-picker'

export const ImgPicker = ({ item, filePath, setFilePath }) => {
  const [inidicator, setInidicator] = useState(false)

  const chooseFile = () => {
    var options = {
      title: 'Select Image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    }
    setInidicator(true)

    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        setInidicator(false)
      } else if (response.error) {
        setInidicator(false)
      } else {
        setFilePath(response.uri)
        setInidicator(false)
      }
    })
  }

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        {inidicator ? (
          <View style={{ marginVertical: 10 }}>
            <ActivityIndicator color="black" />
          </View>
        ) : null}
        {item && !filePath ? (
          <Image
            style={{ width: 250, height: 250 }}
            source={{ uri: item.url }}
          />
        ) : (item && filePath) || filePath ? (
          <>
            <Image
              source={{ uri: filePath }}
              style={{ width: 250, height: 250 }}
            />
          </>
        ) : null}
        <Button title="Choose File" onPress={() => chooseFile()} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },
})

import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

export const AboutUsScreen = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.header}>About Us</Text>

      <View style={styles.imgContainer}>
        <Image
          style={styles.img}
          source={{
            uri: 'https://via.placeholder.com/600/92c952',
          }}
        />

        <Text style={styles.text}>
          Possibly the most common style of navigation in mobile apps is
          tab-based navigation. This can be tabs on the bottom of the screen or
          on the top below the header (or even instead of a header). This guide
          covers createBottomTabNavigator. You may also use
          createMaterialBottomTabNavigator and createMaterialTopTabNavigator to
          add tabs to your application.
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: 50,
  },
  header: {
    fontSize: 20,
  },
  imgContainer: {
    width: '100%',
    paddingHorizontal: 30,
    marginTop: 10,
    height: 200,
  },
  img: {
    width: '100%',
    height: 250,
    marginBottom: 20,
  },
  text: {
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 22,
  },
})

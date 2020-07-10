import React from 'react'
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'

export const CustomButton = ({ children, onPress, color }) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
      <View style={{ ...styles.button, backgroundColor: color }}>
        <Text style={styles.text}>{children}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
  },
})

import React from 'react'
import { Animated, StyleSheet, Text } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import Swipeable from 'react-native-gesture-handler/Swipeable'

export const SwipeableScreen = () => {
  const renderLeftActions = (progress, dragX) => {
    const trans = dragX.interpolate({
      inputRange: [0, 50, 100, 101],
      outputRange: [-20, 0, 0, 1],
    })

    return (
      <RectButton style={styles.rectButton}>
        <Animated.Text
          style={[
            styles.actionText,
            {
              transform: [{ translateX: trans }],
            },
          ]}
        >
          Archive
        </Animated.Text>
      </RectButton>
    )
  }

  return (
    <Swipeable renderLeftActions={renderLeftActions}>
      <Text style={styles.text}>"hello"</Text>
    </Swipeable>
  )
}

const styles = StyleSheet.create({
  rectButton: {},
  actionText: {},
  text: {
    marginTop: 100,
    padding: 60,
    backgroundColor: 'red',
  },
})

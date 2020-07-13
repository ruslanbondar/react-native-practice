import React from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'
import { PanGestureHandler, State } from 'react-native-gesture-handler'
import Animated from 'react-native-reanimated'

const { width, height } = Dimensions.get('window')

export const SliderScreen = () => {
  const { cond, eq, add, set, Value, event } = Animated

  const dragX = new Value(-200)
  const dragY = new Value(-200)
  const offsetX = new Value(width / 2)
  const offsetY = new Value(height / 2)

  const gestureState = new Value(-1)
  const onGestureEvent = event([
    {
      nativeEvent: {
        translationX: dragX,
        translationY: dragY,
        state: gestureState,
      },
    },
  ])

  const transX = cond(
    eq(gestureState, State.ACTIVE),
    add(offsetX, dragX),
    set(offsetX, add(offsetX, dragX))
  )

  const transY = cond(
    eq(gestureState, State.ACTIVE),
    add(offsetY, dragY),
    set(offsetY, add(offsetY, dragY))
  )

  return (
    <View style={styles.container}>
      <PanGestureHandler
        maxPointers={1}
        onGestureEvent={onGestureEvent}
        onHandlerStateChange={onGestureEvent}
      >
        <Animated.Image
          source={{
            uri: 'https://via.placeholder.com/600/92c952',
          }}
          style={{
            ...styles.img,
            transform: [
              {
                translateX: transX,
              },
              {
                translateY: transY,
              },
            ],
          }}
          resizeMode="contain"
        />
      </PanGestureHandler>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img: {
    width: '100%',
    height: 220,
    zIndex: 100,
  },
})

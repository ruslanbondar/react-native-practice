import React, { useState, useLayoutEffect, useRef } from 'react'
import {
  Animated,
  PanResponder,
  Dimensions,
  StyleSheet,
  LayoutAnimation,
  UIManager,
  Text,
  View,
} from 'react-native'
import { Card, Button } from 'react-native-elements'

const SCREEN_WIDTH = Dimensions.get('window').width
const SWIPE_THRESHOLD = 0.25 * SCREEN_WIDTH
const SWIPE_OUT_DURATION = 250

export const Slider = ({
  data,
  renderCard,
  onSwipeLeft = () => {},
  onSwipeRight = () => {},
}) => {
  const [index, setIndex] = useState(0)

  const firstUpdate = useRef(true)

  useLayoutEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false
      return
    }
    UIManager.setLayoutAnimationEnabledExperimental &&
      UIManager.setLayoutAnimationEnabledExperimental(true)
    LayoutAnimation.spring()
  })

  const renderNoMoreCards = () => {
    return (
      <View style={{ marginTop: 40 }}>
        <Card title="All Done">
          <Text style={{ marginBottom: 15 }}>
            There is no more content here
          </Text>
          <Button title="Load more..." onPress={() => setIndex(0)} />
        </Card>
      </View>
    )
  }

  const position = new Animated.ValueXY()

  const resetPosition = () => {
    Animated.spring(position, {
      toValue: { x: 0, y: 0 },
      useNativeDriver: false,
    }).start()
  }

  const onSwipeComplete = (direction) => {
    const item = data[index]

    direction === 'right' ? onSwipeRight(item) : onSwipeLeft(item)
    position.setValue({ x: 0, y: 0 })
    setIndex(index + 1)
  }

  const forceSwipe = (direction) => {
    const x = direction === 'right' ? SCREEN_WIDTH : -SCREEN_WIDTH

    Animated.timing(position, {
      toValue: { x, y: 0 },
      duration: SWIPE_OUT_DURATION,
      useNativeDriver: false,
    }).start(() => onSwipeComplete(direction))
  }

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (event, gesture) => {
      position.setValue({ x: gesture.dx, y: gesture.dy })
    },
    onPanResponderRelease: (event, gesture) => {
      if (gesture.dx > SWIPE_THRESHOLD) {
        forceSwipe('right')
      } else if (gesture.dx < -SWIPE_THRESHOLD) {
        forceSwipe('left')
      } else {
        resetPosition()
      }
    },
  })

  const getCardStyle = () => {
    const rotate = position.x.interpolate({
      inputRange: [-SCREEN_WIDTH * 1.5, 0, SCREEN_WIDTH * 1.5],
      outputRange: ['-120deg', '0deg', '120deg'],
    })

    return {
      ...position.getLayout(),
      transform: [{ rotate }],
    }
  }

  const renderCards = () => {
    if (index >= data.length) {
      return renderNoMoreCards()
    }

    return data
      .map((item, idx) => {
        if (idx < index) return null

        if (idx === index) {
          return (
            <Animated.View
              key={item.id}
              style={[getCardStyle(), styles.cardStyle]}
              {...panResponder.panHandlers}
            >
              {renderCard(item)}
            </Animated.View>
          )
        }
        return (
          <Animated.View
            key={item.id}
            style={[styles.cardStyle, { top: 10 * (idx - index) }]}
          >
            {renderCard(item)}
          </Animated.View>
        )
      })
      .reverse()
  }

  return renderCards()
}

const styles = StyleSheet.create({
  cardStyle: {
    position: 'absolute',
    width: SCREEN_WIDTH,
    zIndex: 100,
    marginTop: 50,
  },
})

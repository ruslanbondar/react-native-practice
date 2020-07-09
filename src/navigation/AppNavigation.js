import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
import { MainScreen } from '../screens/MainScreen'
import { AboutUsScreen } from '../screens/AboutUsScreen'
import { SliderScreen } from '../screens/SliderScreen'

const Tab = createBottomTabNavigator()

export const AppTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName

          if (route.name === 'Home') {
            iconName = 'md-home'
          } else if (route.name === 'Slider') {
            iconName = 'ios-albums'
          } else if (route.name === 'About Us') {
            iconName = 'ios-beer'
          }

          return <Ionicons name={iconName} size={size} color={color} />
        },
      })}
    >
      <Tab.Screen name="Home" component={MainScreen} />
      <Tab.Screen name="Slider" component={SliderScreen} />
      <Tab.Screen name="About Us" component={AboutUsScreen} />
    </Tab.Navigator>
  )
}

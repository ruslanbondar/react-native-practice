import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import { Ionicons } from '@expo/vector-icons'
import { MainScreen } from '../screens/MainScreen'
import { AboutUsScreen } from '../screens/AboutUsScreen'
import { SliderScreen } from '../screens/SliderScreen'
import { AddItemScreen } from '../screens/AddItemScreen'
import { EditItemScreen } from '../screens/EditItemScreen'
import { SwipeableScreen } from '../screens/SwipeableScreen'

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName

          if (route.name === 'Home') {
            iconName = 'md-home'
          } else if (route.name === 'Slider') {
            iconName = 'ios-albums'
          } else if (route.name === 'Swipeable') {
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
      <Tab.Screen name="Swipeable" component={SwipeableScreen} />
      <Tab.Screen name="About Us" component={AboutUsScreen} />
    </Tab.Navigator>
  )
}

export const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Tabs"
        component={TabNavigator}
        options={{ headerStatusBarHeight: 0, title: null }}
      />
      <Stack.Screen
        name="AddItemScreen"
        component={AddItemScreen}
        options={{ title: 'Add Item' }}
      />
      <Stack.Screen
        name="EditItemScreen"
        component={EditItemScreen}
        options={{ title: 'Edit Item' }}
      />
    </Stack.Navigator>
  )
}

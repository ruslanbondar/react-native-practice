import React, { useContext } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import { Ionicons } from '@expo/vector-icons'
import { MainScreen } from '../screens/MainScreen'
import { AboutUsScreen } from '../screens/AboutUsScreen'
import { SliderScreen } from '../screens/SliderScreen'
import { AddItemScreen } from '../screens/AddItemScreen'
import { EditItemScreen } from '../screens/EditItemScreen'
import { AuthScreen } from '../screens/AuthScreen'
import { AppContext } from '../context/createContext'

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

const StackNavigator = () => {
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

const Auth = createStackNavigator()
const Root = createStackNavigator()

const AuthNavigator = () => {
  return (
    <Auth.Navigator>
      <Auth.Screen
        name="SignIn"
        component={AuthScreen}
        options={{ title: 'Sign In' }}
      />
    </Auth.Navigator>
  )
}

export const RootStackNavigator = () => {
  const { token } = useContext(AppContext)

  return (
    <Root.Navigator>
      {token ? (
        <Root.Screen
          name="MainScreen"
          component={StackNavigator}
          options={{ headerStatusBarHeight: 0, title: null }}
        />
      ) : (
        <Root.Screen
          name="Root"
          component={AuthNavigator}
          options={{ headerStatusBarHeight: 0, title: null }}
        />
      )}
    </Root.Navigator>
  )
}

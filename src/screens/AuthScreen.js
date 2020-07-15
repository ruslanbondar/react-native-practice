import React, { useContext } from 'react'
import { View, StyleSheet } from 'react-native'
import { SimpleLineIcons } from '@expo/vector-icons'
import { AppContext } from '../context/createContext'
import { CustomButton } from '../components/common/CustomButton'

export const AuthScreen = () => {
  const { setToken } = useContext(AppContext)

  return (
    <View style={styles.container}>
      <CustomButton color="#3949ab" onPress={() => setToken('qwerty')}>
        <SimpleLineIcons name="login" size={25} />
      </CustomButton>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

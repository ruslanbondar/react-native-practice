import React, { useContext } from 'react'
import { FlatList, View, StyleSheet } from 'react-native'
import { MaterialIcons, SimpleLineIcons } from '@expo/vector-icons'
import { Item } from './Item'
import { CustomButton } from './common/CustomButton'
import { AppContext } from '../context/createContext'

export const ItemList = ({ navigation }) => {
  const { items, setToken } = useContext(AppContext)

  return (
    <>
      <View style={styles.buttonWrapper}>
        <CustomButton
          color="#3949ab"
          onPress={() => navigation.navigate('AddItemScreen')}
        >
          <MaterialIcons name="add-a-photo" size={20} />
        </CustomButton>

        <CustomButton color="#3949ab" onPress={() => setToken(null)}>
          <SimpleLineIcons name="logout" size={20} />
        </CustomButton>
      </View>

      <View style={styles.list}>
        <FlatList
          data={items}
          renderItem={({ item, index }) => {
            return <Item item={item} navigation={navigation} />
          }}
          numColumns={2}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  list: {
    paddingTop: 10,
    paddingBottom: 70,
  },
  buttonWrapper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
})

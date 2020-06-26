import React from 'react';
import { FlatList } from 'react-native';
import Item from '../Item/Item';

export default ItemList = ({ items }) => {
  return (
    <FlatList
      data={items}
      renderItem={({ item, index }) => {
        return <Item item={item} />;
      }}
      numColumns={2}
      keyExtractor={(item) => item.id.toString()}
      key={(item) => item.id}
    />
  );
};

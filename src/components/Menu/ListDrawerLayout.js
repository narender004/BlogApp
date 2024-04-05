import React from 'react';
import { Dimensions, FlatList, StyleSheet } from 'react-native';
import MenuItem from './MenuItem';

const ListDrawerLayout = (props) => {
  const _renderItem = ({ item }) => {
    return (
      <MenuItem
        id={item.id}
        title={item.title}
        tintColor={'#333'}
        icon={item.androidIcon}
        background={item.androidBackground}
        isSelected={props.selectedItem === item.id}
        onPress={(section) => props.onSectionChange(section)}
      />
    );
  };

  return (
    <FlatList
      data={props.items}
      renderItem={_renderItem}
      keyExtractor={(item) => item.id.toString()} // Assuming item.id is unique
    />
  );
};

export default ListDrawerLayout;

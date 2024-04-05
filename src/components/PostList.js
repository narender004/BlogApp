import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import PostItem from './PostItem';

const PostList = ({ items, navigator }) => {
  const renderRow = ({ item, index }) => {
    return (
      <PostItem item={item} navigator={navigator} />
    );
  };

  return (
    <FlatList
      data={items}
      style={styles.listView}
      removeClippedSubviews={false}
      renderItem={renderRow}
      automaticallyAdjustContentInsets={false}
    />
  );
};

const styles = StyleSheet.create({
  listView: {
    paddingTop: 70
  }
});

export default PostList;

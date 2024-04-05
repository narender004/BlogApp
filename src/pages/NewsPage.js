import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, Platform, StyleSheet, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import NavBar from './../components/NavBar';
import PostList from './../components/PostList';
import AboutUsPage from './AboutUsPage';
import Api from './../utils/Api';
import { useNavigation } from '@react-navigation/native';

const NewsPage = ({ title, navigator, openMenu }) => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setLoading(true);
    Api.getPostList()
      .then(data => {
        setPosts(data);
        setLoading(false);
      });
  }, []);

  const handleBackBtnPress = () => {
    if (navigator.getCurrentRoutes().length <= 1) {
      Alert.alert(
        'Logout',
        'Would you like to logout?',
        [
          { text: 'NO', onPress: () => console.log('Cancel Pressed!') },
          { text: 'YES', onPress: () => { } },
        ]
      );
      return true;
    }
  };

  return (
    <View style={styles.container}>
      {loading ? <ActivityIndicator size={'large'} color={Platform.OS === 'ios' ? "#262626" : null} /> :
        <PostList items={posts} navigator={navigator} />}
      <NavBar
        title={title}
        rightText={Platform.OS === 'ios' ? <Ionicons name="ios-information-circle" size={24} color={'#eee'} /> : <MaterialIcons name="info" size={24} color={'#eee'} />}
        leftText={<MaterialIcons name="menu" size={24} color={Platform.OS === 'android' ? '#eee' : 'transparent'} />}
        onRightPress={() => {


          navigation.navigate('AboutUsPage', { title: 'Acerca de', });
          // navigator.push({
          //   component: AboutUsPage,
          //   title: 'Acerca de',
          // });
        }}
        onLeftPress={() => {
          Platform.OS === 'android' && openMenu();
        }}
        containerStyle={{backgroundColor: 'red'}}
        colorText='#eee'
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ececed',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default NewsPage;

import React, { Component } from 'react';
import { BackAndroid, Platform, StyleSheet, Text, View } from 'react-native';

// External Libraries
import Ionicon from 'react-native-vector-icons/Ionicons';

// Components
import NavBar from './../components/NavBar';
import { useNavigation } from '@react-navigation/native';

const AboutUsPage = (props) => {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.p}>Made with ❤️ by Narender Kang Team.</Text>
      <NavBar
        title="About Us"
        leftText={Platform.OS === 'ios' ? <Ionicon name='arrow-back' size={32} color={'#eee'} /> : <Ionicon name='arrow-back' size={24} color={'#eee'} />}
        onLeftPress={ () => {
          navigation.pop()
        }}
        containerStyle={{backgroundColor: 'red'}}
        colorText='#eee' />
    </View>
  );
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    justifyContent: 'center',
    alignItems: 'center',
  },
  p: {
    fontWeight: '300',
    textAlign: 'center',
  }
});

export default AboutUsPage;

import React, { Component } from 'react';

import { BackAndroid, Dimensions, ImageBackground , Platform, ScrollView, StyleSheet, Text, View } from 'react-native';

// External Libraries
import Ionicon from 'react-native-vector-icons/Ionicons';

// Components
import NavBar from './../components/NavBar';
import Counts from './../components/Counts';
import { useNavigation } from '@react-navigation/native';

var {width, height} = Dimensions.get('window')


const NewsDetailPage = (props) => {

  const navigation = useNavigation();

  const {item} = props?.route?.params;
  // const _navigator = navigator;

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
        <ScrollView style={{height: height - 200}}>
          <ImageBackground 
          source={{uri:item.imageUrl}}
                 style={styles.image}>
             <View style={styles.innerImage}>
               <Text style={styles.title}>
                 {item.title }
               </Text>
               <Text style={styles.speakerText}>By { item.speaker }</Text>
             </View>
           </ImageBackground >
          <Text style={styles.description}>
           Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Text>
          <Text style={styles.description}>
           Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Text>
          <Text style={styles.description}>
           Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Text>
          <Text style={styles.description}>
           {item.body } Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Text>
          <Text style={styles.description}>
           Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Text>
          <Text style={styles.description}>
           Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Text>
          <Text style={styles.description}>
           Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Text>

          <NavBar
            leftText={Platform.OS === 'ios' ? <Ionicon name='arrow-back' size={32} color={'#eee'} /> : <Ionicon name='arrow-back' size={24} color={'#eee'} />}
            onLeftPress={ () => {
              navigation.pop()
            }}
            containerStyle={{backgroundColor: 'transparent'}}
            colorText='#eee' />

        </ScrollView>
        <Counts item={item} style={{height: 200}} />
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: 'cover',
    flexDirection: 'row',
    backgroundColor: 'rgba(0,0,0,0.8)',
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    height:300
  },
  innerImage: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 200
  },
  title: {
    margin: 15,
    fontSize: 28,
    fontWeight: '500',
    color: '#fff',
    textAlign: 'center'
  },
  speakerText: {
    fontStyle: 'italic',
    color: '#fff',
    marginTop: 5,
    fontSize: 16,
  },
  description: {
    margin: 15,
    marginTop: 7,
    textAlign: 'justify',
  },
  floatFooter: {
    position: 'absolute',
    bottom: 0
  }
})

export default NewsDetailPage;

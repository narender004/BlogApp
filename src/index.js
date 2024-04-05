import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import InitPage from './pages/InitPage';
import NewsDetailPage from './pages/NewsDetailPage';
import NewsPage from './pages/NewsPage';
import AboutUsPage from './pages/AboutUsPage';

const Stack = createStackNavigator();

const AppContainer = () => {
  return (
    <Stack.Navigator initialRouteName="InitPage">
      <Stack.Screen name="InitPage" component={InitPage}  options={{ headerShown: false }} />
      <Stack.Screen name="NewsPage" component={NewsPage}  options={{ headerShown: false }} />
      <Stack.Screen name="NewsDetail" component={NewsDetailPage}  options={{ headerShown: false }} />
      <Stack.Screen name="AboutUsPage" component={AboutUsPage}  options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default AppContainer;

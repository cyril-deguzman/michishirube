// import react packages
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// import screens
import CameraScreen from './app/screens/CameraScreen';
import HomeScreen from './app/screens/HomeScreen';
import BookmarkScreen from './app/screens/BookmarkScreen';

const Tab = createBottomTabNavigator();

export default function App() {
    return (
      <NavigationContainer>
        <Tab.Navigator>
        <Tab.Screen name="Camera" component={CameraScreen} />
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Bookmark" component={BookmarkScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    );
}
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// import screens
import CameraScreen from '../screens/CameraScreen';
import HomeScreen from '../screens/HomeScreen';
import BookmarkScreen from '../screens/BookmarkScreen';

const Tab = createBottomTabNavigator();

const NavTabs = () => {
    return(
        <Tab.Navigator>
        <Tab.Screen name="Camera" component={CameraScreen} />
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Bookmark" component={BookmarkScreen} />
        </Tab.Navigator>
    );
}

export default NavTabs;
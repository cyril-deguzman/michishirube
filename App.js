import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function CameraScreen() {
    return(
        <View style={styles.homeScreen}>
            <Text>
                Camera
            </Text>
        </View>
    );
}

function HomeScreen() {
    return(
        <View style={styles.homeScreen}>
            <Text>
                Home
            </Text>
        </View>
    );
}

function BookmarkScreen() {
    return(
        <View style={styles.homeScreen}>
            <Text>Bookmarks</Text>
        </View>
    );
}

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  homeScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});

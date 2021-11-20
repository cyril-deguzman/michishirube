// import react packages
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import NavTabs from './app/components/NavTabs';

export default function App() {
    return (
      <NavigationContainer>
        <NavTabs/>
      </NavigationContainer>
    );
}
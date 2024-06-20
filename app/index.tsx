import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MyTabs from './Tabs/MyTabs';

export default function App() {
  return (
    <NavigationContainer independent={true}>
      <MyTabs />
    </NavigationContainer>
  );
}



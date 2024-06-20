import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import NewsScreen from '@/components/tabComponents/NewsScreen';
import BooksScreen from '@/components/tabComponents/BooksScreen';
import FavoritesScreen from '@/components/tabComponents/FavoritesScreen';
import MusicLibraryScreen from '@/components/tabComponents/MusicLibraryScreen';

const Tab = createBottomTabNavigator();
export default function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Favorites') {
            iconName = 'heart-outline';
          } else if (route.name === 'MusicLibrary') {
            iconName = 'musical-notes-outline';
          } else if (route.name === 'Books') {
            iconName = 'book-outline';
          } else if (route.name === 'News') {
            iconName = 'newspaper-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#ffffff',
        tabBarInactiveTintColor: 'rgba(255, 255, 255, 0.5)',
        tabBarStyle: { backgroundColor: '#7b2ff7' },
      })}
    >
      <Tab.Screen name="Favorites" component={FavoritesScreen} />
      <Tab.Screen name="MusicLibrary" component={MusicLibraryScreen} options={{ title: 'My Music Library' }} />
      <Tab.Screen name="Books" component={BooksScreen} />
      <Tab.Screen name="News" component={NewsScreen} />
    </Tab.Navigator>
  );
}

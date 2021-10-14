import { StatusBar } from 'expo-status-bar';
import React from 'react';
import HomeScreen from './src/views/HomeScreen';

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <HomeScreen />
    </>
  );
}

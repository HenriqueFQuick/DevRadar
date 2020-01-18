import React from 'react';
import { StatusBar, YellowBox } from 'react-native';
import Routes from './src/routes.js'

YellowBox.ignoreWarnings([
  'Unrecognized WebSocket'
])

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7D40e7"/>
      <Routes/>
    </>
  );
}


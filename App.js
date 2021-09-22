/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import ViewTester from './react-native-view-tester';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={[
          StyleSheet.absoluteFill,
          {
            margin: 10,
            backgroundColor: 'red',
          },
        ]}>
        <ViewTester />
      </View>
    </SafeAreaView>
  );
};

export default App;

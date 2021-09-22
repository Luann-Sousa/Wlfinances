import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Welcome } from './src/Components/Welcome/Welcome';

export default function App() {
  return (
    <View style={styles.container}>
     <Welcome title="App foi configurado com exito React-Native Bare Workflow com Typescript"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

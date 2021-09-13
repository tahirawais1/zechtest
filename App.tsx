import React, { Component } from 'react';
import { StyleSheet, View,Text } from 'react-native';
import Navigator from './routers/Navigator';
import './declare_modules.d.ts'


export default  class App extends Component {
  
  render() {
    return (
      <View style={styles.container}>
       <Navigator></Navigator>
      </View>

    );
  }
  
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

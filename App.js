
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createAppContainer } from 'react-navigation'
import Search from './screens/search';
import Transaction from './screens/transaction';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        <AppContainer />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
const TabNavigator = createBottomTabNavigator({
  Search: Search,
  Transaction: Transaction
})

const AppContainer = createAppContainer(TabNavigator)
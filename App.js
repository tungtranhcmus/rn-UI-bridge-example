import React, {Component} from 'react';
import {View, StyleSheet, Platform} from 'react-native';
import Reactotron from 'reactotron-react-native';
import './reactotronConfig';

import BrigeUIAndroid from './brigeUIAndroid';

import BrigeUIIOS from './brigeUIIOS';

import BrigeNativeCode from './brigeCode';
if (process.env.NODE_ENV === 'development') {
  console.log = Reactotron.log;
}
class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <BrigeNativeCode />
        {Platform.OS === 'android' && <BrigeUIAndroid />}
        {Platform.OS === 'ios' && <BrigeUIIOS />}
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

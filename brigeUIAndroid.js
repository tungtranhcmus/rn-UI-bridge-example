import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import Reactotron from 'reactotron-react-native';
import './reactotronConfig';
import RCTRandomNumberView from './nativeAndroid';
if (process.env.NODE_ENV === 'development') {
  console.log = Reactotron.log;
}
class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <RCTRandomNumberView style={styles.viewRandomNumber} />
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textSayHi: {
    fontSize: 15,
  },
  viewRandomNumber: {
    flex: 1,
    // backgroundColor: '#33ccff',
  },
});

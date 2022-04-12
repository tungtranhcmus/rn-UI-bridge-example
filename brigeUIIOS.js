import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';

import NativeNumberGeneratorView from './nativeIOS';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <NativeNumberGeneratorView
          initNumber={100}
          style={styles.viewRandomNumber}
          onNumberSend={event => {
            console.log({event});
          }}
        />
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

import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  findNodeHandle,
  UIManager,
} from 'react-native';

import NativeNumberGeneratorView from './nativeIOS';

class App extends Component {
  pressButton = () => {
    const nativeCommands = UIManager.getViewManagerConfig(
      'NativeNumberGeneratorView',
    ).Commands;
    const playerNodeHandle = findNodeHandle(this._viewerRef);
    UIManager.dispatchViewManagerCommand(
      playerNodeHandle,
      nativeCommands.createAOne,
      [],
    );
  };
  render() {
    return (
      <View style={styles.container}>
        <NativeNumberGeneratorView
          ref={ref => {
            this._viewerRef = ref;
          }}
          initNumber={100}
          style={styles.viewRandomNumber}
          onNumberSend={event => {
            console.log({event});
          }}
        />
        <TouchableOpacity onPress={this.pressButton} style={styles.button} />
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
  button: {
    height: 40,
    width: 100,
    backgroundColor: 'gray',
  },
});

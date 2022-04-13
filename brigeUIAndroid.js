import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  findNodeHandle,
  UIManager,
} from 'react-native';
import './reactotronConfig';
import RCTRandomNumberView from './nativeAndroid';

class App extends Component {
  pressButton = () => {
    const viewId = findNodeHandle(this._viewerRef);
    UIManager.dispatchViewManagerCommand(
      viewId,
      UIManager.RCTRandomNumberView.Commands.create.toString(),
      [],
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <RCTRandomNumberView
          ref={ref => {
            this._viewerRef = ref;
          }}
          initNumber={100}
          onNumberSend={event => {
            console.log({event});
          }}
          style={styles.viewRandomNumber}
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

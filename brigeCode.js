import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  NativeModules,
  NativeEventEmitter,
  TouchableOpacity,
} from 'react-native';
import Reactotron from 'reactotron-react-native';
import './reactotronConfig';

if (process.env.NODE_ENV === 'development') {
  console.log = Reactotron.log;
}

const {CalendarModule} = NativeModules;
const calendarEventEmitter = new NativeEventEmitter(CalendarModule);
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    calendarEventEmitter.addListener('EventA', eventA => {
      console.log({eventA});
    });

    calendarEventEmitter.addListener('EventB', eventB => {
      console.log({eventB});
    });
  }

  onPress = async () => {
    CalendarModule.createCalendarEvent1('Party', '04-12-2020', eventId => {
      console.log(`Created a new event with id ${eventId}`);
    });

    CalendarModule.createCalendarEventCallback(
      'testName',
      'testLocation',
      error => {
        console.error(`Error found! ${error}`);
      },
      eventId => {
        console.log(`event id ${eventId} returned`);
      },
    );

    try {
      const eventId = await CalendarModule.createCalendarEvent2(
        'Party',
        'my house',
      );
      console.log(`Created a new event with id ${eventId}`);
    } catch (e) {
      console.error(e);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.onPress}>
          <Text style={styles.textSayHi}>Say hi</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    backgroundColor: '#e6e6e6',
  },
  textSayHi: {
    fontSize: 15,
  },
});

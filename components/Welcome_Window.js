import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import AnimatedLoader from 'react-native-animated-loader';
import { Actions } from 'react-native-router-flux';

var animation1 = './icons/4909-voice-receiving-animation.json';

import AsyncStorage from '@react-native-community/async-storage';

export default class WelcomeWindow extends Component {
  state = {
    animation: true,
    AppTheme: '#0f1f39',
  };

  getAppTheme = () => {
    AsyncStorage.getItem('app_theme').then(value => {
      if (value == 'true') {
        this.setState({ AppTheme: '#0f1f39' });
        console.log('Welcome Window Theme : True');
      } else {
        this.setState({ AppTheme: '#FFF' });
        console.log('Welcome Window Theme : White');
      }
    });
  };

  componentDidMount() {
    try {
      this.getAppTheme();
    } catch (error) {
      console.log("Couldn't Reload Prev Data");
    }
    timer = setTimeout(() => this.setState({ animation: false }), 1999);
    timer = setTimeout(() => this.nextComponent(), 2000);
  }

  nextComponent = () => {
    Actions.VoiceAssistant_Window();
  };

  render() {
    return (
      <View>
        <View>
          <StatusBar translucent backgroundColor={this.state.BGColor} />
          <AnimatedLoader
            visible={this.state.animation}
            overlayColor={this.state.AppTheme}
            source={require(animation1)}  
            animationStyle={{
              height: 200,
              width: 200,
            }}
            speed={1}
          />
        </View>
      </View>
    );
  }
}
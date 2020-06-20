import React, { Component } from 'react';
import ChatBotWindow from './components/chatBot_Window'
import WelcomeWindow from './components/Welcome_Window'

import WhatSAppSendMessageWindow from './components/Option-Component/Send-Message-WhatsApp/sendMessage'
import PrivateMode from './components/Private-Mode/privateMode'
import Settings from './components/Option-Component/Settings/settings'
import ShowContacts from './components/Option-Component/Show-Contacts/showContacts'
import ShowQuestions from './components/Option-Component/showQuestions/showQuestions'
import { Router, Scene } from "react-native-router-flux";
import { StatusBar, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      <Router>
        <Scene key="root" hideNavBar>
          <Scene key="Welcome_Window" component={WelcomeWindow} inital />
          <Scene key="VoiceAssistant_Window" component={ChatBotWindow} />
          <Scene key="WhatsAppSendMessage_Window" component={WhatSAppSendMessageWindow} />
          <Scene key="PrivateMode_Window" component={PrivateMode} />
          <Scene key="Settings_Window" component={Settings} />
          <Scene key="ShowContacts_Window" component={ShowContacts} />
          <Scene key="ShowQuestions_Window" component={ShowQuestions} />
        </Scene>
      </Router>
    )
  }
}
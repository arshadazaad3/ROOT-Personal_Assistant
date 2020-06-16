import React from 'react'
import {
    View,
    Text,
    AsyncStorage
} from 'react-native'

const userId = '8ba790f3-5acd-4a08-bc6a-97a36c124f29';

const saveUserId = async userId => {
    try {
      await AsyncStorage.setItem('userId', userId);
      console.log("success set")
    } catch (error) {
      // Error retrieving data
      console.log(error.message);
    }
  };

  const getUserId = async () => {
    let userId = '';
    try {
      userId = await AsyncStorage.getItem('userId') || 'none';
    } catch (error) {
      // Error retrieving data
      console.log(error.message);
    }
    return userId;
  }

export default class PrivateMode extends React.Component {

    componentDidMount(){
        saveUserId()
    }

    render() {
        return (
            <View>
                <Text>Hello</Text>
            </View>
        )
    }
}
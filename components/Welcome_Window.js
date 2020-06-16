import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import AnimatedLoader from "react-native-animated-loader";
import { Actions } from "react-native-router-flux";


var animation1 = "./icons/4909-voice-receiving-animation.json"
var animation2 = "./icons/3179-code-icon.json"
var animation3 = "./icons/23721-paper-plane.json"
var animation4 = "./icons/7885-codey-riding-a-rocket.json"

var animationNumbers = [1, 2, 3, 4]

export default class WelcomeWindow extends Component {

    state = {
        animation: true
    }

    componentDidMount() {
        timer = setTimeout(() => this.setState({ animation: false }), 1999)
        timer = setTimeout(() => this.nextComponent(), 2000)
    }

    nextComponent = () => {
        Actions.VoiceAssistant_Window()
    }

    render() {
        return (
            <View>
                <StatusBar hidden />
                <View>
                    <AnimatedLoader
                        visible={this.state.animation}
                        overlayColor="#081233"
                        source={require(animation1)}
                        animationStyle={{
                            height: 200,
                            width: 200,
                        }}
                        speed={1}
                    />
                </View>
            </View>
        )
    }
}
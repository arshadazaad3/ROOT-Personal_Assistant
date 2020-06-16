import React, { Component } from 'react'
import AnimatedLoader from "react-native-animated-loader";

import { View, StyleSheet, Text, Button, TouchableHighlight, TouchableOpacity } from 'react-native'

var animation1 = "../../icons/18246-covid-19-get-punched.json"
var animation2 = "../../icons/tshirt-graphic-swag-dance.json"
var animation3 = "../../icons/cat-dance.json"
var animation4 = "./icons/7885-codey-riding-a-rocket.json"

var animationNumbers = [1, 2, 3, 4]

export default class ShowSomething extends Component {

    componentDidMount() {
        timer = setTimeout(() => this.setState({ animationVisible: true }), 500)
        timer = setTimeout(() => this.props.closepage(), 3500)
    }

    animationFunc() {

        var randomAni = animationNumbers[Math.floor(Math.random() * animationNumbers.length)];
        if (randomAni == 1) {
            return (
                <AnimatedLoader
                    visible={true}
                    overlayColor="#FFF"
                    source={require(animation1)}
                    animationStyle={{
                        height: 300,
                        width: 300,
                    }}
                    speed={1}
                />
            )

        }

        else if (randomAni == 2) {
            return (
                <AnimatedLoader
                    visible={true}
                    overlayColor="#FFF"
                    source={require(animation2)}
                    animationStyle={{
                        height: 440,
                        width: 440,
                    }}
                    speed={1}
                />
            )

        }

        else {
            return (
                <AnimatedLoader
                    visible={true}
                    overlayColor="#FFF"
                    source={require(animation3)}
                    animationStyle={{
                        height: 200,
                        width: 200,
                    }}
                    speed={1}
                />
            )

        }

    }

    state = {
        animationVisible: false
    }

    render() {
        return (
            <View style={styles.MainComponent}>
                {this.state.animationVisible &&
                    <this.animationFunc></this.animationFunc>
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    MainComponent: {
        flex: 1,
        alignContent: "center",
        justifyContent: "center"
    }
})
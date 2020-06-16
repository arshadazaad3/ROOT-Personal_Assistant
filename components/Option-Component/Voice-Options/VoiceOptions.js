import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Button,
    TouchableHighlight,
    ScrollView,
    TouchableOpacity
}
    from 'react-native'
import Tts from 'react-native-tts';

var voice0 = 'en-gb-x-fis#female_3-local'
var voice1 = 'it-it-x-kda#female_2-local'
var voice2 = 'en-in-x-cxx-local'
var voice3 = 'cmn-tw-x-ctd-local'
var voice4 = 'hi-in-x-cfn#male_1-local'
var voice5 = 'hi-IN-language'
var voice6 = 'cmn-cn-x-ccc-local'
var voice7 = 'en-us-x-tpd-local'
var voice8 = 'cmn-tw-x-cte-local'
var voice9 = 'en-gb-x-fis-local'
var voice10 = 'es-es-x-ana#female_2-local'
var voice11 = 'cmn-cn-x-ccc-local'
var voice12 = 'hi-IN-language'
var voice13 = 'cfn#male_3-local'
var voice14 = 'fil-PH-language'

var voices_list = [voice0, voice1, voice2, voice3, voice4, voice5,
    voice6, voice7, voice8, voice8, voice9, voice10, voice11,
    voice12, voice13, voice14
]


export default class VoiceOptions extends React.Component {
    setTTSVoice = value => {
        Tts.setDefaultVoice(voices_list[value])
        Tts.getInitStatus().then(() => {
            Tts.speak("Hello, How Are You", { rate: 0.8, pitch: 1, })
        });
    }

    setSpeed = speed => {

        Tts.setDefaultRate(speed);
        Tts.getInitStatus().then(() => {
            Tts.speak("Hello, How Are You")
        });
    }

    closePage = () => {
        this.props.closepage()
    }

    render() {
        return (
            <ScrollView style={styles.MainContainer}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>
                        Voice Settings
                    </Text>
                </View>
                <View style={styles.topicContainer}>
                    <Text style={styles.topics}>
                        Set Voice
                    </Text>
                </View>

                <TouchableOpacity style={styles.ButtonContainer} onPress={() => this.setTTSVoice(0)}>
                    <Text> English GB Female</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.ButtonContainer} onPress={() => this.setTTSVoice(1)}>
                    <Text> English KDa Female</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.ButtonContainer} onPress={() => this.setTTSVoice(2)}>
                    <Text> English Female Local 3</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.ButtonContainer} onPress={() => this.setTTSVoice(3)}>
                    <Text> Male English Local 1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.ButtonContainer} onPress={() => this.setTTSVoice(4)}>
                    <Text> Male English Local 2</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.ButtonContainer} onPress={() => this.setTTSVoice(5)}>
                    <Text> English Asian Female</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.ButtonContainer} onPress={() => this.setTTSVoice(6)}>
                    <Text> English Female local 5</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.ButtonContainer} onPress={() => this.setTTSVoice(7)}>
                    <Text> English Male en-gb-x-fis-local 2</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.ButtonContainer} onPress={() => this.setTTSVoice(9)}>
                    <Text> English Male en-gb-x-fis-local</Text>
                </TouchableOpacity>

                <View style={styles.topicContainer}>
                    <Text style={styles.topics}>
                        Set Speed Rate
                    </Text>
                </View>
                <TouchableOpacity style={styles.ButtonContainer} onPress={() => this.setSpeed(0.1)}>
                    <Text> 0.1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.ButtonContainer} onPress={() => this.setSpeed(0.25)}>
                    <Text> 0.25</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.ButtonContainer} onPress={() => this.setSpeed(0.5)}>
                    <Text> 0.5 (Default)</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.ButtonContainer} onPress={() => this.setSpeed(0.75)}>
                    <Text> 0.75</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.ButtonContainer} onPress={() => this.setSpeed(1)}>
                    <Text> 1 </Text>
                </TouchableOpacity>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        // flexDirection:"row",
        // justifyContent: 'center',
        // alignItems: 'center',
    },

    ButtonContainer: {
        padding: 18,
        textAlign: "left",

    },

    closeButton: {
        borderColor: 'red',
        borderRadius: 22,
        borderWidth: 1,


    },
    title: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 23
    },

    titleContainer: {
        paddingTop: 30,
        paddingBottom: 20
    },

    topics: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 20

    },
    topicContainer: {
        // paddingTop: 4,
        paddingBottom: 4

    }



})
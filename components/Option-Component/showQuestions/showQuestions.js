import React from 'react'
import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';


var Questions = ["What's the date today", "Open voice commands", "Show me something funny", "Will you marry me", "Give me some advice",
    "Change app theme", "Show contacts", "What is inception about", "Testing, testing", "How do i look", "Hi google", "Tell me a fact",
    "Are you Skynet", "Self-destruct", "Entertain me", "What am i thinking right now", "Show available questions", "Can you think", "What is the best phone",
    "What is your favourite animal", "Can i call you jarvis", "Do you know siri", "Show suggestions", "Are you expensive", "Sing me a song",
    "Tell me a joke", "How is life", "how much do you like me", "I Feel Sleepy", "Do you have feeling", "What's your purpose",
    "What's your age", "Sing me a song", "I love you", "Who is your family", "Do you want to build a snowman", "Do you eat", "Do you have a nickname",
    "Am I a good person", "let's party", "Where are you living", "What do you do with my data", "Happy Birthday to you", "How do you know", "Say something interesting",
    "what am i thinking now",
]

var shuffledArrayQuestions = shuffle(Questions);



export default class PrivateMode extends React.Component {

    renderSuggestions = () => {
        //slice(0, 4).
        return shuffledArrayQuestions.map((item, key) => {
            return (
                <Text key={`result-${key}`} style={styles.Text}>
                    {item}
                </Text>
            );
        });
    }
    render() {
        return (
            <View style={{backgroundColor:'#081233'}}>
                <View style={{ display: 'flex', alignSelf:'flex-end' }} >
                    <TouchableOpacity style={styles.CloseBoxContainer} onPress={this.props.closepage}>
                        <Icon name="close" size={30} color={'white'} onPress={this.props.closepage} />
                    </TouchableOpacity>
                </View>
                <ScrollView
                    style={{ paddingTop: 30 }}
                    showsHorizontalScrollIndicator={false}
                >
                    <View >
                        <this.renderSuggestions />
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    Text: {
        padding: 18,
        textAlign: "left",
        color:'#FFF',
        // borderBottomColor:'red',
        borderBottomWidth: 0.2,
        fontWeight: "bold",
        borderBottomColor:'#FFF'

    },
    CloseBoxContainer: {
        display: 'flex',
        // position: "relative",
        top: 14,
        right: 12,

    }
})



function shuffle(array) {
    let counter = array.length;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        let index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
}
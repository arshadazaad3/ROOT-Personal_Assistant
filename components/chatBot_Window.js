/********
//ChatBot
********/

import React, { useEffect } from 'react';

//Elements from React-Native
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    TouchableOpacity,
    ScrollView,
    Modal,
    Image,
    ImageBackground,
    BackHandler,
    StatusBar,
    Alert
} from 'react-native'

import Voice from 'react-native-voice';
import Tts from 'react-native-tts';
// import Spokestack from "react-native-spokestack";
import * as VoiceHandler from './VoiceHandler/VoiceHandler'
import * as OtherHandler from './VoiceHandler/otherHandlers'
import AnimatedLoader from "react-native-animated-loader";
import Icon from 'react-native-vector-icons/FontAwesome';
import KeepAwake from 'react-native-keep-awake';
import { Actions } from "react-native-router-flux";
import { ASSISTANT_NAME } from 'react-native-dotenv'


//External Components
import renderIf from './renderIf'
import Voiceoptions from './Option-Component/Voice-Options/VoiceOptions'
import ShowSomething from './Option-Component/showSomething/Something-Funny'
import SendWhatsAppMessage from './Option-Component/Send-Message-WhatsApp/sendMessage'
import ShowMeme from './Option-Component/ShowMeme/showMeme'
import ShowQuestions from './Option-Component/showQuestions/showQuestions'

var Riddles_Reply = ["What goes up when the rain comes down?", "What’s full of holes but still holds water?", "Where is the only place that yesterday always comes after today?",
    "What do you bury when it’s alive and dig up when it’s dead?", "What can you see in the middle of March and April that you can never see in any other month?",
    "What do you answer even though it never asks you questions?", " I am a word with letters three. Add two more and less there will be. What word am I?",
    "What word is always pronounced incorrectly?", "What can you not keep until you give it?", "Which was the first planet to be discovered by man?",
    "What goes up and down the stairs without moving", " What has one head, four legs, and one foot?", "What is there one of in every corner and two of in every room?",
    "What grows up while growing down?", " What can’t you see that is always ahead of you?", "What can you fill with empty hands?",
    "What time of day is spelled the same forwards and backwards?", "What word becomes shorter when you add two letters to it?",
    "What’s black when it’s clean and white when it’s dirty?", "Who has married many women but never married?", "What do you call a guy with a rubber toe?"
]

var Riddles_Answer = ["An umbrella.", "A sponge.", "In a dictionary.",
    "A plant.", "The letter R", "A phone or a doorbell.", "Few.", "Incorrectly.",
    "Your word or a promise.", "Earth", "Carpet.", "A bed.", " The letter O.", "A duck or goose",
    "The future.", "Gloves.", "Noon.", "Short.", "A blackboard.", "A priest.", "Roberto"
]

var ByeList = ["Bye", "Adios", "Good Bye"]
var ArrayNoReply = []
var Suggestions_list = ["Tell a joke", "Motivate me", "Sing a song", "What's the time", "Advice me", "Show something funny", "Change theme",
    "Open private mode", "Open settings", "Tell a story", "Open voice settings", "Show questions"]
var shuffledArraySuggestion = shuffle(Suggestions_list);

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

/*********
Chat Component
*********/
class ChatBot extends React.Component {
    constructor(prop) {
        super(prop)
        /*
        Once Speech Results is returned this Function runs
        if runVoiceOnce variable is true this wont run
        this function passes user and system queries to array
        */
        Voice.onSpeechStart = this.onSpeechStart;
        Voice.onSpeechEnd = this.onSpeechEnd;

        //Handle On Speech Results
        Voice.onSpeechResults = (res) => {
            if (this.state.runVoiceOnce == false) {
                let userVoiceTextString = res.value[0]
                this.state.allMessagesArray.push(userVoiceTextString)
                this.setState({
                    userVoiceTextString: userVoiceTextString
                })
                console.log("User Input: " + userVoiceTextString)
                this.setState({
                    runVoiceOnce: true
                })
                const voiceResponse = VoiceHandler.systemReplyVoice(this.state.userVoiceTextString)

                if (!voiceResponse) {
                    this.setState({
                        micButton: true,
                        voiceAvailable: false,
                        micIconState: true,
                        recording_Voice: false
                    })

                    var bye = ByeList[Math.floor(Math.random() * ByeList.length)];
                    this.state.allMessagesArray.push(bye)
                }
                this.setState({
                    systemResult: voiceResponse
                })

                if (voiceResponse == true) {
                    this.state.allMessagesArray.push("Sorry I Did not get that")
                    this.setState({
                        recording_Voice: false
                    })
                    console.log()
                }

                if (voiceResponse == "Wrong Password") {
                    this.state.allMessagesArray.push("Wrong Password")
                    this.setState({
                        recording_Voice: false
                    })
                }
                else {
                    if (voiceResponse != false) {
                        this.state.allMessagesArray.push(voiceResponse)
                    }
                }
                console.log("System Response: " + voiceResponse)
                if (voiceResponse == "opening voice options") {
                    this.handleMicandVoiceView()
                    this.toggleVoiceOptions()
                }
                if (voiceResponse == "Showing Something Funny") {
                    this.handleMicandVoiceView()
                    this.toggleShowSomethingModal()
                }
                if (voiceResponse == "Showing Meme") {
                    this.handleMicandVoiceView()
                    this.toggleShowMemeModal()
                }
                if (voiceResponse == "Switching Theme") {
                    this.handleMicandVoiceView()

                    if (this.state.BGColor == '#081233') {
                        this.setState({
                            BGColor: '#FFF',
                            UserTextColorBG: '#2979FF',
                            SystemTextColorBG: '#D1D0D0',
                            FontColorUserText: '#D6D6D6',
                            FontColorSystemText: '#121212'
                        })
                    }
                    else if (this.state.BGColor == '#FFF') {
                        this.setState({
                            BGColor: '#081233',
                            UserTextColorBG: '#2979FF',
                            SystemTextColorBG: '#1E2640',
                            FontColorUserText: '#D6D6D6',
                            FontColorSystemText: '#D6D6D6'
                        })
                    }
                }
                if (voiceResponse == "Sending Message on WhatsApp") {
                    this.handleMicandVoiceView()
                    this.toggleShowSendMessageOnWhatsapp()
                }
                if (new RegExp(Riddles_Reply.join("|")).test(voiceResponse)) {
                    this.setState({
                        micButton: true,
                        voiceAvailable: false,
                    })
                    timer = setTimeout(() => this.riddleReply(voiceResponse), 6000)
                }
                if (voiceResponse == "Showing Suggestions") {
                    this.setState({ suggestions: true })
                    timer = setTimeout(() => this.setState({ suggestions: false }), 7000)
                    this.handleMicandVoiceView()
                }
                if (voiceResponse == "Opening Private Mode") {
                    this.handleMicandVoiceView()
                    VoiceHandler.PrivateModeHandler()
                }
                if (voiceResponse == "Opening Settings") {
                    this.handleMicandVoiceView()
                    Actions.Settings_Window()
                }
                if (voiceResponse == "Showing your contacts") {
                    this.handleMicandVoiceView()
                    Actions.ShowContacts_Window()
                }
                if (voiceResponse == "User Emotion") {
                    this.handleMicandVoiceView()
                    this.UserRequestEmotion()
                }
                if (voiceResponse == "Switching auto emotion feature") {
                    this.handleMicandVoiceView()
                    this.toggleAutoEmotion()
                }
                if (voiceResponse == "Switching auto silent feature") {
                    this.handleMicandVoiceView()
                    this.toggleAutoSilent()
                }

                if (voiceResponse == "Showing Available Questions") {
                    this.handleMicandVoiceView()
                    this.toggleShowQuestionsModal()
                }
                if (voiceResponse == "Rap") {
                    this.handleMicandVoiceView()
                    Tts.setDefaultRate(0.5)
                }
                if (voiceResponse == "exit app") {
                    BackHandler.exitApp();
                }
            }
        }

        //On Speech If Error Exists
        Voice.onSpeechError = e => {
            ArrayNoReply.push("error")
            if (ArrayNoReply.length > 3) {
                var newArr = []
                Tts.speak("looks Like there's no one there")
                this.handleMicandVoiceView()
                ArrayNoReply = newArr
            }
            else {
                VoiceHandler.errorOnVoice()
            }
        };

        //Event Listener On Text To Speech Finish
        Tts.addEventListener('tts-finish', event =>
            this.runVoiceMainOne()
        );

        //Event Listener On Text To Speech Start
        Tts.addEventListener('tts-start', (event) =>

            this.setState({
                system_VoiceAnimation_state: true,
                // micIconState: false
            })
        );
    }

    handleMicandVoiceView = () => {
        this.setState({
            micButton: true,
            voiceAvailable: false,
            micIconState: true
        })
    }

    //Controller To Run Voice
    runVoiceMainOne = () => {
        this.setState({
            system_VoiceAnimation_state: false
        })
        this.runVoiceMain()
    }

    //When Speech Starts
    onSpeechStart = e => {
        //Invoked when .start() is called without error
        this.setState({
            recording_Voice: true,
            micIconState: false
        })
        console.log('Recording Voice ' + this.state.recording_Voice);
    };

    //Riddle Reply
    riddleReply = (incomeVoice) => {
        var riddlesArray = Riddles_Reply
        var indexRiddle = riddlesArray.indexOf(incomeVoice);
        var riddlesAnswerArray = Riddles_Answer
        var indexAnswer = riddlesAnswerArray[indexRiddle]
        console.log(indexAnswer)
        Tts.speak(indexAnswer)
        this.setState({
            micIconState: true
        })
        var AllMessageArrayDup = this.state.allMessagesArray
        var AllMessageArrayIndex = this.state.allMessagesArray.indexOf(incomeVoice)
        AllMessageArrayDup[AllMessageArrayIndex] = incomeVoice + " " + indexAnswer
    }

    //After Speech Ends
    onSpeechEnd = e => {
        //Invoked when .start() is called without error
        this.setState({
            recording_Voice: false,
        })
        console.log('Recording Voice ' + this.state.recording_Voice);
    };

    //Main method To Run Voice
    runVoiceMain = () => {
        if (this.state.voiceAvailable) {
            this.runVoiceReply()
            this.setState({
                system_VoiceAnimation_state: false
            })
        }
    }

    componentDidMount() {
        //Turn off Suggestions
        timer = setTimeout(() => this.setState({ suggestions: false }), 5000)
        //Check User Emotion Based On Messages
        timer = setTimeout(() => this.checkUserEmotion(), 20000)
        timer = setTimeout(() => this.checkUserEmotion(), 36000)
        timer = setTimeout(() => this.checkUserEmotion(), 49000)
        //Check if Messages Are Empty
        timer = setTimeout(() => this.checkIfAllMessagesEmpty(), 10000)
        // Tts.voices().then(voices => console.log(voices));
        // Tts.engines().then(engines => console.log(engines));
    }

    componentWillUnmount() {
        Tts.stop()
        Voice.destroy()
    }

    toggleAutoEmotion() {
        this.setState({
            autoEmotionFeature: !this.state.autoEmotionFeature
        })
    }
    toggleAutoSilent() {
        this.setState({
            autoSilentFeature: !this.state.autoSilentFeature
        })
    }

    //Variables Used
    state = {
        userText: "",
        systemResult: "",
        userVoiceTextString: "",
        runVoiceOnce: false,
        //Mic button to handle mic button presses
        micButton: true,
        //Voice Available to handle running of voice after user terminates
        voiceAvailable: true,
        allMessagesArray: ["Hello I'm root, How Can I Help You"
        ],
        //Voice Option State Window
        voiceOptionsStateWindow: false,
        //Recoding Voice Animation State
        recording_Voice: false,
        //mic icon state
        micIconState: true,
        //System speaking State
        system_VoiceAnimation_state: false,
        //Show Something Funny Modal State
        showSomethingFunnyModalState: false,
        //Suggestions
        suggestions: true,
        //Theme
        BGColor: '#081233',
        UserTextColorBG: '#2979FF',
        SystemTextColorBG: '#1E2640',
        FontColorUserText: '#D6D6D6',
        FontColorSystemText: '#D6D6D6',
        //Check Emotion State
        checkedEmotion: false,
        //Auto Emotions
        autoEmotionFeature: false,
        //Auto Silent Here
        autoSilentFeature: false,
        //Check if User is Offline based on no reply
        noReplyArray: [],
        //Show Meme Modal State
        showMemeModalState: false,
        //Show Questions Modal State
        showQuestionsModalState: false,
    }

    UserRequestEmotion = () => {
        this.setState({
            checkedEmotion: true
        })
        OtherHandler.EmotionSensor(this.state.allMessagesArray)
    }

    checkUserEmotion = () => {
        if (this.state.allMessagesArray.length > 1) {
            if (this.state.autoEmotionFeature) {
                Tts.setDefaultPitch(1)
                if (this.state.micIconState) {
                    if (!this.state.recording_Voice)
                        if (!this.state.checkedEmotion) {
                            OtherHandler.EmotionSensor(this.state.allMessagesArray)
                            this.setState({
                                checkedEmotion: true,
                                voiceAvailable: false
                            })
                        }
                }
            }
        }
    }

    checkIfAllMessagesEmpty = () => {
        if (this.state.autoSilentFeature) {
            if (this.state.allMessagesArray.length <= 1) {
                VoiceHandler.systemReplyVoice("no response")
                // Tts.setDefaultPitch( 2)
                this.setState({
                    voiceAvailable: false
                })
            }
        }
    }
    /*
    This Function Handles The Running oF Voice 
    If User CLicks Button once voice runs and clicks again voice Terminates
    */

    runSystemVoice = () => {
        this.setState({
            micButton: !this.state.micButton,
            voiceAvailable: true
        })

        this.setState({ suggestions: false })
        if (this.state.micButton) {
            this.runVoiceReply()
        }
        else {
            Voice.cancel()
            Tts.stop()
        }
    }

    toggleVoiceOptions() {
        this.setState({
            voiceOptionsStateWindow: !this.state.voiceOptionsStateWindow,
        })
    }

    toggleShowSomethingModal() {
        console.log("hhhhhhhh")
        this.setState({
            showSomethingFunnyModalState: !this.state.showSomethingFunnyModalState
        })
    }

    toggleShowMemeModal() {
        this.setState({
            showMemeModalState: !this.state.showMemeModalState
        })
    }

    toggleShowQuestionsModal() {
        this.setState({
            showQuestionsModalState: !this.state.showQuestionsModalState
        })
    }

    toggleShowSendMessageOnWhatsapp() {
        Actions.WhatsAppSendMessage_Window()
    }

    //Start React Native Voice
    runVoiceReply = () => {
        this.setState({
            runVoiceOnce: false
        })
        Tts.setDefaultPitch(1)

        Voice.start('en-US');
    }



    renderSuggestions = () => {
        return shuffledArraySuggestion.slice(0, 4).map((item, key) => {
            return (
                <Text key={`result-${key}`} style={[styles.systemText, { backgroundColor: this.state.SystemTextColorBG, color: this.state.FontColorSystemText }]}>
                    {/* {item.text} */}
                    {item}
                </Text>
            );
        });
    }

    render() {
        return (
            <SafeAreaView style={[styles.Maincontainer, { backgroundColor: this.state.BGColor }]}>
                <StatusBar hidden />
                <KeepAwake />
                <Modal
                    animationType="fade"
                    visible={this.state.voiceOptionsStateWindow}
                    onRequestClose={() => this.toggleVoiceOptions()}
                >
                    <Voiceoptions closepage={() => this.toggleVoiceOptions()} />
                </Modal>
                <Modal
                    animationType="fade"
                    visible={this.state.showSomethingFunnyModalState}
                    onRequestClose={() => this.toggleShowSomethingModal()}
                >
                    <ShowSomething closepage={() => this.toggleShowSomethingModal()} />
                </Modal>
                <Modal
                    animationType="fade"
                    visible={this.state.showMemeModalState}
                    onRequestClose={() => this.toggleShowMemeModal()}
                >
                    <ShowMeme closepage={() => this.toggleShowMemeModal()} />
                </Modal>

                <Modal
                    animationType="fade"
                    visible={this.state.showQuestionsModalState}
                    onRequestClose={() => this.toggleShowQuestionsModal()}
                >
                    <ShowQuestions closepage={() => this.toggleShowQuestionsModal()} />
                </Modal>

                <ScrollView
                    ref={ref => this.scrollView = ref}
                    onContentSizeChange={(contentWidth, contentHeight) => {
                        this.scrollView.scrollToEnd({ animated: true });
                    }}
                    style={[styles.messageContainer, { backgroundColor: this.state.BGColor }]}
                >
                    {this.state.allMessagesArray.map((result, index) => {
                        if (index % 2) {
                            return (
                                <View key={`result-${index}`} style={styles.userTextContainer}>
                                    <Text style={[styles.userText, { backgroundColor: this.state.UserTextColorBG, color: this.state.FontColorUserText }]}>
                                        {result}
                                    </Text>
                                </View>
                            );
                        }
                        else {
                            return (
                                <View key={`result-${index}`} style={[styles.systemTextContainer]}>
                                    <Image
                                        style={styles.messageImg}
                                        source={require('./icons/logo.png')}
                                    />
                                    <Text style={[styles.systemText, { backgroundColor: this.state.SystemTextColorBG, color: this.state.FontColorSystemText }]}>
                                        {result}
                                    </Text>
                                </View>
                            )
                        }
                    })}
                </ScrollView>

                <View>
                    {renderIf(this.state.suggestions)(
                        <View>
                            <Text style={{ color: 'white', fontSize: 10, paddingLeft: 12 }}>Suggestions</Text>
                            <ScrollView
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                            >
                                <View style={styles.systemTextContainerSug}>
                                    <this.renderSuggestions></this.renderSuggestions>
                                </View>
                            </ScrollView>
                        </View>

                    )}
                </View>

                <View style={[styles.textInputBox, styles.footer]}>
                    <TouchableOpacity
                        style={[styles.mic]
                        }
                        onPress={this.runSystemVoice}>

                        {renderIf(this.state.micIconState)(
                            <Icon name="microphone" size={30} color={this.state.FontColorSystemText} />
                        )}

                        <AnimatedLoader
                            visible={this.state.recording_Voice}
                            source={require("./icons/7833-voice.json")}
                            animationStyle={{
                                height: 80,
                                width: 80,
                                top: '175%'
                            }}
                            speed={1}
                        />

                        <AnimatedLoader
                            visible={this.state.system_VoiceAnimation_state}
                            source={require("./icons/4909-voice-receiving-animation.json")}
                            animationStyle={{
                                height: 80,
                                width: 80,
                                top: '175%'
                            }}
                            speed={1}
                        />
                    </TouchableOpacity>
                </View>
            </SafeAreaView >
        );
    }
}

const styles = StyleSheet.create({
    messageImg: {
        width: 20,
        height: 20

    },
    Maincontainer: {
        flex: 1,
    },

    messageContainer: {
        backgroundColor: 'white',
        marginTop: 10
    },
    systemTextContainer: {
        flex: 1,
        flexDirection: 'row'
    },

    systemTextContainerSug: {
        flexDirection: 'row',
    },
    userTextContainer: {
        flex: 1,
        flexDirection: 'row-reverse',
    },

    userText: {
        padding: 8,
        margin: 6,
        borderRadius: 14,
        maxWidth: '80%',
        fontSize: 16
    },

    systemText: {
        borderRadius: 14,
        maxWidth: '80%',
        margin: 6,
        padding: 8,
        fontSize: 16
    },

    footer: {
        paddingHorizontal: 22,
        paddingVertical: 8,
        flexDirection: "row",
        alignItems: "center",
    },

    mic: {
        borderRadius: 4,
        padding: 3,
        flex: 1,
        alignItems: "center",
        justifyContent: "center",

    },
});
export default ChatBot
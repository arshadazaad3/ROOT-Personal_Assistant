import Voice from 'react-native-voice'
import Tts from 'react-native-tts';
import { Actions } from "react-native-router-flux";
import * as VoiceHandler from './VoiceHandler'

//////////////////////////////////////////////////
//EMOTIONS
///////////////////////////////////////

var AngryEmotion_List = ["I hate you", "you are not great", "you're an idiot", "you are mad", "shut up", "why you doing like this", "why you like this", "why are you acting like this",
    "what's wrong with you", "what is wrong with you", "idiot"]

var HappyEmotion_List = ["I love you", "I'm in love with you", "you are great", "you are cool", "you are the best", "I like you", "you're great", "you're smart", "you are smart"]

var AngryEmotion_Reply = ["Your Emotion Seems Angry. lol"]
var HappyEmotion_Reply = ["Your Emotion Seems happy. Thats Great"]

export const EmotionSensor = allMessagesArray => {

    var AngerEmotions = CommonElementsTwoArrays(AngryEmotion_List, allMessagesArray)
    var HappyEmotion = CommonElementsTwoArrays(HappyEmotion_List, allMessagesArray)

    if (AngerEmotions.length > HappyEmotion.length) {
        AngryEmotionSpeaker()
    }
    else if (AngerEmotions.length == HappyEmotion.length) {
        VoiceHandler.systemReplyVoice("stable_emotion")
    }
    else {
        HappyEmotionSpeaker()
    }
}

function AngryEmotionSpeaker() {
    var reply = AngryEmotion_Reply[Math.floor(Math.random() * AngryEmotion_Reply.length)];
    Tts.getInitStatus().then(() => {
        Tts.speak(reply)
    });
}

function HappyEmotionSpeaker() {
    var reply = HappyEmotion_Reply[Math.floor(Math.random() * HappyEmotion_Reply.length)];
    Tts.getInitStatus().then(() => {
        Tts.speak(reply)
    });
}

function CommonElementsTwoArrays(list1, list2) {
    resultArray = []
    for (let i = 0; i < list1.length; i++) {
        for (let j = 0; j < list2.length; j++) {
            if (list1[i] === list2[j]) {
                resultArray.push(list1[i])
            }
        }
    }
    return resultArray
}
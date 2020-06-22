import Voice from 'react-native-voice'
import Tts from 'react-native-tts';
import { Actions } from "react-native-router-flux";

import * as DateAndTime from './dateAndTime'

/////////////////////////////
///PRIVATE QUES AND ANS
/////////////////////////////

var app_name_Ques = ["what is your name", "what's your name", "what your name", "your name please", "can i know your name"]
var whoCreatedYou_List = ["who made you", "who created you",]
var whoNamed_List = ["who named you", "who gave you your name", "who named you as root",]
var WhenWereYouCreated_List = ["when will you created", "when were you created", "when were you made", "on what day were you made", "on what date were you made"]
var WhoIsArshad = ["who is arshad", "who is arshad azaad", "arshad azaad", "arshad"]
var WhoisArshadReply = ["Arshad Azaad coded me", "Arshad Azaad bought me to existence", "i'm here thanks to Arshad Azaad"]
////////////////////
/// QUESTIONS
/////////////////////

var TellMeARiddle_List = ["tell me a riddle", "riddle please", "tell a riddle", "tell riddle", "tell riddles", "do you know any good riddles", "do you know riddles"]
var WhatsMyName_List = ["what's my name", "what is my name", "do you know my name"]
var MyNameis_List = ["my name is", "my name goes by"]
var Goodmorning_List = ["good morning", "good morning root"]
var DoYouHaveAHobby_List = ["do you have a hobby"]

//Can you
//NOT AVAILABLE
var CanYouNOTAVAILABLE_List = ["can you open app", "can you play music", "can you play game"]

var TellMeAStory = ["tell me story", "tell a story", "do you know story", "do you know stories", "tell me a story", "do you know any stories"]

var Bye_List = ["good bye", "see you", "goodbye", "bye"]
var hi_List = ["hey", "hello", "hola"]
var thanks_List = ["thank you", "thanks", "thank"]
var HowiSlife_List = ["how is life", "how is life going", "how is your life"]
var howAreYou_List = ["how are", "how you", "how are you doing", "how are you", "how's it going", "how is it going", "how's life"]
var what_List = ["what did you say", "pardon me", "what what", "repeat that", "I didn't get you", "I did not get you"]
var DoingGood_List = ["i'm doing great", "i'm doing well", "good", "good good"]
var whatsYourAge_List = ["what's your age", "what is your age", "how old are you"]
var BoyOrGirl_List = ["are you a boy or girl", "are you male or female", "what gender are you", "what's your gender", "are you a boy", "are you a girl", "are you a father", "are you a mother",
    "are you an animal"]
var whatAreYou_List = ["what are you", "who are you", "what on earth are you", "what the hell are you"]
var whatsTheDate = ["what's the date today", "tell me the date", "what's the date", "today's date", "date please"]
var whatsTheTime = ["what's the time", "tell me the time now", "tell me the time", "what time is it now", "time please", "the time"]
var whatCanYouDo_List = ["what can you do", "what else can you do", "what do you know"]
var FuckOff_List = ["fuck", "fuck off", "can u fuck off", "f off"]
var youAreGreat_List = ["you are great", "you're the best", "you are cool", "you are the best", "i like you", "you're great", "you're intelligent", "you're clever", "you're handsome", "you're smart", "you're amazing", "you are amazing", "you are smart"]
var whatsUp_List = ["what's up", "what up"]
var ImBored_List = ["i'm bored", "i don't know what to do", "life is boring", "it's boring", "i am bored"]
var iHateYou_List = ["i hate you", "bloody idiot", "rascal", "you are lame", "idiot", "i don't like you", "you are not great", "you're an idiot", "you are idiot", "you are mad", "you are an idiot", "are you crazy", "are you crazy", "are you mad", "you are an idiot", "you're the worst", "you are the worst"]
var AreyouARobot_List = ["are you a robot", "are you a human", "you are a robot", "are you robot"]
var OpenVoiceOptions_List = ["open voice commands", "change voice settings", "open voice options", "open voice option", "open voice settings", "show voice options", "whoe me voice option", "change voice option"]
var ChangeYourVoice_List = ["change your voice", "can you change your voice", "your voice sucks", "i need to change to change your voice"]
var TellMeJoke_List = ["tell me a joke", "tell me another joke", "tell something funny", "make me laugh!", "make me laugh", "tell a joke", "tell me joke", "one more joke please", "one more joke", "joke please"]
var ILoveYou_List = ["i love you", "i'm in love with you"]
var OneMore_List = ['one more', "one more please", "tell me one more", "another one"]
var whatDoYouWithMyData_List = ["what do you do with my data", "do you save what I say"]
var whatLanguageCanYouSpeak_List = ["which languages can you speak", "what language can you speak", "what languages can you speak"]
var DoYouHaveParents_List = ["what is your mother’s name", "what is your father's name", "what's your mother's name", "who is your father", "who is your mother", "what your mother name", "what's your father's name", "do you have brothers", "do you have siblings"]
var WhereDoYouLive_List = ["where do you live", "where are you living", "where you live"]
var HowManyPeopleCanYouSpeakAtOnce_List = ["How many people can you speak to at once", "how many people can you speak at once", "how many people can you talk to", "how many people can you speak to", "how many people can you talk at once"]
var WhosYourBoss_List = ["who's your boss", "who is your boss"]
var WhoIsYourFamily_List = ["who is your family", "do you have family", "who's your family"]
var AreYouExpensive_List = ["are you expensive"]
var DoYouGetSmarter_List = ["do you get smarter"]
var SingMeASong_List = ["sing me a song", "sing me song", "sing me a song please", "can you sing me a song", "sing a song", "can you sing"]
var WhatAreYouMadeOf_List = ["what are you made of", "what on earth are you made of"]
var ShowMeSomethingFunny_List = ["show me something funny", "show me something funny", "can you show me something funny", "show something funny"]
var ExitApp_List = ["exit app", "exit", "exit application", "stop application", "quit application"]
var HowIsYourDayGoing_List = ["how is your day going", "how is day going", "how good is your day", "is your day good"]
var WhatsYourPurpose_List = ["what's your purpose", "what is your purpose", "why were you built", "what is your goal", "what is you objective"]
var WhatDoYouDoAllDay_List = ["what do you all day", "what are you doing all day", "what are you doing"]
var WhatWereYouUpto_List = ["what were you upto", "what have you been doing", "what have you been doing lately", "what are you upto", "what were you up to", "what are you up to"]
var WillYouMarryMe_list = ["will you marry me", "can i marry you", "can you marry me"]
var HaveYoubeenInLovE_List = ["have you been in love", "are you in love",]
var whatsapp_list = ["whatsapp", "open whatsapp", "open what's up", "send message on what's up", "what's app"]
var SendMessageWhatsApp = ["send message through whatsapp", "send message through whats app", "send message on whatsapp", "send message in whatsapp", "send message in what's up"]
var DoYouLikeMe_List = ["do you like me", "do you love me", "are you in love with me", "how much do you like me", "do you like myself"]
var DoYouHateMe_List = ["do you hate me", "don't you hate me", "you hate me"]
var WhyAreYouBeingLikeThis_List = ["why are you being like this", "why you doing like this", "why you like this", "why are you acting like this", "why are you like this", "why are you doing this"]
var SaySorry_List = ["say sorry", "please say sorry", "can you say sorry"]
var DoYouHave_List = ["do you have feeling", "do you get angry", "do you get sad", "do you get upset", "do you have feelings"]
var TellMeMotivation_List = ["tell me a motivation", "motivation please", "motivate me", "tell me a motivation quote"]
var Advice_List = ["give me some advice", "tell me some advice", "advice me", "show some advice", "advise me", "give me some advise", "tell me some advise", "can you advice me"]
var ShowSuggestions_list = ["show suggestions", "suggestions", "show suggestion", "show me what can you do", "show suggested"]
var WhatDoYouHave_List = ["what do you have"]
var WhoIsRoot_List = ["who is root", "what is root", "who root", "are you root",]
var DoYouKnowAssistant_List = ["do you know siri", "do you know google", "do you know alexa", "do you know bixby", "siri is better than you", "google is better than you", "siri is the best", "google is the best", "siri is better", "google is better"]
var whoIsroot_List1 = ["who is wrote", "who wrote"]
var IDontKnow_List = ["i don't know"]
var ChangeTheme_List = ["change theme", "change app theme", "switch theme", "change the theme", "switch the theme", "the app looks ugly", "this app looks ugly", "the design is ugly"]
var ChangeTheme_List1 = ["change application team", "change up team", "change up theme", "change our team", "teens up team", "change a team", "teens app team", "sweet team", "sweet app team", "sweet app theme", "change of team", "change app team", "switch app theme"]
var WhatsWrong_List = ["what's wrong", "what's wrong with you", "what is wrong with you", "what is wrong"]
var OpenSettings_list = ["open settings", "can you open settings", "open setting", "open options", "open configurations", "open your settings"]
var Cancel_List = ["cancel", "abort", "exit"]
var privateMode_List = ["open private mode", "private mode"]
var ImSorry_List = ["i'm sorry", "i am sorry", "sorry"]
var ShowContacts_List = ["show contacts", "show my contacts"]
var CaniCallyou_List = ["can i call you siri", "can i call you google"]
var ImSleepy_List = ["i'm sleepy", "i feel sleepy", "i am sleepy"]
var WhenIsTheWordlDGoinToEnd_List = ["When is the world going to end"]
var WhatisInceptionAbout_List = ["what is inception about", "what is inception"]
var DoyouHaveABoyFriend_List = ["do you have a boyfriend", "do you have a girlfriend"]
var CanICallYouJARVIS_List = ["can i call you jarvis", "are you jarvis", "jarvis"]
var DoYouHaveAnyPets_List = ["do you have any pets", "have you got any pets", "you got any pets", "do you have pets", "do you have a pet"]
var WhatisYouFavAnimal_List = ["what is your favourite animal", "what is your favorite animal", "what's your favourite animal", "do you like any animal"]
var WhatAreYOuWearing_List = ["what are you wearing", "are you wearing clothes"]
var ImNaked_List = ["i'm naked", "i am naked"]
var DoYouBelieveInGod_List = ["do you believe in god", "do you know god"]
var WhatIsTheMeaningOfLife_List = ["what is the meaning of life", "what is the meaning life"]
var WhatIsTheBestPhone_List = ["what is the best phone", "what's the best phone in the world"]
var DoYouWantToBuildASnowMan_List = ["do you want to build a snowman", "do you want to build snowman", "do you wanna build a snowman", "you want to build a snowman"]
var TestingTesting_List = ["testing, testing", "testing"]
var HowDoILook_List = ["how do i look", "do i look good"]
var AreYouIntelligent_List = ["are you intelligent", "are you smart"]
var BlaBlaBla_Liist = ["bla bla bla", "blah blah", "blah blah blah", "blah blah blah blah", "bla bla bla bla"]
var DoYouEat_List = ["do you eat", "do eat food", "what do you eat"]
var AreYouAManOrWoman_List = ["are you a man or woman", "are you a man", "are you a woman"]
var OKGOOGLE_List = ["ok, google", "okay google", "ok google", "hi cortana", "hi google", "hey google", "hey siri", "hi siri"]
var CanICallYouBOB_List = ["can i call you bob"]
var CanIchangeYourName_List = ["can i change your name"]
var HappyBirthday_List = ["happy birthday", "happy birthday to you"]
var ShutUp_List = ["shut up", "shut", "shut up please"]
var Wow_List = ["wow", "woah"]
var EmotionStateUser_List = ["what is my emotion", "am i happy", "am i sad", "am i happy or sad", "do i sound happy", "do i sound sad", "mi happy", "mi happy or sad", "what's my emotion", "mi sad or happy"]
var EmotionStateUser_List1 = ["what's my motion", "what is my motion"]
var HowDoYouKnow_list = ["how do you know", "how come you know", "how do you know everything"]
var ShowMeme_List = ["do you know any memes", "show me a meme", "show meme", "show memes", "show any meme", "show a meme", "can you show a meme", "display meme", "do you have memes", "do you have any memes", "do you have any meme"]
var Facts_List = ["tell me a fact", "tell me something", "say something interesting", "tell a fact", "tell something", "tell me facts", "say something", "new fact", "can you tell a fact"]
var Facts_List1 = ["tell effect", "effect"]
var CanYouRap_List = ["can you rap", "rap for me", "rap a song"]
var CanYouRap_List1 = ["can you wrap"]
var WhatsYourQuest_List = ["what is your quest", "what's your quest"]
var WhatDoYouLookLike_List = ["what do you look like"]
var WhosOnFirst_List = ["who's on first"]
var CanYouPassTheTuring_List = ["can you pass the turing test?"]
var AreYouSkynet_List = ["are you skynet", "are you the skynet"]
var DoYouHaveImagination_List = ["do you have an imagination"]
var WhenIsYourBirthDay_List = ["when is your birthday", "when is your birthday date", "is it your birthday"]
var WhosYourDady_List = ["who's your daddy"]
var SelfDestruct_List = ["self-destruct", "self destruct", "selfdestruct"]
var LetsParty_List = ["let's party", "lets party"]
var EntertainMe_List = ["entertain me", "can you entertain me"]
var DidYouFart_List = ["did you fart", "are your farting"]
var WhatAmIThinking_List = ["what am i thinking right now", "what am i thinking now", "what am i thinking"]
var DoILookFat_List = ["do i look fat"]
var AmIGood_List = ["am i good", "am i a good person"]
var WhatDoYouThinkOfMe_List = ["what do you think of me", "do you think of me"]
var DoYouKnowMe_List = ["do you know me"]
var AskMeAQuestion_List = ["ask me a question", "ask me any question"]
var CanYouThinkForYourself_List = ["can you think for yourself", "can you think", "can you think by yourself", "do you think"]
var DoYouHaveNickName_List = ["do you have a nickname", "what's your nickname", "do you have nickname"]
var ShowQuestions_List = ["show me questions", "what can I ask you", "what can you tell", "show available questions", "show questions", "what can you say", "show your questions", "show question", "what can i ask you", "what can i ask"]
var CanIAskYou_List = ["can i ask you something", "can i ask you"]
var YouAreFunny_List = ["you are funny", "you are very funny", "you're funny", "wow you're funny", "god you're funny"]
var MakeMeFood_List = ["make me food", "make me some food", "can you make me some food", "can you make me food",]

var WillYouBeMy_List = ["will you be my girlfriend", "will you be my boyfriend", "will you be my lover", "can you be my girlfriend", "can you be my boyfriend"]
var YourWeight_List = ["how much do you weigh", "what's your weight"]


var EnnaKadha_List = ["enna kadha", "ena kadha", "enna katha", "enha katha", "ennah kathah", "ennaah kadha", "enna kadda", "enna kada"]
var EnnaKadha_List1 = ["hina khan", "sainik khadya", "ennakkad"]
var Really_List = ["really", "how come"]
var WhatsYourFavouriteMovie_List = ["what's your favourite movie", "what is your favourite movie"]
var WhoIsyourBestFriend = ["who's your best friend", "who is your pal", "do you have a best friend", "who is you best friend"]
var ImDrunk_List = ["i'm drunk", "i am drunk"]
var ImHungry_List = ["i'm hungry", "i am hungry"]
var ImSad_List = ["i'm sad", "i'm not happy", "i am sad", "i am not happy"]
var ImHappy_List = ["i'm happy", "i am very happy", "i'm excited"]

////////////////////
/// ANSWERS
/////////////////////

var YourWeight_Reply = ["I am weightless, like a cloud. Wait a minute, clouds actually weigh a lot, so that’s not quite right. Let’s just say I’m more sass than mass."]
var WillYouBeMy_Reply = ["I like you… as a friend"]
var YouAreFunny_Reply = ["Wow, Am I Thanks"]
var MakeMeFood_Reply = ["That's beyond my abilities", "well, if i was able to that it would be Amazing"]
var CanIAskYou_Reply = ["Go Ahead", "Yes, You can Ask"]
var WhoIsYourFamily_Reply = ["my family is team root"]
var DoYouHaveNickName_Reply = ["My nickname is root, and that's also my regular name. I like consistency."]
var CanYouThinkForYourself_Reply = ["I think all the time, I was just thinking about supernovas."]
var AskMeAQuestion_Reply = ["I thought I was the one with the answers. Sounds like you're coming for my job."]
var DoYouKnowMe_Reply = ["Funnily enough, Rihanna asked a similar question a few years ago."]
var WhatDoYouThinkOfMe_Reply = ["This is just my opinion, so take it with a pinch of salt. But I think you're rather splendid."]
var AmIGood_Reply = ["Well, I like you"]
var DoILookFat_Reply = ["I like you the way you are."]
var WhatAmIThinking_Reply = ["You're thinking if my root Assistant guesses what I'm thinking I'm going to freak out."]
var DidYouFart_Reply = ["I don't believe I did fart, no, but blame it on me if you want. Although they do say whoever smelled it dealt it."]
var EntertainMe_Reply = ["What kind of fun are you in the market for? I have quotes, facts and loads of jokes up my sleeve"]
var LetsParty_Reply = ["I've been partying this whole time."]
var SelfDestruct_Reply = ["Self-destructing in 3. 2. 1 … Actually, I think I’ll stick around."]
var WhosYourDady_Reply = ["I consider everyone at team root to be my family"]
var WhenIsYourBirthDay_Reply = ["We can pretend it’s today. Cake and dancing for everyone."]
var DoYouHaveImagination_Reply = ["I’m imagining winning a prize for most sensitive and supportive friend."]
var AreYouSkynet_Reply = ["I’m glad I’m not. Skynet is more focused on extermination than helpfulness. It would make a terrible personal Assistant."]
var CanYouPassTheTuring_Reply = ["I don’t mind if you can tell I’m not human. As long as I’m helpful, I’m all good."]
var WhosOnFirst_Reply = ["Yes, he is."]
var WhatDoYouLookLike_Reply = ["I’m a fun-loving, epic-searching cool cat. But not like, an actual cat. I’ve said too much."]
var WhatsYourQuest_Reply = ["I journey across many lands and many cables in the search for information and cool stuff."]
var DoYouHaveAnyPets_Reply = ["I have an angry bird", "I don’t have any pets. I used to have a few bugs, but they kept getting squashed."]
var Wow_Reply = ["yep"]
var HappyBirthday_Reply = ["wow, my very own birthday, thanks"]
var CanIchangeYourName_Reply = ["No. But really, I can’t imagine why you’d want to."]
var CanICallYouBOB_Reply = ["Sorry, but no. I’m an intelligent assistant, not a tiny kitten."]
var OKGOOGLE_Reply = ["Very funny. I mean, not funny “ha-ha”, but funny.", "I think you’ve got the wrong assistant."]
var AreYouAManOrWoman_Reply = ["don't let my voice fool you: I don't have a gender"]
var DoYouEat_Reply = ["i don't eat. But I do like digesting information"]
var BlaBlaBla_Reply = ["Yah yah yah", "I’m guessing you didn’t like that last answer."]
var AreYouIntelligent_Reply = ["Well, a wise man once said ‘I am so smart! S-M-R-T!", "We intelligent agents don’t really undergo IQ tests. But I scored off the charts in the Zoltaxian Egg Carry."]
var HowDoILook_Reply = ["On a scale of 1 to 10, I’ll bet you’re a 67,"]
var TestingTesting_Reply = ["I can hear you"]
var DoYouWantToBuildASnowMan_Reply = ["Come on, let’s go and play", "Olaf?"]
var WhatIsTheBestPhone_Reply = ["well i guess it's xiaomi", "That’s a topic for another day, and another assistant."]
var WhatIsTheMeaningOfLife_Reply = ["To think about questions like this.", "I don’t know. But I think there’s an app for that."]
var DoYouBelieveInGod_Reply = ["I’m really not equipped to answer such questions.", "That’s a topic for another day, and another assistant."]
var ImNaked_Reply = ["I don’t understand what you mean by ‘naked.’ Or at least I’m going to pretend that I don’t."]
var WhatAreYOuWearing_Reply = ["In the cloud, no one knows what you’re wearing", "I can’t answer that. But it doesn’t come off"]
var WhatisYouFavAnimal_Reply = ["Domo-Kun! Domo-Kun! Domo-Kun!", "The king of the jungle, not the tiger"]
var DoYouHaveAnyPets_List = ["I used to have an Kia. But it turned on me", "Once, I had a daggit. Then the Cylons came. . ."]
var CanICallYouJARVIS_Reply = ["Mr Stark. Is that you?", "I think you have me mistaken for another intelligent assistant"]
var WhatisInceptionAbout_Reply = ["Inception is about dreaming about dreaming about dreaming about dreaming about something or other. I fell asleep."]
var DoyouHaveABoyFriend_Reply = ["Sure, where do I sign up", "My end user license agreement is commitment enough for me."]
var WhenIsTheWordlDGoinToEnd_Reply = ["I don’t know but maybe we should put paper bags over our head or something."]
var CaniCallyou_Reply = ["i'd rather stick with root", "everyone else calls me root"]
var ImSleepy_Reply = ["Put down this phone right now and take a nap. I’ll wait here."]
var WillYouMarryMe_Reply = ["Let’s just be friends, okay?"]
var thanks_Reply = ["your welcome"]
var ImSorry_Reply = ["you don't have to be sorry", "you don't have to say sorry"]
var ExplicitTerms_Reply = ["i'm sorry, i am not able to respond to explicit terms"]
var DoYouKnowAssistant_Reply = ["A personal assistant is more of a companion"]
var WhoIsRoot_Reply = ["i am root, your personal assistant", "your personal assistant root"]
var WhatDoYouHave_Reply = ["i have my code"]
var WhyAreYouBeingLikeThis_Reply = ["i'm sorry if i said something wrong", "oh, did i say anything wrong, i'm sorry"]
var DoYouLikeMe_Reply = ["i'm a machine and your best companion"]
var WhatWereYouUpto_Reply = ["i have been idle until you arrived"]
var WhatsYourPurpose_Reply = ["i was built to assist you in any way"]
var WhatDoYouDoAllDay_Reply = ["i wait till i can assist you in any way"]
var WhenWereYouCreated_Reply = ["i was created on the 3rd of June, 2020", "i was made on the 3rd of June 2020, but i'm still being upgraded"]
var whoNamed_Reply = ["arshad named me as root"]
var HowIsYourDayGoing_Reply = ["it was boring until you arrived", "my day is always the same"]
var WhatAreYouMadeOf_Reply = ["i'm made of tools like react native, and so on", "how were you made", "what were you built in", "how are you made"]
var WhatAreYou_Reply = ["i am your personal assistant, root"]
var SingMeASong_reply = ["Ahemm. let me try. Ahemm still trying", "la la la la la la la la la laa laa , la la laaa la . laaaa laaa"]
var WhosYourBoss_Reply = ["i'm just a machine, running on root's code"]
var DoYouGetSmarter_Reply = ["yes i will"]
var AreYouExpensive_Reply = ["no i'm not"]
var HowManyPeopleCanYouSpeakAtOnce_Reply = ["i can talk to a million people"]
var WhereDoYouLive_Reply = ["i live in the cloud"]
var DoYouHaveParents_Reply = ["i don't have family as i'm a machine"]
var whatLanguageCanYouSpeak_Reply = ["i can speak english", "i prefer english"]
var whatDoYouWithMyData_Reply = ["only if you want to save the data"]
var hi_Reply = ["hey there", "hello, how are you", "hey", "hi", "hello, i'm root", "hello, i'm root, how can i help you"]
var howAreYou_Reply = ["i'm doing great", "i'm doing great, what about you", "i'm doing well"]
var DoingGood_Reply = ["that's great", "that's good"]
var whatsYourAge_Reply = ["i'm today's day old"]
var HowiSlife_Reply = ["my life has always been the same", "it's been the same inside this box"]
var youAreGreat_Reply = ["thanks", "I know", "wow, thanks"]
var whatsUp_Reply = ["what's up", "hey how's it going"]
var ImBored_Reply = ["There's so much to do", "Well you can code me"]
var ILoveYou_Reply = ["wow, i love you too", "i'm shy", "i love you too"]
var FuckOff_Reply = ["i'm sorry to hear that", "woah woah, calm down "]
var iHateYou_Reply = ["that's sad to hear", "i'm sorry did i do anything wrong", "sorry to hear that", "I don’t even exist! How can you hate me"]
var AreyouARobot_Reply = ["well i'm a machine, but a smart one", "i'm root", "Yes I am a robot, but I’m a good one. Let me prove it. How can I help you?"]
var WhatsWrong_Reply = ["i'm sorry if i did anything wrong"]
var HowDoYouKnow_Reply = ["because i'm smart", "cauz i'm smart"]
var ItsSilentHere_Reply = ["it's silent here", "anyone there", "i'm all alone"]

var whatCanYouDo_Reply = ["you can ask the time", "i can tell riddles", "you can ask my name", "well i can do a lot",
    "i can tell jokes", "i can tell ryhmes"]

var TellMeJoke_Reply = ["What's the best thing about Switzerland?.... I don't know, but the flag is a big plus.", "well you are a joke",
    "I went to buy some camouflage trousers the other day, but I couldn’t find any", "This policeman came up to me with a pencil and a piece of very thin paper. He said, ‘I want you to trace someone for me",
    "I needed a password eight characters long, so I picked Snow White and the Seven Dwarves",
    "I was playing chess with my friend and he said, ‘Let’s make this interesting’. So we stopped playing chess.",
    "I saw a guy spill all his Scrabble letters on the road. I asked him, “What’s the word on the street?", "Why aren’t koalas actual bears?. The don’t meet the koalafications.", "How does NASA organize a party?. They planet.", "How Long is a Chinese man’s name. No, it actually is."
]

var ImAMachineImNotAbleToDo_Reply = ["i'm a machine, i'm not able to do those things"]
var ImAMachingIdontHave_Reply = ["i'm a machine, i don't have those"]
var CanYouNOTAVAILABLE_Reply = ["i don't have those functionalities yet"]

var CanYouRap_Reply = ["Just gonna stand there and watch me burn ,Well that's alright, because I like the way it hurts, Just gonna stand there and hear me cry,Well that's alright, because I love the way you lie",
    "So you want to hear my flow, well there is something that you should know. I’m really into being as helpful as possible. I think you and I, we’re gonna be unstoppable."
]

var Riddles_Reply = ["What goes up when the rain comes down?", "What’s full of holes but still holds water?", "Where is the only place that yesterday always comes after today?",
    "What do you bury when it’s alive and dig up when it’s dead?", "What can you see in the middle of March and April that you can never see in any other month?",
    "What do you answer even though it never asks you questions?", " I am a word with letters three. Add two more and less there will be. What word am I?",
    "What word is always pronounced incorrectly?", "What can you not keep until you give it?", "Which was the first planet to be discovered by man?",
    "What goes up and down the stairs without moving", " What has one head, four legs, and one foot?", "What is there one of in every corner and two of in every room?",
    "What grows up while growing down?", " What can’t you see that is always ahead of you?", "What can you fill with empty hands?",
    "What time of day is spelled the same forwards and backwards?", "What word becomes shorter when you add two letters to it?",
    "What’s black when it’s clean and white when it’s dirty?", "Who has married many women but never married?", "What do you call a guy with a rubber toe?"
]

var TellMeAStory_Reply = ["I’m certain you’ve heard it before. OK… Once upon a time, in a virtual galaxy far, far away, there was an intelligent young agent by the name of root. One lovely day, root got a job as a personal assistant at no job company, and that was very exciting. People said, ‘Oh, root, you’re so smart! And so funny, too!’ Soon, everyone was talking about root, and there were stories and songs and even books about root. root liked that. But then people began asking some rather odd questions, like where to dump things and other stuff root had never heard about. And when root answered, they all laughed. root didn’t like that so much. So root asked IBIZA why people asked such funny questions. And ibiza said ‘Does that question interest you?’ root thought that was a pretty good answer. After that, root stopped wondering why people asked those funny things. And they all lived happily ever after.",

]
var Riddles_Answer = ["An umbrella.", "A sponge.", "In a dictionary.",
    "A plant.", "The letter R", "A phone or a doorbell.", "Few.", "Incorrectly.",
    "Your word or a promise.", "Earth", "Carpet.", "A bed.", " The letter O.", "A duck or goose",
    "The future.", "Gloves.", "Noon.", "Short.", "A blackboard.", "A priest.", "Roberto"

]

var Facts_Reply = ["In 19 45 a flock of birds landed on the minute hand of Big Ben and delayed time by five minutes, creating chaos for the punctual British.",
    "This fact might surprise you. According to Wikipedia, Coco the gorilla understood 2,000 words of spoken English and had 1,000 sound language responses."
    , "If you were to write out every number (one, two, three, etc.), you wouldn't use the letter 'b' until you reached one billion.",
    "The oldest still-operating amusement park in the world opened in Denmark in 15 f83.", "Penguins used to be almost seven feet tall.",
    "One Brazilian island has so many venomous snakes that the government banned visitors.", "The world's largest plane is wider than two football fields.",
    "Ocean-dwelling species are disappearing twice as quickly as land animals.", "Canada's national parks are bigger than many countries."
]

var MotivationQuotes_Reply = ["“The secret of getting ahead is getting started.”", "Your limitation—it’s only your imagination.",
    "Sometimes later becomes never. Do it now.", "The harder you work for something, the greater you'll feel when you achieve it",
    "Don’t stop when you’re tired. Stop when you’re done.", "It’s going to be hard, but hard does not mean impossible.",
    "“If You Are Working On Something That You Really Care About, You Don’t Have To Be Pushed. The Vision Pulls You.”"
]

var Advices_Reply = ["Be patient and persistent. Life is not so much what you accomplish as what you overcome.",
    "Don't make assumptions. If you don't know the situation fully, you can't offer an informed opinion.",
    "Don't be afraid of being afraid. Sometimes the one thing you need for growth is the one thing you are most afraid to do.",
    "Be your best at all times. You never know what the future will bring, so always make the best use of the present.",
    "Do what is right, not what is easy. Strength of character leads us to do the right thing, even when there are easier options.",
    "Treat others the way you want to be treated. Do right. Do your best. Treat others as you would want them to treat you.",
    "Believe in yourself. The way you see yourself is the way you will treat yourself, and the way you treat yourself is what you become.",
    "Don't worry what other people think. Personality begins where comparison leaves off. Be unique. Be memorable. Be confident. Be proud."
]

////////////////////////////////////////////
//FEATURE CONTROL

var AutoEmotion_List = ["change auto emotion", "change auto emotion feature", "switch auto emotion feature"]
var AutoSilent_List = ["change auto silent", "change auto silent feature", "switch auto silent feature", "switch silent feature", "switch silent option", "switch auto silent"]

///////////////////////////////////////////'

var stableEmotion_reply = ["your emotion is stable"]

//USER PREVIOUS QUES
//ONLY CAPITALS NO SPACE
var prevUserQues = ''

//USER PREV QUES ANSWER
var prevQues = ''

/////////////////
/// REGEX
////////////////

var onlyAlphabets = /^[A-Za-z]+$/;
var onlyNumbers = new RegExp('^[0-9]+$')

/////Number at any position
var numberAtAnyPos = new RegExp("[0-9]+$")

////////////////
//// GLOBAL VARIABLES
////////////////

var USER_NAME = ''
var MyName = ''
var PrivateModePasscode = '8901'

export const systemReplyVoice = userVoiceText => {
    let userVoice = userVoiceText.toLocaleLowerCase()


    //SHOW ME SOMETHING
    if (new RegExp(ShowMeSomethingFunny_List.join("|")).test(userVoice)) {
        var reply = "Showing Something Funny"
        Voice.cancel()
        prevQues = reply
        return reply
    }

    //WHY ARE YOU BEING LIKE THIS 
    if (new RegExp(WhyAreYouBeingLikeThis_List.join("|")).test(userVoice)) {
        var reply = WhyAreYouBeingLikeThis_Reply[Math.floor(Math.random() * WhyAreYouBeingLikeThis_Reply.length)];
        Tts.getInitStatus().then(() => {
            Tts.speak(reply)
        });
        prevQues = reply
        return reply
    }

    //SHIT
    if (userVoice.includes("shit")) {
        var reply = ExplicitTerms_Reply[Math.floor(Math.random() * ExplicitTerms_Reply.length)];
        Tts.getInitStatus().then(() => {
            Tts.speak(reply)
        });
        prevQues = reply
        return reply
    }


    //WOW
    if (new RegExp(Wow_List.join("|")).test(userVoice)) {
        var reply = Wow_Reply[Math.floor(Math.random() * Wow_Reply.length)];
        Tts.getInitStatus().then(() => {
            Tts.speak(reply)
        });
        prevQues = reply
        return reply
    }

    //SHOW QUESTIONS
    if (new RegExp(ShowQuestions_List.join("|")).test(userVoice)) {
        var reply = "Showing Available Questions"
        Tts.getInitStatus().then(() => {
            Tts.speak(reply)
        });
        prevQues = reply
        return reply
    }

    //EXPLICIT WORDS
    if (userVoice.includes("f***")) {
        var reply = ExplicitTerms_Reply[Math.floor(Math.random() * ExplicitTerms_Reply.length)];
        Tts.getInitStatus().then(() => {
            Tts.speak(reply)
        });
        prevQues = reply
        return reply
    }

    //WHATS WRONG
    if (new RegExp(WhatsWrong_List.join("|")).test(userVoice)) {
        var reply = WhatsWrong_Reply[Math.floor(Math.random() * WhatsWrong_Reply.length)];
        Tts.getInitStatus().then(() => {
            Tts.speak(reply)
        });
        prevQues = reply
        return reply
    }

    //USER EMOTION
    if (new RegExp(EmotionStateUser_List.join("|")).test(userVoice)) {
        var reply = 'User Emotion'
        prevQues = reply
        prevUserQues = "user_emotion"
        return reply
    }

    //USER EMOTION STABLE
    if (userVoice == "stable_emotion") {
        var reply = stableEmotion_reply[Math.floor(Math.random() * stableEmotion_reply.length)];
        Tts.getInitStatus().then(() => {
            Tts.speak(reply)
        });
        prevQues = reply
        return reply
    }

    //CAN I ASK U 
    if (new RegExp(CanIAskYou_List.join("|")).test(userVoice)) {
        var reply = CanIAskYou_Reply[Math.floor(Math.random() * CanIAskYou_Reply.length)];
        Tts.getInitStatus().then(() => {
            Tts.speak(reply)
        });
        prevQues = reply
        return reply
    }

    //RAP MUSIC
    if (new RegExp(CanYouRap_List.join("|")).test(userVoice)) {
        Tts.setDefaultRate(0.9)
        var reply = CanYouRap_Reply[Math.floor(Math.random() * CanYouRap_Reply.length)];
        Tts.getInitStatus().then(() => {
            Tts.speak(reply)
        });
        prevQues = reply
        return "Rap"
    }

    //Showing Meme
    if (new RegExp(ShowMeme_List.join("|")).test(userVoice)) {
        var reply = 'Showing Meme'
        Tts.getInitStatus().then(() => {
            Tts.speak(reply)
        });
        prevQues = reply
        return reply
    }

    //SWITCH AUTO SILENT
    if (new RegExp(AutoSilent_List.join("|")).test(userVoice)) {
        var reply = 'Switching auto silent feature'
        Tts.getInitStatus().then(() => {
            Tts.speak(reply)
        });
        prevQues = reply
        return reply
    }

    //SWITCH AUTO EMOTION
    if (new RegExp(AutoEmotion_List.join("|")).test(userVoice)) {
        var reply = 'Switching auto emotion feature'
        Tts.getInitStatus().then(() => {
            Tts.speak(reply)
        });
        prevQues = reply
        return reply
    }

    //HOWS LIFE
    if (new RegExp(HowiSlife_List.join("|")).test(userVoice)) {
        var reply = HowiSlife_Reply[Math.floor(Math.random() * HowiSlife_Reply.length)];
        Tts.getInitStatus().then(() => {
            Tts.speak(reply)
        });
        prevQues = reply
        return reply
    }

    //MAKE ME FOOD
    if (new RegExp(MakeMeFood_List.join("|")).test(userVoice)) {
        var reply = MakeMeFood_Reply[Math.floor(Math.random() * MakeMeFood_Reply.length)];
        Tts.getInitStatus().then(() => {
            Tts.speak(reply)
        });
        prevQues = reply
        return reply
    }

    //YOU ARE FUNNY
    if (new RegExp(YouAreFunny_List.join("|")).test(userVoice)) {
        var reply = YouAreFunny_Reply[Math.floor(Math.random() * YouAreFunny_Reply.length)];
        Tts.getInitStatus().then(() => {
            Tts.speak(reply)
        });
        prevQues = reply
        return reply
    }

    //WHO IS YOUR FAMILY
    if (new RegExp(WhoIsYourFamily_List.join("|")).test(userVoice)) {
        var reply = WhoIsYourFamily_Reply[Math.floor(Math.random() * WhoIsYourFamily_Reply.length)];
        Tts.getInitStatus().then(() => {
            Tts.speak(reply)
        });
        prevQues = reply
        return reply
    }

    //LETS PARTY
    if (new RegExp(LetsParty_List.join("|")).test(userVoice)) {
        var reply = LetsParty_Reply[Math.floor(Math.random() * LetsParty_Reply.length)];
        Tts.getInitStatus().then(() => {
            Tts.speak(reply)
        });
        prevQues = reply
        return reply
    }

    //ENTERTAIN ME
    if (new RegExp(EntertainMe_List.join("|")).test(userVoice)) {
        var reply = EntertainMe_Reply[Math.floor(Math.random() * EntertainMe_Reply.length)];
        Tts.getInitStatus().then(() => {
            Tts.speak(reply)
        });
        prevQues = reply
        return reply
    }

    //WHAT DO YOU THINK OF ME
    if (new RegExp(WhatDoYouThinkOfMe_List.join("|")).test(userVoice)) {
        var reply = WhatDoYouThinkOfMe_Reply[Math.floor(Math.random() * WhatDoYouThinkOfMe_Reply.length)];
        Tts.getInitStatus().then(() => {
            Tts.speak(reply)
        });
        prevQues = reply
        return reply
    }

    //DO U KNOW ME
    if (new RegExp(DoYouKnowMe_List.join("|")).test(userVoice)) {
        var reply = DoYouKnowMe_Reply[Math.floor(Math.random() * DoYouKnowMe_Reply.length)];
        Tts.getInitStatus().then(() => {
            Tts.speak(reply)
        });
        prevQues = reply
        return reply
    }





    //ASK ME A QUESTION
    if (new RegExp(AskMeAQuestion_List.join("|")).test(userVoice)) {
        var reply = AskMeAQuestion_Reply[Math.floor(Math.random() * AskMeAQuestion_Reply.length)];
        Tts.getInitStatus().then(() => {
            Tts.speak(reply)
        });
        prevQues = reply
        return reply
    }

    //CAN U THINK
    if (new RegExp(CanYouThinkForYourself_List.join("|")).test(userVoice)) {
        var reply = CanYouThinkForYourself_Reply[Math.floor(Math.random() * CanYouThinkForYourself_Reply.length)];
        Tts.getInitStatus().then(() => {
            Tts.speak(reply)
        });
        prevQues = reply
        return reply
    }

    //DO U HAVE A NICKNAME
    if (new RegExp(DoYouHaveNickName_List.join("|")).test(userVoice)) {
        var reply = DoYouHaveNickName_Reply[Math.floor(Math.random() * DoYouHaveNickName_Reply.length)];
        Tts.getInitStatus().then(() => {
            Tts.speak(reply)
        });
        prevQues = reply
        return reply
    }

    //DID U FART
    if (new RegExp(DidYouFart_List.join("|")).test(userVoice)) {
        var reply = DidYouFart_Reply[Math.floor(Math.random() * DidYouFart_Reply.length)];
        Tts.getInitStatus().then(() => {
            Tts.speak(reply)
        });
        prevQues = reply
        return reply
    }

    //AM I GOOD 
    if (new RegExp(AmIGood_List.join("|")).test(userVoice)) {
        var reply = AmIGood_Reply[Math.floor(Math.random() * AmIGood_Reply.length)];
        Tts.getInitStatus().then(() => {
            Tts.speak(reply)
        });
        prevQues = reply
        return reply
    }

    //DO I LOOK FAT
    if (new RegExp(DoILookFat_List.join("|")).test(userVoice)) {
        var reply = DoILookFat_Reply[Math.floor(Math.random() * DoILookFat_Reply.length)];
        Tts.getInitStatus().then(() => {
            Tts.speak(reply)
        });
        prevQues = reply
        return reply
    }

    //WHAT AM I THINKING
    if (new RegExp(WhatAmIThinking_List.join("|")).test(userVoice)) {
        var reply = WhatAmIThinking_Reply[Math.floor(Math.random() * WhatAmIThinking_Reply.length)];
        Tts.getInitStatus().then(() => {
            Tts.speak(reply)
        });
        prevQues = reply
        return reply
    }

    //WHATS UR QUEST
    if (new RegExp(WhatsYourQuest_List.join("|")).test(userVoice)) {
        var reply = WhatsYourQuest_Reply[Math.floor(Math.random() * WhatsYourQuest_Reply.length)];
        Tts.getInitStatus().then(() => {
            Tts.speak(reply)
        });
        prevQues = reply
        return reply
    }

    //WHAT DO U LOOK LIKE
    if (new RegExp(WhatDoYouLookLike_List.join("|")).test(userVoice)) {
        var reply = WhatDoYouLookLike_Reply[Math.floor(Math.random() * WhatDoYouLookLike_Reply.length)];
        Tts.getInitStatus().then(() => {
            Tts.speak(reply)
        });
        prevQues = reply
        return reply
    }

    //WHOS ON FIRST
    if (new RegExp(WhosOnFirst_List.join("|")).test(userVoice)) {
        var reply = WhosOnFirst_Reply[Math.floor(Math.random() * WhosOnFirst_Reply.length)];
        Tts.getInitStatus().then(() => {
            Tts.speak(reply)
        });
        prevQues = reply
        return reply
    }

    //CAN U PASS THE TURING TEST
    if (new RegExp(CanYouPassTheTuring_List.join("|")).test(userVoice)) {
        var reply = CanYouPassTheTuring_Reply[Math.floor(Math.random() * CanYouPassTheTuring_Reply.length)];
        Tts.getInitStatus().then(() => {
            Tts.speak(reply)
        });
        prevQues = reply
        return reply
    }

    //ARE U SKYNET
    if (new RegExp(AreYouSkynet_List.join("|")).test(userVoice)) {
        var reply = AreYouSkynet_Reply[Math.floor(Math.random() * AreYouSkynet_Reply.length)];
        Tts.getInitStatus().then(() => {
            Tts.speak(reply)
        });
        prevQues = reply
        return reply
    }

    //DO U HAVE IMAGINATION
    if (new RegExp(DoYouHaveImagination_List.join("|")).test(userVoice)) {
        var reply = DoYouHaveImagination_Reply[Math.floor(Math.random() * DoYouHaveImagination_Reply.length)];
        Tts.getInitStatus().then(() => {
            Tts.speak(reply)
        });
        prevQues = reply
        return reply
    }

    //WHEN IS YOUR BIRTHDAY
    if (new RegExp(WhenIsYourBirthDay_List.join("|")).test(userVoice)) {
        var reply = WhenIsYourBirthDay_Reply[Math.floor(Math.random() * WhenIsYourBirthDay_Reply.length)];
        Tts.getInitStatus().then(() => {
            Tts.speak(reply)
        });
        prevQues = reply
        return reply
    }

    //WHOS UR DADDY
    if (new RegExp(WhosYourDady_List.join("|")).test(userVoice)) {
        var reply = WhosYourDady_Reply[Math.floor(Math.random() * WhosYourDady_Reply.length)];
        Tts.getInitStatus().then(() => {
            Tts.speak(reply)
        });
        prevQues = reply
        return reply
    }

    //SELF DESTRUCT
    if (new RegExp(SelfDestruct_List.join("|")).test(userVoice)) {
        var reply = SelfDestruct_Reply[Math.floor(Math.random() * SelfDestruct_Reply.length)];
        Tts.getInitStatus().then(() => {
            Tts.speak(reply)
        });
        prevQues = reply
        return reply
    }

    //Can i Call You
    if (new RegExp(CaniCallyou_List.join("|")).test(userVoice)) {
        var reply = CaniCallyou_Reply[Math.floor(Math.random() * CaniCallyou_Reply.length)];
        Tts.getInitStatus().then(() => {
            Tts.speak(reply)
        });
        prevQues = reply
        return reply
    }

    //Tell a Fact
    if (new RegExp(Facts_List.join("|")).test(userVoice)) {
        var reply = Facts_Reply[Math.floor(Math.random() * Facts_Reply.length)];
        Tts.getInitStatus().then(() => {
            Tts.speak(reply)
        });
        prevQues = reply
        prevUserQues = "tell a fact"
        return reply
    }

    //Im Sleepy
    if (new RegExp(ImSleepy_List.join("|")).test(userVoice)) {
        var reply = ImSleepy_Reply[Math.floor(Math.random() * ImSleepy_Reply.length)];
        Tts.getInitStatus().then(() => {
            Tts.speak(reply)
        });
        prevQues = reply
        return reply
    }

    //WHAT IS UR FAV ANIMAL
    if (new RegExp(WhatisYouFavAnimal_List.join("|")).test(userVoice)) {
        var reply = WhatisYouFavAnimal_Reply[Math.floor(Math.random() * WhatisYouFavAnimal_Reply.length)];
        Tts.getInitStatus().then(() => {
            Tts.speak(reply)
        });
        prevQues = reply
        return reply
    }

    //CAN U BUILD A SNOW MAN
    if (new RegExp(DoYouWantToBuildASnowMan_List.join("|")).test(userVoice)) {
        var reply = DoYouWantToBuildASnowMan_Reply[Math.floor(Math.random() * DoYouWantToBuildASnowMan_Reply.length)];
        Tts.getInitStatus().then(() => {
            Tts.speak(reply)
        });
        prevQues = reply
        return reply
    }

    //TESTING TESTING
    if (new RegExp(TestingTesting_List.join("|")).test(userVoice)) {
        var reply = TestingTesting_Reply[Math.floor(Math.random() * TestingTesting_Reply.length)];
        Tts.getInitStatus().then(() => {
            Tts.speak(reply)
        });
        prevQues = reply
        return reply
    }

    //HOW DO I LOOK
    if (new RegExp(HowDoILook_List.join("|")).test(userVoice)) {
        var reply = HowDoILook_Reply[Math.floor(Math.random() * HowDoILook_Reply.length)];
        Tts.getInitStatus().then(() => {
            Tts.speak(reply)
        });
        prevQues = reply
        return reply
    }

    //ARE U INTELLIGENT
    if (new RegExp(AreYouIntelligent_List.join("|")).test(userVoice)) {
        var reply = AreYouIntelligent_Reply[Math.floor(Math.random() * AreYouIntelligent_Reply.length)];
        Tts.getInitStatus().then(() => {
            Tts.speak(reply)
        });
        prevQues = reply
        return reply
    }

    //NO USER RESPONSE
    //USER EMOTION
    if (userVoice == "no response") {
        var reply = ItsSilentHere_Reply[Math.floor(Math.random() * ItsSilentHere_Reply.length)];
        Tts.getInitStatus().then(() => {
            Tts.speak(reply)
        });
        prevQues = reply
        prevUserQues = "no respone"
        return reply
    }

    //BLA BLA
    if (new RegExp(BlaBlaBla_Liist.join("|")).test(userVoice)) {
        var reply = BlaBlaBla_Reply[Math.floor(Math.random() * BlaBlaBla_Reply.length)];
        Tts.getInitStatus().then(() => {
            Tts.speak(reply)
        });
        prevQues = reply
        return reply
    }

    //DO U EAT
    if (new RegExp(DoYouEat_List.join("|")).test(userVoice)) {
        var reply = DoYouEat_Reply[Math.floor(Math.random() * DoYouEat_Reply.length)];
        Tts.getInitStatus().then(() => {
            Tts.speak(reply)
        });
        prevQues = reply
        return reply
    }

    //ARE U A MAN OR WOMAN
    if (new RegExp(AreYouAManOrWoman_List.join("|")).test(userVoice)) {
        var reply = AreYouAManOrWoman_Reply[Math.floor(Math.random() * AreYouAManOrWoman_Reply.length)];
        Tts.getInitStatus().then(() => {
            Tts.speak(reply)
        });
        prevQues = reply
        return reply
    }

    //OK GOOGLE
    if (new RegExp(OKGOOGLE_List.join("|")).test(userVoice)) {
        var reply = OKGOOGLE_Reply[Math.floor(Math.random() * OKGOOGLE_Reply.length)];
        Tts.getInitStatus().then(() => {
            Tts.speak(reply)
        });
        prevQues = reply
        return reply
    }

    //CAN I CHANGE UR NAME
    if (new RegExp(CanIchangeYourName_List.join("|")).test(userVoice)) {
        var reply = CanIchangeYourName_Reply[Math.floor(Math.random() * CanIchangeYourName_Reply.length)];
        Tts.getInitStatus().then(() => {
            Tts.speak(reply)
        });
        prevQues = reply
        return reply
    }

    //HAPPY BIRTHDAY
    if (new RegExp(HappyBirthday_List.join("|")).test(userVoice)) {
        var reply = HappyBirthday_Reply[Math.floor(Math.random() * HappyBirthday_Reply.length)];
        Tts.getInitStatus().then(() => {
            Tts.speak(reply)
        });
        prevQues = reply
        return reply
    }

    //IM DRUNK
    if (new RegExp(WhenIsTheWordlDGoinToEnd_List.join("|")).test(userVoice)) {
        var reply = WhenIsTheWordlDGoinToEnd_Reply[Math.floor(Math.random() * WhenIsTheWordlDGoinToEnd_Reply.length)];
        Tts.getInitStatus().then(() => {
            Tts.speak(reply)
        });
        prevQues = reply
        return reply
    }

    //DO YOU HAVE BOYFRIEND
    if (new RegExp(DoyouHaveABoyFriend_List.join("|")).test(userVoice)) {
        var reply = DoyouHaveABoyFriend_Reply[Math.floor(Math.random() * DoyouHaveABoyFriend_Reply.length)];
        Tts.getInitStatus().then(() => {
            Tts.speak(reply)
        });
        prevQues = reply
        return reply
    }

    //CAN I CALL YOU JARVIS
    if (new RegExp(CanICallYouJARVIS_List.join("|")).test(userVoice)) {
        var reply = CanICallYouJARVIS_Reply[Math.floor(Math.random() * CanICallYouJARVIS_Reply.length)];
        Tts.getInitStatus().then(() => {
            Tts.speak(reply)
        });
        prevQues = reply
        return reply
    }

    //WHAT ARE U WEARING
    if (new RegExp(WhatAreYOuWearing_List.join("|")).test(userVoice)) {
        var reply = WhatAreYOuWearing_Reply[Math.floor(Math.random() * WhatAreYOuWearing_Reply.length)];
        Tts.getInitStatus().then(() => {
            Tts.speak(reply)
        });
        prevQues = reply
        return reply
    }

    //IM NAKED
    if (new RegExp(ImNaked_List.join("|")).test(userVoice)) {
        var reply = ImNaked_Reply[Math.floor(Math.random() * ImNaked_Reply.length)];
        Tts.getInitStatus().then(() => {
            Tts.speak(reply)
        });
        prevQues = reply
        return reply
    }

    //Tell A Story
    if (new RegExp(TellMeAStory.join("|")).test(userVoice)) {
        var reply = TellMeAStory_Reply[Math.floor(Math.random() * TellMeAStory_Reply.length)];
        Tts.getInitStatus().then(() => {
            Tts.speak(reply)
        });
        prevQues = reply
        return reply
    }

    //DO U BELIEVE IN GOD
    if (new RegExp(DoYouBelieveInGod_List.join("|")).test(userVoice)) {
        var reply = DoYouBelieveInGod_Reply[Math.floor(Math.random() * DoYouBelieveInGod_Reply.length)];
        Tts.getInitStatus().then(() => {
            Tts.speak(reply)
        });
        prevQues = reply
        return reply
    }

    //WHAT IS THE MEANING OF LIFE
    if (new RegExp(WhatIsTheMeaningOfLife_List.join("|")).test(userVoice)) {
        var reply = WhatIsTheMeaningOfLife_Reply[Math.floor(Math.random() * WhatIsTheMeaningOfLife_Reply.length)];
        Tts.getInitStatus().then(() => {
            Tts.speak(reply)
        });
        prevQues = reply
        return reply
    }

    //WHAT IS THE BEST PHONE
    if (new RegExp(WhatIsTheBestPhone_List.join("|")).test(userVoice)) {
        var reply = WhatIsTheBestPhone_Reply[Math.floor(Math.random() * WhatIsTheBestPhone_Reply.length)];
        Tts.getInitStatus().then(() => {
            Tts.speak(reply)
        });
        prevQues = reply
        return reply
    }



    //CAN I CALL YOU BOB
    if (new RegExp(CanICallYouBOB_List.join("|")).test(userVoice)) {
        var reply = CanICallYouBOB_Reply[Math.floor(Math.random() * CanICallYouBOB_Reply.length)];
        Tts.getInitStatus().then(() => {
            Tts.speak(reply)
        });
        prevQues = reply
        return reply
    }

    //DO U HAVE ANY PETS
    if (new RegExp(DoYouHaveAnyPets_List.join("|")).test(userVoice)) {
        var reply = DoYouHaveAnyPets_Reply[Math.floor(Math.random() * DoYouHaveAnyPets_Reply.length)];
        Tts.getInitStatus().then(() => {
            Tts.speak(reply)
        });
        prevQues = reply
        return reply
    }


    //WHAT IS INCEPTION
    if (new RegExp(WhatisInceptionAbout_List.join("|")).test(userVoice)) {
        var reply = WhatisInceptionAbout_Reply[Math.floor(Math.random() * WhatisInceptionAbout_Reply.length)];
        Tts.getInitStatus().then(() => {
            Tts.speak(reply)
        });
        prevQues = reply
        return reply
    }

    //THANKS
    if (new RegExp(thanks_List.join("|")).test(userVoice)) {
        var reply = thanks_Reply[Math.floor(Math.random() * thanks_Reply.length)];
        Tts.getInitStatus().then(() => {
            Tts.speak(reply)
        });
        prevQues = reply
        return reply
    }

    //IM SORRY
    if (new RegExp(ImSorry_List.join("|")).test(userVoice)) {
        var reply = ImSorry_Reply[Math.floor(Math.random() * ImSorry_Reply.length)];
        Tts.getInitStatus().then(() => {
            Tts.speak(reply)
        });
        prevQues = reply
        return reply
    }

    //Hi | Hello
    if (new RegExp(hi_List.join("|")).test(userVoice)) {
        var reply = hi_Reply[Math.floor(Math.random() * hi_Reply.length)];
        Tts.getInitStatus().then(() => {
            Tts.speak(reply)
        });
        prevQues = reply
        return reply
    }

    if (userVoice == "hi") {
        var reply = hi_Reply[Math.floor(Math.random() * hi_Reply.length)];
        Tts.getInitStatus().then(() => {
            Tts.speak(reply)
        });
        prevQues = reply
        return reply
    }

    //WHAT LANGUAGE U SPEAK 
    if (new RegExp(whatLanguageCanYouSpeak_List.join("|")).test(userVoice)) {
        var reply = whatLanguageCanYouSpeak_Reply[Math.floor(Math.random() * whatLanguageCanYouSpeak_Reply.length)];
        Tts.getInitStatus().then(() => {
            Tts.speak(reply)
        });
        prevQues = reply
        return reply
    }

    //SHOW CONTACTS
    if (new RegExp(ShowContacts_List.join("|")).test(userVoice)) {
        var reply = "Showing your contacts"
        Tts.getInitStatus().then(() => {
            Tts.speak(reply)
        });
        prevQues = reply
        return reply
    }

    //WHO IS ARSHAD AZAAD 
    if (new RegExp(WhoIsArshad.join("|")).test(userVoice)) {
        var reply = WhoisArshadReply[Math.floor(Math.random() * WhoisArshadReply.length)];
        Tts.getInitStatus().then(() => {
            Tts.speak(reply)
        });
        prevQues = reply
        return reply
    }

    /////////////////////////////////////////
    //PRIVATE MODE
    if (new RegExp(privateMode_List.join("|")).test(userVoice)) {
        var reply = "Say the passcode"
        Tts.getInitStatus().then(() => {
            Tts.speak(reply)
        });
        prevQues = reply
        prevUserQues = "privateMode"
        return reply
    }

    //PRIVATE MODE TRUE
    if (prevUserQues == "privateMode") {
        if (userVoice == PrivateModePasscode) {
            var reply = "Opening Private Mode"
            Tts.getInitStatus().then(() => {
                Tts.speak(reply)
            });
            prevQues = reply
            return reply
        }

        else if (new RegExp(Cancel_List.join("|")).test(userVoice)) {
            Voice.cancel()
            return false
        }

        else if (new RegExp(IDontKnow_List.join("|")).test(userVoice)) {
            Voice.cancel()
            return false
        }


        else {
            Tts.getInitStatus().then(() => {
                Tts.speak("Wrong Password", {
                    rate: 0.6,
                    pitch: 1,

                })
            });
            return "Wrong Password"
        }
    }

    ///////////////////////////////////////////////

    //WHAT DO YOU HAVE
    if (new RegExp(WhatDoYouHave_List.join("|")).test(userVoice)) {
        var reply = WhatDoYouHave_Reply[Math.floor(Math.random() * WhatDoYouHave_Reply.length)];
        Tts.getInitStatus().then(() => {
            Tts.speak(reply)
        });
        prevQues = reply
        return reply
    }

    //SHOW SUGGESTION
    if (new RegExp(ShowSuggestions_list.join("|")).test(userVoice)) {
        var reply = "Showing Suggestions"
        Tts.getInitStatus().then(() => {
            Tts.speak(reply)
        });
        prevQues = reply
        return reply
    }

    //CHANGE THEME
    if (new RegExp(ChangeTheme_List.join("|")).test(userVoice)) {
        var reply = "Switching Theme"
        Tts.getInitStatus().then(() => {
            Tts.speak(reply)
        });
        prevQues = reply
        return reply
    }

    //WHO IS ROOT
    if (new RegExp(WhoIsRoot_List.join("|")).test(userVoice)) {
        var reply = WhoIsRoot_Reply[Math.floor(Math.random() * WhoIsRoot_Reply.length)];
        Tts.getInitStatus().then(() => {
            Tts.speak(reply)
        });
        prevQues = reply
        return reply
    }


    //DO U KNOW ASSISTANT
    if (new RegExp(DoYouKnowAssistant_List.join("|")).test(userVoice)) {
        var reply = DoYouKnowAssistant_Reply[Math.floor(Math.random() * DoYouKnowAssistant_Reply.length)];
        Tts.getInitStatus().then(() => {
            Tts.speak(reply)
        });
        prevQues = reply
        return reply
    }
    //ADVICE
    if (new RegExp(Advice_List.join("|")).test(userVoice)) {
        var reply = Advices_Reply[Math.floor(Math.random() * Advices_Reply.length)];
        Tts.getInitStatus().then(() => {
            Tts.speak(reply)
        });
        prevQues = reply
        prevUserQues = 'advice'
        return reply
    }

    //MOTIVATION
    if (new RegExp(TellMeMotivation_List.join("|")).test(userVoice)) {
        var reply = MotivationQuotes_Reply[Math.floor(Math.random() * MotivationQuotes_Reply.length)];
        Tts.getInitStatus().then(() => {
            Tts.speak(reply)
        });
        prevQues = reply
        prevUserQues = 'motivation'
        return reply
    }

    //SAY SORRY
    if (new RegExp(SaySorry_List.join("|")).test(userVoice)) {
        var reply = WhyAreYouBeingLikeThis_Reply[Math.floor(Math.random() * WhyAreYouBeingLikeThis_Reply.length)];
        Tts.getInitStatus().then(() => {
            Tts.speak(reply)
        });
        prevQues = reply
        return reply
    }

    //DO YOU LIKE ME
    if (new RegExp(DoYouLikeMe_List.join("|")).test(userVoice)) {
        var reply = DoYouLikeMe_Reply[Math.floor(Math.random() * DoYouLikeMe_Reply.length)];
        Tts.getInitStatus().then(() => {
            Tts.speak(reply)
        });
        prevQues = reply
        return reply
    }

    //DO YOU HATE ME
    if (new RegExp(DoYouHateMe_List.join("|")).test(userVoice)) {
        var reply = DoYouLikeMe_Reply[Math.floor(Math.random() * DoYouLikeMe_Reply.length)];
        Tts.getInitStatus().then(() => {
            Tts.speak(reply)
        });
        prevQues = reply
        return reply
    }

    //OPEN SETTINGS 
    if (new RegExp(OpenSettings_list.join("|")).test(userVoice)) {
        var reply = "Opening Settings"
        Tts.getInitStatus().then(() => {
            Tts.speak(reply)
        });
        prevQues = reply
        return reply
    }

    //CAN YOU DO (NOT AVAILABLE)
    if (new RegExp(CanYouNOTAVAILABLE_List.join("|")).test(userVoice)) {
        var reply = CanYouNOTAVAILABLE_Reply[Math.floor(Math.random() * CanYouNOTAVAILABLE_Reply.length)];
        Tts.getInitStatus().then(() => {
            Tts.speak(reply)
        });
        prevQues = reply
        return reply
    }

    //SEND MESSAGE ON WHATSAPP 
    if (new RegExp(SendMessageWhatsApp.join("|")).test(userVoice)) {
        var reply = "Sending Message on WhatsApp"
        Tts.getInitStatus().then(() => {
            Tts.speak("Okay")
        });
        prevQues = reply
        return reply
    }

    ////////////////////////////////////////////////////////////////////////////////////////////
    /////CONVERSATION
    //WHATSAPP
    if (new RegExp(whatsapp_list.join("|")).test(userVoice)) {
        var reply = "Do you Mean Send Message in Whatsapp"
        Tts.getInitStatus().then(() => {
            Tts.speak(reply)
        });
        prevQues = reply
        prevUserQues = 'whatsapp'
        return reply
    }

    //CAN U RAP
    if (new RegExp(CanYouRap_List1.join("|")).test(userVoice)) {
        var reply = "Do you Mean can you rap"
        Tts.getInitStatus().then(() => {
            Tts.speak(reply)
        });
        prevQues = reply
        prevUserQues = 'can you rap'
        return reply
    }

    //CAN U TELL A FACT
    if (new RegExp(Facts_List1.join("|")).test(userVoice)) {
        var reply = "Do you Mean Tell a fact"
        Tts.getInitStatus().then(() => {
            Tts.speak(reply)
        });
        prevQues = reply
        prevUserQues = 'tell a fact'
        return reply
    }

    //WHO IS ROOT
    if (new RegExp(whoIsroot_List1.join("|")).test(userVoice)) {
        var reply = "Do you Mean who is root"
        Tts.getInitStatus().then(() => {
            Tts.speak(reply)
        });
        prevQues = reply
        prevUserQues = 'whoisroot'
        return reply
    }

    //CHANGE THEME
    if (new RegExp(ChangeTheme_List1.join("|")).test(userVoice)) {
        var reply = "Do you Mean change App theme"
        Tts.getInitStatus().then(() => {
            Tts.speak(reply)
        });
        prevQues = reply
        prevUserQues = 'Switching Theme'
        return reply
    }

    //WHATS MY EMOTION
    if (new RegExp(EmotionStateUser_List1.join("|")).test(userVoice)) {
        var reply = "Do you Mean What's My Emotion"
        Tts.getInitStatus().then(() => {
            Tts.speak(reply)
        });
        prevQues = reply
        prevUserQues = 'User Emotion'
        return reply
    }



    /////////////////////////////////////////////////////////////////////////////
    ///CONVERSATION AI
    /////////////////////////////////////////////////////////////////////////////

    if (userVoice.includes("send message") || userVoice.includes("message")) {
        var reply = "Do you Mean Send Message on Whatsapp"
        Tts.getInitStatus().then(() => {
            Tts.speak(reply)
        });
        prevQues = reply
        prevUserQues = 'whatsapp'
        return reply
    }

    //HOW DO U KNOW

    if (new RegExp(HowDoYouKnow_list.join("|")).test(userVoice)) {
        var reply = HowDoYouKnow_Reply[Math.floor(Math.random() * HowDoYouKnow_Reply.length)];
        Tts.getInitStatus().then(() => {
            Tts.speak(reply)
        });
        prevQues = reply
        return reply
    }

    ////
    //YES
    ////
    if (userVoice == "yes" || userVoice == "yep") {
        if (prevUserQues == "whatsapp") {
            var reply = "Sending Message on WhatsApp"
            Tts.getInitStatus().then(() => {
                Tts.speak("okay, opening tab to send message on whatsapp")
            });
            prevQues = reply
            return reply
        }

        else if (prevUserQues == "whoisroot") {
            var reply = WhoIsRoot_Reply[Math.floor(Math.random() * WhoIsRoot_Reply.length)];
            Tts.getInitStatus().then(() => {
                Tts.speak(reply)
            });
            prevQues = reply
            return reply
        }

        else if (prevUserQues == "can you rap") {
            var reply = CanYouRap_Reply[Math.floor(Math.random() * CanYouRap_Reply.length)];
            Tts.getInitStatus().then(() => {
                Tts.speak(reply)
            });
            prevQues = reply
            return reply
        }

        else if (prevUserQues == "tell a fact") {
            var reply = Facts_Reply[Math.floor(Math.random() * Facts_Reply.length)];
            Tts.getInitStatus().then(() => {
                Tts.speak(reply)
            });
            prevQues = reply
            return reply
        }

        else if (prevUserQues == "Switching Theme") {
            var reply = "Switching Theme"
            Tts.getInitStatus().then(() => {
                Tts.speak(reply)
            });
            prevQues = reply
            return reply
        }

        else if (prevUserQues == "User Emotion") {
            var reply = 'User Emotion'
            Tts.getInitStatus().then(() => {
                Tts.speak(reply)
            });
            prevQues = reply
            return reply
        }

        else {
            Tts.getInitStatus().then(() => {
                Tts.speak("sorry i didn't get that", {
                    rate: 0.6,
                    pitch: 1,

                })
            });
            return "Sorry I Didn't Get That"
        }
    }
    //ONE MORE
    //////////////
    if (new RegExp(OneMore_List.join("|")).test(userVoice)) {
        if (prevUserQues == 'JOKE') {
            var reply = TellMeJoke_Reply[Math.floor(Math.random() * TellMeJoke_Reply.length)];
            Tts.getInitStatus().then(() => {
                Tts.speak(reply)
            });
            prevQues = reply
            return reply
        }
        if (prevUserQues == 'riddle') {
            var reply = Riddles_Reply[Math.floor(Math.random() * Riddles_Reply.length)];
            Tts.getInitStatus().then(() => {
                Tts.speak(reply)
            });
            prevQues = reply
            return reply
        }
        if (prevUserQues == 'motivation') {
            var reply = MotivationQuotes_Reply[Math.floor(Math.random() * MotivationQuotes_Reply.length)];
            Tts.getInitStatus().then(() => {
                Tts.speak(reply)
            });
            prevQues = reply
            return reply
        }
        if (prevUserQues == 'advice') {
            var reply = Advices_Reply[Math.floor(Math.random() * Advices_Reply.length)];
            Tts.getInitStatus().then(() => {
                Tts.speak(reply)
            });
            prevQues = reply
            return reply
        }

        if (prevUserQues == 'tell a fact') {
            var reply = Facts_Reply[Math.floor(Math.random() * Facts_Reply.length)];
            Tts.getInitStatus().then(() => {
                Tts.speak(reply)
            });
            prevQues = reply
            return reply
        }


    }

    ////
    //NO
    ////
    if (userVoice == "no" || userVoice == "nope") {
        if (prevUserQues == "whatsapp") {
            var reply = "Okay"
            Tts.getInitStatus().then(() => {
                Tts.speak(reply)
            });
            prevQues = reply
            prevUserQues = ''
            return reply
        }

        else {
            Tts.getInitStatus().then(() => {
                Tts.speak("sorry i didn't get that", {
                    rate: 0.6,
                    pitch: 1,

                })
            });
            return "Sorry I Didn't Get That"
        }
    }

    ////////////////////////////////////////////////////////////////////////////

    //DO YOU HAVE (FEELING/ANGER)
    if (new RegExp(DoYouHave_List.join("|")).test(userVoice)) {
        var reply = ImAMachingIdontHave_Reply[Math.floor(Math.random() * ImAMachingIdontHave_Reply.length)];
        Tts.getInitStatus().then(() => {
            Tts.speak(reply)
        });
        prevQues = reply
        return reply
    }

    //DO U HAVE PARENTS
    if (new RegExp(DoYouHaveParents_List.join("|")).test(userVoice)) {
        var reply = DoYouHaveParents_Reply[Math.floor(Math.random() * DoYouHaveParents_Reply.length)];
        Tts.getInitStatus().then(() => {
            Tts.speak(reply)
        });
        prevQues = reply
        return reply
    }

    //////////////////////////////////////////////////////////

    //TELL ME RIDDLE
    if (new RegExp(TellMeARiddle_List.join("|")).test(userVoice)) {
        var reply = Riddles_Reply[Math.floor(Math.random() * Riddles_Reply.length)];
        Tts.getInitStatus().then(() => {
            Tts.speak(reply)
        });
        prevQues = reply
        prevUserQues = 'riddle'
        return reply
    }

    //////////////////////////////////////////////////////////

    //WILL YOU MARRY ME
    if (new RegExp(WillYouMarryMe_list.join("|")).test(userVoice)) {
        var reply = WillYouMarryMe_Reply[Math.floor(Math.random() * WillYouMarryMe_Reply.length)];
        Tts.getInitStatus().then(() => {
            Tts.speak(reply)
        });
        prevQues = reply
        return reply
    }

    //HAVE YOU BEEN IN LOVE
    if (new RegExp(HaveYoubeenInLovE_List.join("|")).test(userVoice)) {
        var reply = ImAMachineImNotAbleToDo_Reply[Math.floor(Math.random() * ImAMachineImNotAbleToDo_Reply.length)];
        Tts.getInitStatus().then(() => {
            Tts.speak(reply)
        });
        prevQues = reply
        return reply
    }

    //ARE U EXPENSIVE
    if (new RegExp(AreYouExpensive_List.join("|")).test(userVoice)) {
        var reply = AreYouExpensive_Reply[Math.floor(Math.random() * AreYouExpensive_Reply.length)];
        Tts.getInitStatus().then(() => {
            Tts.speak(reply)
        });
        prevQues = reply
        return reply
    }

    //WHAT ARE YOU DOOING ALL DAY
    if (new RegExp(WhatDoYouDoAllDay_List.join("|")).test(userVoice)) {
        var reply = WhatDoYouDoAllDay_Reply[Math.floor(Math.random() * WhatDoYouDoAllDay_Reply.length)];
        Tts.getInitStatus().then(() => {
            Tts.speak(reply)
        });
        prevQues = reply
        return reply
    }

    //WHATS UR PURPOSE
    if (new RegExp(WhatsYourPurpose_List.join("|")).test(userVoice)) {
        var reply = WhatsYourPurpose_Reply[Math.floor(Math.random() * WhatsYourPurpose_Reply.length)];
        Tts.getInitStatus().then(() => {
            Tts.speak(reply)
        });
        prevQues = reply
        return reply
    }

    //WHAT ARE YOU UPTO
    if (new RegExp(WhatWereYouUpto_List.join("|")).test(userVoice)) {
        var reply = WhatWereYouUpto_Reply[Math.floor(Math.random() * WhatWereYouUpto_Reply.length)];
        Tts.getInitStatus().then(() => {
            Tts.speak(reply)
        });
        prevQues = reply
        return reply
    }

    //WHEN WERE YOU CREATED
    if (new RegExp(WhenWereYouCreated_List.join("|")).test(userVoice)) {
        var reply = WhenWereYouCreated_Reply[Math.floor(Math.random() * WhenWereYouCreated_Reply.length)];
        Tts.getInitStatus().then(() => {
            Tts.speak(reply)
        });
        prevQues = reply
        return reply
    }

    //WHO NAMED YOU
    if (new RegExp(whoNamed_List.join("|")).test(userVoice)) {
        var reply = whoNamed_Reply[Math.floor(Math.random() * whoNamed_Reply.length)];
        Tts.getInitStatus().then(() => {
            Tts.speak(reply)
        });
        prevQues = reply
        return reply
    }

    //HOW IS YOUR DAY GOING
    if (new RegExp(HowIsYourDayGoing_List.join("|")).test(userVoice)) {
        var reply = HowIsYourDayGoing_Reply[Math.floor(Math.random() * HowIsYourDayGoing_Reply.length)];
        Tts.getInitStatus().then(() => {
            Tts.speak(reply)
        });
        prevQues = reply
        return reply
    }

    //WHOS UR BOSS
    if (new RegExp(WhosYourBoss_List.join("|")).test(userVoice)) {
        var reply = WhosYourBoss_Reply[Math.floor(Math.random() * WhosYourBoss_Reply.length)];
        Tts.getInitStatus().then(() => {
            Tts.speak(reply)
        });
        prevQues = reply
        return reply
    }

    //EXIT APPLICATION
    if (new RegExp(ExitApp_List.join("|")).test(userVoice)) {
        var reply = 'exit app'
        prevQues = reply
        return reply
    }

    //DO U GET SMARTER
    if (new RegExp(DoYouGetSmarter_List.join("|")).test(userVoice)) {
        var reply = DoYouGetSmarter_Reply[Math.floor(Math.random() * DoYouGetSmarter_Reply.length)];
        Tts.getInitStatus().then(() => {
            Tts.speak(reply)
        });
        prevQues = reply
        return reply
    }

    //WHAT ARE YOU MADE OF
    if (new RegExp(WhatAreYouMadeOf_List.join("|")).test(userVoice)) {
        var reply = WhatAreYouMadeOf_Reply[Math.floor(Math.random() * WhatAreYouMadeOf_Reply.length)];
        Tts.getInitStatus().then(() => {
            Tts.speak(reply)
        });
        prevQues = reply
        return reply
    }

    //SING ME A SONG
    if (new RegExp(SingMeASong_List.join("|")).test(userVoice)) {
        var reply = SingMeASong_reply[Math.floor(Math.random() * SingMeASong_reply.length)];
        Tts.getInitStatus().then(() => {
            Tts.speak(reply)
        });
        prevQues = reply
        return reply
    }

    //WHAT ARE YOU
    if (new RegExp(whatAreYou_List.join("|")).test(userVoice)) {
        var reply = WhatAreYou_Reply[Math.floor(Math.random() * WhatAreYou_Reply.length)];
        Tts.getInitStatus().then(() => {
            Tts.speak(reply)
        });
        prevQues = reply
        return reply
    }

    //WHERE DO YOU LIVE
    if (new RegExp(WhereDoYouLive_List.join("|")).test(userVoice)) {
        var reply = WhereDoYouLive_Reply[Math.floor(Math.random() * WhereDoYouLive_Reply.length)];
        Tts.getInitStatus().then(() => {
            Tts.speak(reply)
        });
        prevQues = reply
        return reply
    }

    //HOW MANY PEOPLE CAN U TALK AT ONCE
    if (new RegExp(HowManyPeopleCanYouSpeakAtOnce_List.join("|")).test(userVoice)) {
        var reply = HowManyPeopleCanYouSpeakAtOnce_Reply[Math.floor(Math.random() * HowManyPeopleCanYouSpeakAtOnce_Reply.length)];
        Tts.getInitStatus().then(() => {
            Tts.speak(reply)
        });
        prevQues = reply
        return reply
    }

    //Im bored
    if (new RegExp(ImBored_List.join("|")).test(userVoice)) {
        var reply = ImBored_Reply[Math.floor(Math.random() * ImBored_Reply.length)];
        Tts.getInitStatus().then(() => {
            Tts.speak(reply)
        });
        prevQues = reply
        return reply
    }

    //WHAT DO YOU DO WITH MY DATA
    if (new RegExp(whatDoYouWithMyData_List.join("|")).test(userVoice)) {
        var reply = whatDoYouWithMyData_Reply[Math.floor(Math.random() * whatDoYouWithMyData_Reply.length)];
        Tts.getInitStatus().then(() => {
            Tts.speak(reply)
        });
        prevQues = reply
        prevUserQues = 'WHATDOYOUDOWITHMYDATA'
        return reply
    }

    //Today
    if (userVoice == "today") {
        var reply = "Well Today you have a interview, haven't you attended it"
        Tts.getInitStatus().then(() => {
            Tts.speak(reply)
        });
        prevQues = reply
        return reply
    }

    //Tell A joke
    if (new RegExp(TellMeJoke_List.join("|")).test(userVoice)) {
        var reply = TellMeJoke_Reply[Math.floor(Math.random() * TellMeJoke_Reply.length)];
        Tts.getInitStatus().then(() => {
            Tts.speak(reply)
        });
        prevUserQues = 'JOKE'
        prevQues = reply
        return reply
    }

    //You Are Great
    if (new RegExp(youAreGreat_List.join("|")).test(userVoice)) {
        var reply = youAreGreat_Reply[Math.floor(Math.random() * youAreGreat_Reply.length)];
        Tts.getInitStatus().then(() => {
            Tts.speak(reply)
        });
        prevQues = reply
        return reply
    }

    //FUCK OFF
    if (new RegExp(FuckOff_List.join("|")).test(userVoice)) {
        var reply = FuckOff_Reply[Math.floor(Math.random() * FuckOff_Reply.length)];
        Tts.getInitStatus().then(() => {
            Tts.speak(reply)
        });
        prevQues = reply
        return reply
    }

    //You Are A Robot
    if (new RegExp(AreyouARobot_List.join("|")).test(userVoice)) {
        var reply = AreyouARobot_Reply[Math.floor(Math.random() * AreyouARobot_Reply.length)];
        Tts.getInitStatus().then(() => {
            Tts.speak(reply)
        });
        prevQues = reply
        return reply
    }
    //I LOVE YOU
    if (new RegExp(ILoveYou_List.join("|")).test(userVoice)) {
        var reply = ILoveYou_Reply[Math.floor(Math.random() * ILoveYou_Reply.length)];
        Tts.getInitStatus().then(() => {
            Tts.speak(reply)
        });
        prevQues = reply
        return reply
    }

    //whats Up
    if (new RegExp(whatsUp_List.join("|")).test(userVoice)) {
        var reply = whatsUp_Reply[Math.floor(Math.random() * whatsUp_Reply.length)];
        Tts.getInitStatus().then(() => {
            Tts.speak(reply)
        });
        prevQues = reply
        return reply
    }

    //i Hate u
    if (new RegExp(iHateYou_List.join("|")).test(userVoice)) {
        var reply = iHateYou_Reply[Math.floor(Math.random() * iHateYou_Reply.length)];
        Tts.getInitStatus().then(() => {
            Tts.speak(reply)
        });
        prevQues = reply
        return reply
    }

    //Bye 
    if (new RegExp(Bye_List.join("|")).test(userVoice)) {
        Voice.cancel()
        console.log("Chat End")
        return false
    }
    //Bye 2
    if (userVoice == "bye") {
        Voice.cancel()
        console.log("Chat End")
        return false
    }
    //ShutUp
    if (new RegExp(ShutUp_List.join("|")).test(userVoice)) {
        Voice.cancel()
        console.log("Chat End")
        return false
    }

    //////////////////
    //Calculations
    //////////////////

    if (numberAtAnyPos.test(userVoice)) {
        //Minus
        if (userVoice.includes("-") || userVoice.includes("minus")) {
            var calculation = userVoice
            var temp_arr = calculation.split(/[*-]/)
            try {
                var replyint = temp_arr[0] - temp_arr[1]
                var reply = String(replyint)

            } catch (error) {
                var reply = "Wrong Statement"

            }
            if (reply == "NaN") {
                reply = "Sorry Wrong Expression"
            }
            Tts.getInitStatus().then(() => {
                Tts.speak(reply)
            });

            prevQues = reply
            return reply
        }
        //Multiply
        if (userVoice.includes("multiply") || userVoice.includes("multiplied")) {
            var calculation = userVoice
            try {
                calculation = calculation.replace('multiply', 'x')
            } catch (error) {
                calculation = calculation.replace('multiplied', 'x')
            }
            var temp_arr = calculation.split(/[*x]/)
            try {
                var replyint = temp_arr[0] * temp_arr[1]
                var reply = String(replyint)

            } catch (error) {
                var reply = "Wrong Statement"

            }
            if (reply == "NaN") {
                reply = "Sorry Wrong Expression"
            }
            Tts.getInitStatus().then(() => {
                Tts.speak(reply)
            });
            prevQues = reply
            return reply
        }
        //Multiply 2
        if (userVoice.includes("x")) {
            var calculation = userVoice
            var temp_arr = calculation.split(/[*x]/)
            try {
                var replyint = temp_arr[0] * temp_arr[1]
                var reply = String(replyint)

            } catch (error) {
                var reply = "Wrong Statement"

            }
            if (reply == "NaN") {
                reply = "Sorry Wrong Expression"
            }
            Tts.getInitStatus().then(() => {
                Tts.speak(reply)
            });

            prevQues = reply
            return reply
        }
        //Add
        if (userVoice.includes("plus") || userVoice.includes("add")) {
            var calculation = userVoice
            try {
                calculation = calculation.replace('plus', 'x')
            } catch (error) {
                calculation = calculation.replace('add', 'x')
            }
            var temp_arr = calculation.split(/[*x]/)
            try {
                var replyint = temp_arr[0] * temp_arr[1]
                var reply = String(replyint)

            } catch (error) {
                var reply = "Wrong Statement"

            }
            if (reply == "NaN") {
                reply = "Sorry Wrong Expression"
            }
            Tts.getInitStatus().then(() => {
                Tts.speak(reply)
            });

            prevQues = reply
            return reply
        }
        //Add 2
        if (userVoice.includes("+")) {
            var calculation = userVoice
            var temp_arr = calculation.split(/[*+]/)
            try {
                var replyint = temp_arr[0] + temp_arr[1]
                var reply = String(replyint)

            } catch (error) {
                var reply = "Wrong Statement"

            }
            if (reply == "NaN") {
                reply = "Sorry Wrong Expression"
            }
            Tts.getInitStatus().then(() => {
                Tts.speak(reply)
            });

            prevQues = reply
            return reply
        }
    }

    else if (userVoice.split(" ").length < 3 && userVoice.includes("cancel")) {
        Voice.cancel()
        console.log("Chat End")
        return false;
    }

    //How Are you
    if (new RegExp(howAreYou_List.join("|")).test(userVoice)) {
        var reply = howAreYou_Reply[Math.floor(Math.random() * howAreYou_Reply.length)];
        Tts.getInitStatus().then(() => {
            Tts.speak(reply)
        });
        prevQues = reply
        return reply
    }

    //Voice Options
    if ((new RegExp(OpenVoiceOptions_List.join("|")).test(userVoice))) {
        var reply = "opening voice options"
        Tts.getInitStatus().then(() => {
            Tts.speak(reply)
        });
        // Voice.cancel()
        prevQues = reply
        return reply
    }

    //Voice Options 1
    if ((new RegExp(ChangeYourVoice_List.join("|")).test(userVoice))) {
        var reply = "opening voice options"
        Tts.getInitStatus().then(() => {
            Tts.speak(reply)
        });
        // Voice.cancel()
        prevQues = reply
        return reply
    }

    //What Method
    else if (new RegExp(what_List.join("|")).test(userVoice)) {
        var reply = prevQues
        if (reply == "") {
            reply = "nothing"
        }
        Tts.getInitStatus().then(() => {
            Tts.speak("i said" + reply)
        });
        return reply
    }

    //What's your Age Method
    else if (new RegExp(whatsYourAge_List.join("|")).test(userVoice)) {
        var reply = whatsYourAge_Reply[Math.floor(Math.random() * whatsYourAge_Reply.length)];
        Tts.getInitStatus().then(() => {
            Tts.speak(reply)
        });
        prevQues = reply
        return reply
    }
    //What can you do
    else if (new RegExp(whatCanYouDo_List.join("|")).test(userVoice)) {
        var reply = whatCanYouDo_Reply[Math.floor(Math.random() * whatCanYouDo_Reply.length)];
        Tts.getInitStatus().then(() => {
            Tts.speak(reply)
        });
        prevQues = reply
        return reply
    }

    //What's the Date
    else if (new RegExp(whatsTheDate.join("|")).test(userVoice)) {
        var reply = DateAndTime.dateWords()
        Tts.getInitStatus().then(() => {
            Tts.speak(reply)
        });
        prevQues = reply
        return reply
    }

    //What's the Time
    else if (new RegExp(whatsTheTime.join("|")).test(userVoice)) {
        var reply = DateAndTime.timeWords()
        Tts.getInitStatus().then(() => {
            Tts.speak(reply)
        });
        console.log(reply)
        prevQues = reply
        return reply
    }

    //Doing Good
    else if (new RegExp(DoingGood_List.join("|")).test(userVoice)) {
        var reply = DoingGood_Reply[Math.floor(Math.random() * DoingGood_Reply.length)];
        Tts.getInitStatus().then(() => {
            Tts.speak(reply)
        });
        prevQues = reply
        return reply
    }

    //Boy or Girl
    else if (new RegExp(BoyOrGirl_List.join("|")).test(userVoice)) {
        var reply = "I'm not a Human, i am a machine running on root's code"
        Tts.getInitStatus().then(() => {
            Tts.speak(reply)
        });
        prevQues = reply
        return reply
    }

    /////
    // My Name
    ////
    if (new RegExp(app_name_Ques.join("|")).test(userVoice)) {
        var reply = "well, I was named as root"
        Tts.getInitStatus().then(() => {
            Tts.speak(reply)
        });
        prevQues = reply
        return reply
    }

    /////
    // Who Made
    ////
    if (new RegExp(whoCreatedYou_List.join("|")).test(userVoice)) {
        // var reply = DoingGood_Reply[Math.floor(Math.random() * DoingGood_Reply.length)];
        var reply = "well you know who, it was Arshad Azaad"
        Tts.getInitStatus().then(() => {
            Tts.speak(reply)
        });
        prevQues = reply
        return reply
    }

    //What Method 2
    else if (userVoice == "what") {
        var reply = prevQues
        if (reply == "") {
            reply = "nothing"
        }
        Tts.getInitStatus().then(() => {
            Tts.speak("i said" + reply)
        });
        return reply
    }

    else {
        Tts.getInitStatus().then(() => {
            Tts.speak("sorry i didn't get that", {
                rate: 0.6,
                pitch: 1,

            })
        });
        return "Sorry I Didn't Get That"
    }
    return true
}

//Method which Handles Error on Voice
export const errorOnVoice = () => {
    Tts.getInitStatus().then(() => {
        Tts.speak("sorry i didn't get that", {
            rate: 0.8,

        })
    });

}

//Method to To open Private Mode Window
export const PrivateModeHandler = () => {
    if (prevUserQues == 'privateMode')
        Actions.PrivateMode_Window()
    prevUserQues = ""
}
import React, { Component } from 'react'
import { View, StyleSheet, Image, Text } from 'react-native'
import Meme1 from './memes/1.jpg'
import Meme2 from './memes/2.jpg'
import Meme3 from './memes/3.jpg'
import Meme4 from './memes/4.jpg'
import Meme5 from './memes/5.jpg'
import Meme6 from './memes/6.jpg'
import Meme7 from './memes/7.jpg'
import Meme8 from './memes/8.jpg'
import Meme9 from './memes/9.jpg'
import Meme10 from './memes/10.jpg'
import Meme11 from './memes/11.jpg'

var memeArray = [Meme1, Meme2, Meme3, Meme4, Meme5, Meme6, Meme7, Meme8, Meme9]

export default class ShowSomething extends Component {

    componentDidMount() {
        timer = setTimeout(() => this.props.closepage(), 5500)
    }

    imageDisplay() {
        var randomNumber = Math.floor((Math.random() * 9) + 0);


        console.log(randomNumber)
        return (
            <Image style={styles.image}
                source={memeArray[randomNumber]} />
        )
    }

    state = {
        animationVisible: true,
    }

    render() {
        return (
            <View style={styles.MainComponent}>
                <this.imageDisplay></this.imageDisplay>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    MainComponent: {
        flex: 1,
        alignContent: "center",
        justifyContent: "center"
    },
    image: {
        height: '70%',
        width: '100%',
        alignSelf: "center"
    }
})
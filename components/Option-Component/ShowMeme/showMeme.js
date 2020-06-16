import React, { Component } from 'react'
import { View, StyleSheet, Image } from 'react-native'

var meme1 = "./memes/1.jpg"
var meme2 = "./memes/2.jpg"
var meme3 = "./memes/3.jpg"
var meme4 = "./memes/4.jpg"
var meme5 = "./memes/5.jpg"
var meme6 = "./memes/6.jpg"
var meme7 = "./memes/7.jpg"
var meme8 = "./memes/8.jpg"
var meme9 = "./memes/9.jpg"
var meme10 = "./memes/10.jpg"

var imageNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

export default class ShowSomething extends Component {

    componentDidMount() {
        // timer = setTimeout(() => this.setState({ animationVisible: true }), 10)
        timer = setTimeout(() => this.props.closepage(), 5500)
    }

    imageDisplay() {
        var randomImage = imageNumbers[Math.floor(Math.random() * imageNumbers.length)];
        if (randomImage == 1) {
            return (
                <Image source={require(meme1)}
                    style={styles.image}
                />
            )
        }

        else if (randomImage == 2) {
            return (
                <Image source={require(meme2)}
                    style={styles.image}
                />
            )
        }
        else if (randomImage == 3) {
            return (
                <Image source={require(meme3)}
                    style={styles.image}
                />
            )
        }
        else if (randomImage == 4) {
            return (
                <Image source={require(meme4)}
                    style={styles.image}
                />
            )
        }
        else if (randomImage == 5) {
            return (
                <Image source={require(meme5)}
                    style={styles.image}
                />
            )
        }
        else if (randomImage == 6) {
            return (
                <Image source={require(meme6)}
                    style={styles.image}
                />
            )
        }
        else if (randomImage == 7) {
            return (
                <Image source={require(meme7)}
                    style={styles.image}
                />
            )
        }
        else if (randomImage == 8) {
            return (
                <Image source={require(meme8)}
                    style={styles.image}
                />
            )
        }
        else if (randomImage == 9) {
            return (
                <Image source={require(meme9)}
                    style={styles.image}
                />
            )
        }
        else if (randomImage == 10) {
            return (
                <Image source={require(meme10)}
                    style={styles.image}
                />
            )
        }
    }

    state = {
        animationVisible: true,
    }

    render() {
        return (
            <View style={styles.MainComponent}>
                {this.state.animationVisible &&
                    <this.imageDisplay></this.imageDisplay>
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
    },
    image: {
        height: '70%',
        width: '100%',
        alignSelf: "center"
    }
})
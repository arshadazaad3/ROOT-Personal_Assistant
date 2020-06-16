import React from 'react'

import { View, Text, Linking, StyleSheet } from 'react-native'
import { PermissionsAndroid } from 'react-native';
import Contacts from 'react-native-contacts';

import { Toolbar, Snackbar, Subheader } from 'react-native-material-ui';
export default class SendMessage extends React.Component {

    state = {
        contactsArray: []
    }

    componentDidMount() {
        PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
            {
                'title': 'Contacts',
                'message': 'This app would like to view your contacts.',
                'buttonPositive': 'Please accept bare mortal'
            }
        ).then(() => {
            Contacts.getAll((err, contacts) => {
                contacts.sort((a, b) => a.givenName.toLowerCase() > b.givenName.toLowerCase());
                console.log('contacts -> ', contacts);
                if (err === "denied") {
                    alert("Permission to access contacts was denied");
                    console.warn("Permission to access contacts was denied");
                } else {
                    setContacts(contacts);
                    console.log('contacts', contacts);
                }
            });
        })
    }

    render() {

        return (
            <View style={styles.mainContainer}>

                <Text>Hello</Text>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    }


})
//Import React
import React, { useState, useEffect } from "react";

//Import all required component
import {
  PermissionsAndroid,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  BackHandler,
  TouchableOpacity,
  View,
  FlatList,
  TextInput
} from "react-native";
import { Actions } from 'react-native-router-flux';

import Icon from 'react-native-vector-icons/MaterialIcons';


import Contacts from "react-native-contacts";
import ListItem from "../../Contacts/ListItem";

const App = () => {
  let [contacts, setContacts] = useState([]);



  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => Actions.VoiceAssistant_Window());

    if (Platform.OS === "android") {
      PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
        title: "Contacts",
        message: "This app would like to view your contacts."
      }).then(() => {
        loadContacts();
      });
    } else {
      loadContacts();
    }

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', () => Actions.VoiceAssistant_Window());
    }
  }, []);

  const loadContacts = () => {
    Contacts.getAll((err, contacts) => {
      contacts.sort((a, b) => a.givenName.toLowerCase() > b.givenName.toLowerCase());
      if (err === "denied") {
        alert("Permission to access contacts was denied");
        console.warn("Permission to access contacts was denied");
      } else {
        setContacts(contacts);
      }
    });
  }

  const search = (text) => {
    const phoneNumberRegex = /\b[\+]?[(]?[0-9]{2,6}[)]?[-\s\.]?[-\s\/\.0-9]{3,15}\b/m;
    if (text === "" || text === null) {
      loadContacts();
    } else if (phoneNumberRegex.test(text)) {
      Contacts.getContactsByPhoneNumber(text, (err, contacts) => {
        contacts.sort((a, b) => a.givenName.toLowerCase() > b.givenName.toLowerCase());
        setContacts(contacts);
        console.log(contacts)
      });
    } else {
      Contacts.getContactsMatchingString(text, (err, contacts) => {
        contacts.sort((a, b) => a.givenName.toLowerCase() > b.givenName.toLowerCase());
        setContacts(contacts);
      });
    }
  }

  const openContact = (contact) => {
    Contacts.openExistingContact(contact, () => { })
  };


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={{ height: 51 }}>
          <Text style={styles.header}>
            Contacts List
        </Text>
          <TouchableOpacity style={styles.CloseBoxContainer} onPress={() => Actions.VoiceAssistant_Window()} >
            <Icon name="close" size={30} color={'black'} />
          </TouchableOpacity>
        </View>
        <TextInput
          onChangeText={search}
          placeholder='Search'
          style={styles.searchBar}
        />
        <FlatList
          data={contacts}
          renderItem={(contact) => {
            return (<ListItem
              key={contact.item.recordID}
              item={contact.item}
              onPress={openContact}
            />)
          }}
          keyExtractor={item => item.recordID}
        />
      </View>
    </SafeAreaView>
  );
}
export default App;

const styles = StyleSheet.create({

  CloseBoxContainer: {
    // display: 'flex',
    // position: "relative",
    bottom: 47,
    right: 3,
    // right: 12,
    alignSelf: 'flex-end',

  },
  container: {
    flex: 1,
    marginTop: 10,
  },
  header: {
    backgroundColor: '#4591ed',
    color: 'white',
    // alignSelf: 'flex-start',
    paddingHorizontal: 15,
    paddingVertical: 15,
    fontSize: 20
  },
  searchBar: {
    backgroundColor: '#f0eded',
    paddingHorizontal: 30,
    paddingVertical: (Platform.OS === "android") ? undefined : 15,
  }
});
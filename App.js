import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
    

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Cours Goal" style={styles.input}/>
        <Button title="ADD"/>
      </View>
      <View>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
 screen:{
  padding: 50
 },
 inputContainer:{
  flexDirection: 'row',
  justifyContent: "space-around",
  alignItems: 'center',
 },
 input:{
  borderBottomColor:'black',
  borderBottomWidth: 1,
  padding: 10,
  width: '80%',
 }

});

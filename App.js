import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
    
  const [text,useText] = useState("Hello jestem Ed!");

  return (
    <View style={styles.container}>
      <Text>{text}</Text>
      <Button title="Change text" onPress={() => {useText("Cześć Malwina!")}} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

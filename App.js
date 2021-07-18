import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
    const [enteredGoal, setenteredGoal] = useState("");
    const [coursGoal, setCoursGoal] = useState([]);

    const goalInputHandler = (enteredGoal) =>{
      setenteredGoal(enteredGoal)
    }
    const addGoalHanlder = () =>{
      if(enteredGoal != ""){
        setCoursGoal(currentGoals => [...coursGoal, enteredGoal])
        setenteredGoal("");
      }else{
        console.log("Put some text");
      }
     
    }

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Cours Goal" style={styles.input} onChangeText={goalInputHandler} value={enteredGoal}/>
        <Button title="ADD" onPress={addGoalHanlder}/>
      </View>
      <View style={styles.listItemWrapper}>
        {
          coursGoal.map((goal) => (
            <View key={goal} style={styles.listItem} >
              <Text>{goal}</Text>
            </View>
          ))
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
 screen:{
  paddingTop: 80,
  paddingLeft: 30,
  paddingRight: 30,
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
 },
 listItem:{
  padding: 10,
  backgroundColor: '#ccc',
  borderColor: 'black',
  borderWidth:1,
  marginVertical: 10,
 },
 listItemWrapper:{
   marginTop:20,
 }

});

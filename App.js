import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView,FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInputs from './components/GoalInputs';

export default function App() {
    const [enteredGoal, setenteredGoal] = useState("");
    const [coursGoal, setCoursGoal] = useState([]);



  return (
    <View style={styles.screen}>
      <GoalInputs enteredGoal={enteredGoal} setenteredGoal={setenteredGoal} setCoursGoal={setCoursGoal} coursGoal={coursGoal} ></GoalInputs>
      <View  style={styles.listItemWrapper}>
        <FlatList keyExtractor={(item, index) => item.key} data={coursGoal} renderItem={ itemData => (
           <GoalItem title={itemData.item.value} ></GoalItem>
        )}/>
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

 
 listItemWrapper:{
   marginTop:20,
 }

});

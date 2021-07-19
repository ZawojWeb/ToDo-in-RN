import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, View,FlatList, Button } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInputs from './components/GoalInputs';

export default function App() {
  const [coursGoal, setCoursGoal] = useState([]);
  const [enteredGoal, setenteredGoal] = useState("");
  const [isAddMode, setisAddMode] = useState(false)

  const goalInputHandler = (enteredGoal) =>{
    setenteredGoal(enteredGoal)
  }
  const addGoalHanlder = () =>{
    if(enteredGoal != ""){
      setCoursGoal(currentGoals => [...coursGoal, {key: Math.random().toString(), value: enteredGoal}])
      setenteredGoal("");
    }else{
      console.log("Put some text");
    }
   
  }

  const removeGoalHanlder = goladId =>{
    setCoursGoal( currentGoals =>{
      return currentGoals.filter( (goal) => goal.key !== goladId);
    } );
  }

  return (
    <View style={styles.screen}>
      <Button title="Add new Goal" onPress={() => setisAddMode(true)}/>
      <GoalInputs isAddMode={isAddMode} enteredGoal={enteredGoal}  goalInputHandler={goalInputHandler} addGoalHanlder={addGoalHanlder} ></GoalInputs>
      <View  style={styles.listItemWrapper}>
        <FlatList keyExtractor={(item, index) => item.key} data={coursGoal} renderItem={ itemData => (
           <GoalItem id={itemData.item.key} title={itemData.item.value} onDelete={removeGoalHanlder} ></GoalItem>
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

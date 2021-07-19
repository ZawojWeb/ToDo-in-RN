import React from 'react';
import { Button, TextInput, StyleSheet, View } from 'react-native';
export const GoalInputs = ({enteredGoal,goalInputHandler,addGoalHanlder}) => {

    
    return (
        <View style={styles.inputContainer}>
            <TextInput placeholder="Cours Goal" style={styles.input} onChangeText={goalInputHandler} value={enteredGoal}/>
            <Button title="ADD" onPress={addGoalHanlder}/>
        </View>
    )
}

const styles = StyleSheet.create({
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
})

export default GoalInputs
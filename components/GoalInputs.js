import React from 'react';
import { Button, TextInput, StyleSheet, View, Modal } from 'react-native';


export const GoalInputs = ({enteredGoal,goalInputHandler,addGoalHanlder,isAddMode}) => {
    return (
        <Modal visible={isAddMode} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput placeholder="Cours Goal" style={styles.input} onChangeText={goalInputHandler} value={enteredGoal}/>
                <Button title="ADD" onPress={addGoalHanlder}/>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer:{
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
       },
    input:{
        borderBottomColor:'black',
        borderBottomWidth: 1,
        padding: 10,
        marginBottom: 30,
        width: '80%',
    },
})

export default GoalInputs
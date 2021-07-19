import React from 'react';
import { Button, TextInput, StyleSheet, View, Modal } from 'react-native';


export const GoalInputs = ({enteredGoal,goalInputHandler,addGoalHanlder,isAddMode,setisAddMode,setenteredGoal}) => {

    

    return (
        <Modal visible={isAddMode} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput placeholder="Cours Goal" style={styles.input} onChangeText={goalInputHandler} value={enteredGoal}/>
                <View style={styles.buttons}>
                    <Button style={styles.theButton} title="CANCEL" color="red" onPress={() =>{
                        setisAddMode(false);
                        setenteredGoal("")
                    } }/>
                    <Button style={styles.theButton} title="ADD" onPress={addGoalHanlder}/>
                </View>
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
    buttons:{
        flexDirection: "row",
        justifyContent: 'space-around',
        width: '100%',
    },
    theButton: {
        width: 100
    }
})

export default GoalInputs
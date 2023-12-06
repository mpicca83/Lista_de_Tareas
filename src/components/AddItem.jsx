import {View, TextInput, Button, StyleSheet} from "react-native"

export const AddItem = ({valueTask, onChangeTask, valueUser, onChangeUser, addTask}) => {

    return(
        <View style={styles.inputContainer}>
            <TextInput 
            style={styles.input}
            placeholder="Nueva Tarea"
            value={valueTask}
            onChangeText={(t)=> onChangeTask(t)}
            />
            <TextInput 
            style={styles.input}
            placeholder="Usuario"
            value={valueUser}
            onChangeText={(t)=> onChangeUser(t)}
            />
            <Button title="ADD" onPress={addTask} />
        </View>
    )
}
const styles = StyleSheet.create({
    inputContainer:{
        flexDirection:"row",
        alignItems:"center",
        width:"90%",
        justifyContent:"space-around",
      },
      input:{
        borderWidth:2,
        paddingHorizontal:10,
        paddingVertical:5,
        width:150
      }
})
import { useState } from "react"
import {View ,Text ,Button, StyleSheet } from "react-native"

export const Item = ({item, onModal}) => {

    const [done, setDone] = useState("Pending")

    const taskDone = () => {
        done === "Pending" ? setDone("Done") : setDone("Pending")
    }

    return (
        <View style={[styles.cardItem, { backgroundColor: done === "Pending" ? "#FFD8E0" : "#E2FFDB" }]}>
            <View style={styles.itemText}>
                <Text style={styles.text1}>{item.task}</Text>
                <Text style={styles.text2}>{item.user}</Text>
            </View>
            <View style={styles.itemButton}>
                <Button title={done} onPress={() => taskDone()}/>
                <Button title="DEL" onPress={() => onModal(item)}/>
            </View>
        </View> 
    )
}

const styles = StyleSheet.create({

    cardItem:{
        flexDirection:"row",
        padding:10,
        margin:10,
        alignItems:"center",
        borderWidth:1,
        textAlign:'center',
    },
    itemText:{
        alignItems:"center",
        flex: 2.5,
        gap: 10
    },
    text1:{
        fontSize:17,
    },
    text2:{
        fontWeight:'bold'
    },
    itemButton:{
        width:'100%',
        gap: 10,
        flex: 1
    }

})
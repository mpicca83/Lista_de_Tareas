import { useState } from "react"
import { View, StyleSheet, Text} from "react-native"
import uuid from 'react-native-uuid'
import { AddItem, DeleteModal, ItemList } from "./src/components"



const App = () => {

    const [task,setTask] = useState("")
    const [user,setUser] = useState("")
    const [taskList,setTaskList] = useState([])
    const [taskSelected,setTaskSelected] = useState({})
    const [modalVisible,setModalVisible] = useState(false)

    const handlerAddTask = () => {

      const newTask = {
        id: uuid.v4(),
        task: task,
        user: user
      }
      
      setTaskList(data  => [...data, newTask])
      setTask("")
      setUser("")
    }

    const handlerModal = (item) => {
      setTaskSelected(item)
      setModalVisible(true)
    }

    const handlerDeleteTask = () => {
      setTaskList(current => current.filter(item => item.id !== taskSelected.id))
      setModalVisible(false)
    }

    return(
      <View  style={styles.container}>
        <Text style={styles.title1}>Lista de Tareas</Text>
        <Text style={styles.title2}>Agrega una nueva tarea:</Text>
        <AddItem
          valueTask={task}
          onChangeTask={setTask}
          valueUser={user}
          onChangeUser={setUser}
          addTask={handlerAddTask}
        />
        <Text style={styles.title2}>Listado de tareas:</Text>
        <ItemList
          data = {taskList}
          onModal = {handlerModal}
        />
        <DeleteModal
          task = {taskSelected}
          visible={modalVisible}
          onModal = {setModalVisible}
          onDelete={handlerDeleteTask}
        />
      </View>
    )
  }

  const styles = StyleSheet.create({
    container:{
      flex:1,
      justifyContent:"start",
      alignItems:"center",
    },
    title1:{
      marginTop:60,
      fontSize:30
    },
    title2:{
      fontSize:16,
      marginTop:30,
      marginBottom: 10,
      alignSelf: "flex-start",
      marginLeft: 30,
      color: '#2C87E3'
    }
  })

export default App
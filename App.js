import { useState } from "react"
import { View, StyleSheet, Text, Button} from "react-native"
import uuid from 'react-native-uuid'
import { AddItem, DeleteModalTask, DeleteModalList, ItemList } from "./src/components"



const App = () => {

    const [task, setTask] = useState("")
    const [user, setUser] = useState("")
    const [taskList, setTaskList] = useState([])
    const [taskSelected, setTaskSelected] = useState({})
    const [modalVisibleTask, setModalVisibleTask] = useState(false)
    const [modalVisibleList, setModalVisibleList] = useState(false)

    const handlerAddTask = () => {

      if(task !== ''){
        const newTask = {
          id: uuid.v4(),
          task: task,
          user: user
        }
        
        setTaskList(data  => [...data, newTask])
        setTask("")
        setUser("")
      }
    }

    const handlerModalTask = (item) => {
      setTaskSelected(item)
      setModalVisibleTask(true)
    }

    const handlerDeleteTask = () => {
      setTaskList(current => current.filter(item => item.id !== taskSelected.id))
      setModalVisibleTask(false)
    }

    const handlerModalList = (item) => {
      taskList.length > 0 && setModalVisibleList(true)
    }

    const handlerDeleteList = ()=>{
      setTaskList([])
      setModalVisibleList(false)
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
          onModal = {handlerModalTask}
        />


        <View style={styles.deleteList}>
          <Button title="Vaciar Listado" onPress={handlerModalList}/>
        </View>

        <DeleteModalTask
          task = {taskSelected}
          visible={modalVisibleTask}
          onModal = {setModalVisibleTask}
          onDelete={handlerDeleteTask}
        />

        <DeleteModalList
          visible={modalVisibleList}
          onModal = {setModalVisibleList}
          onDelete={handlerDeleteList}
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
    },
    deleteList:{
      margin:10,
    }
  })

export default App
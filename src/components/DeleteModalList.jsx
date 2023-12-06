import {Modal, View, Text, Button, StyleSheet} from "react-native"

export const DeleteModalList = ({visible, onModal, onDelete}) =>{

    return  (
        <Modal visible={visible}>
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <Text style={styles.modalText}>¿Desea borrar la lista completa?</Text>
                    <Button title="Confirmar" onPress={onDelete} />
                    <Button title="Cerrar" onPress={()=> onModal(false)}/>
                </View>        
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({

    modalContainer:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:'#C2C2C2'
      },
      modalContent:{
        width:"80%",
        borderWidth:2,
        padding:20,
        gap:10,
        backgroundColor:'#FFFFFF'
      },
      modalText:{
        textAlign:"center",
        fontSize:18,
        marginBottom:20,
      },
})

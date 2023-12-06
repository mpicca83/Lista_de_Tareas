import {View, FlatList, StyleSheet} from "react-native"
import { Item } from "./Item"

export const ItemList = ({data, onModal}) => {

    return (
        <View style={styles.listContainer}>
            <FlatList
                data={data}
                keyExtractor={item => item.id}
                renderItem={({item}) => <Item item={item} onModal={onModal}/> }
            />
        </View>
    )
}

const styles = StyleSheet.create({

    listContainer : {
        width:"90%",
        flex:1,
      }
})
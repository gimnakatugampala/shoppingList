import React from 'react'
import { View, Text,StyleSheet,TouchableOpacity } from 'react-native'

export default function ListItem({item}) {
    return (
        <TouchableOpacity style={styles.listItem}>
        <View style={styles.listItemView}>
            <Text style={styles.listItemText}>{item.text}</Text>
        </View>
        </TouchableOpacity>
    )
}
 
const styles = StyleSheet.create({
    
})
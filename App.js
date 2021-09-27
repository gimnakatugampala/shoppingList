import React,{useState} from 'react';
import { StyleSheet, Text, View ,FlatList} from 'react-native';
import { v4 as uuidv4 } from 'uuid';

import ListItem from './components/ListItem'
import Header from './components/Header';

export default function App() {

  const [items, setItems] = useState([
    {id:uuidv4(),text:'Milk'},
    {id:uuidv4(),text:'Eggs'},
    {id:uuidv4(),text:'Bread'},
    {id:uuidv4(),text:'Juice'}
  ])

  const deleteItem = (id) =>{
    setItems(prevItems =>{
      return prevItems.filter(item => item.id != id)
    })
  }

  return (
    <View style={styles.container}>
      <Header title="Shopping List" />
      <FlatList
        data={items}
        renderItem={({item}) => <ListItem  item={item} deleteItem={deleteItem} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:60
  }
});

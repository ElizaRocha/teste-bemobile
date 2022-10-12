import React from 'react';
import { 
  ScrollView, 
  StyleSheet, 
  Text, 
  View 
} from 'react-native';
import Header from './components/Header';
import Input from './components/Input';


export default function App (){

  const database = require('./db.json')
  const data = database.posts

  return (
    <ScrollView style={styles.container}>
      <Header />
      <View>
        <Text style={styles.title}>Funcionários</Text>
      </View>

      <Input data={data}/>

      </ScrollView>
  );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  title:{
    color: "#1C1C1C",
    fontWeight: 'bold',
    fontSize: 24,
    left: 20,
    marginTop: 10
  }
})
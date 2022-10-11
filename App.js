import { StatusBar } from 'expo-status-bar';
import React, { Component, useState } from 'react';
import { FlatList, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import {fundo as fundo} from './app.json';

export default function App (){
 
  const db = require('./db.json');
  const data = db.posts
  const [search, setSearch] = useState("")
  const [filteredData, setFilteredData] = useState(data);

  

  
  const ItemView = ({item}) => {
    return (
        <View styles={{ flex: 1 }}>
          <Text>{item.id}</Text>
          <Text>{item.name}</Text>
          <Text>{item.telefone}</Text>
          <Text>{item.data}</Text>
          <Text>{item.cargo}</Text>
        </View>
    );
  };

  const searchFilter = (text) => {
    if (text) {
      const newData = data.filter(
        function (item) {
          if (item) {
            const nomeData = item.name.toUpperCase();
            const cargoData = item.cargo.toUpperCase();
            const textData = text.toUpperCase();
            for(let i = 0; i < data.length; i++ ){
              if(nomeData == textData || item.telefone == text || cargoData == textData){
                return true;
              }
            }
          }
      });
      setFilteredData(newData);
      setSearch(text);
    } else {
      setFilteredData(data);
      setSearch(text);
    }
  };
 
  return (
    <ScrollView>
      <View>
        <Text>
           
        </Text>
      </View>
      <View style={styles.header}>
        <Image source={require("./assets/fundo.png")} style={styles.img}/>
      </View>

      <View>
        <Text style={styles.title}>Funcionários</Text>
      </View>

      <View style={styles.areaInput}>
        <TextInput
          style={styles.input}
          placeholder='Pesquisar'
          value={search}
          onChangeText={(e) => setSearch(e)}
        />
        <TouchableOpacity onPress={() => searchFilter(search)}>
         <Image source={require("./assets/Vector.png")} style={styles.img}/>
        </TouchableOpacity>
         
       </View>
       <FlatList
          data={filteredData}
          keyExtractor={item => item.id}
          renderItem={ItemView}
        />
                
      </ScrollView>
  );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   
  },
  header:{
    width:'100%',
 

/* Black/Neutral */

    backgroundColor: '#1C1C1C',
/* Shadow/Small */

    shadowColor: 'rgba(0, 0, 0, 0.2)'
  },
  img:{
    margin:10,
    marginLeft:10,
  },
  title:{

    color: "#1C1C1C",
    fontWeight: 'bold',
    fontSize: 24,
    left: 20,
    color: "#1C1C1C",
    margin: 10
  },
  areaInput:{
    flex: 1,
    alignItems: 'center',
    justifyContent: "space-between",
    display: 'flex',
    flexDirection: 'row',
    margin: 20,
    padding: 10,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "#DFDFDF"
  },
  input:{
    width: '90%',
    height: '100%',
    fontSize: 16,
    lineHeight: 19,
    display:'flex',
    alignItems: 'center',
    color: '#9E9E9E'
  }
})
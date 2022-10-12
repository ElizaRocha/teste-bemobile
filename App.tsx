import { StatusBar } from 'expo-status-bar';
import React, { Component, useEffect, useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';


export default function App (){

  const [db, setPost] = useState()
  const database = require('./db.json')
  const data = database.posts

  const [search, setSearch] = useState("")
  const [filteredData, setFilteredData] = useState(data);
  const [choice, setChoice] = useState('show')
  const [newData, setData] = useState()
  
console.log("newData",newData)

  function handleClick(item: any) {
    console.log("item func: ", item.show)
    if(item.show == 'show'){
      setChoice('hidden')
      item.show = 'hidden'
    }else{
      setChoice('show')
      item.show='show'
    }
    console.log("item func 2: ", item.show)
      
      return item.show
  }


  const searchFilter = (text: any) => {
    if (text) {
      const newData = data.filter(
        function (item) {
          if (item) {
            const nomeData = item.name.toUpperCase();
            const cargoData = item.cargo.toUpperCase();
            const textData = text.toUpperCase();

            for(let i = 0; i < data.length; i++ ){
              if(nomeData.indexOf(textData) > -1 || item.telefone.indexOf(text) > -1 || cargoData.indexOf(textData) > -1){
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
    <ScrollView style={styles.container}>
    
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

       <View style={styles.tituloTabela}>
           <Text style={styles.tituloText}> FOTO</Text>
           <Text style={styles.tituloText}>NOME</Text>
           <Image source={require('./assets/ponto.png')}/>
          </View>
     
      <View style={styles.areaTabela}>
        {filteredData.map(item => (
          <>
          {()=>formataData(item.data)}
          {console.log("item foto", item.foto)}
          <View style={styles.show}>
          <Image 
              source={require('./assets/user1.png')}
              style={
                styles.foto
              }
            />
            <Text> {item.name}</Text>
            <TouchableOpacity onPress={() => item.show = handleClick(item)}>
              <Image source={require("./assets/seta.png")}/>
            
           </TouchableOpacity>
          
          </View>
           {item.show == 'show' && 
              <View style={styles.info}>
                <View style={styles.linha}>
                  <Text>Cargo</Text>
                  <Text>{item.cargo}</Text>
                </View>
                <View  style={styles.linha}>
                  <Text>Telefone</Text>
                  <Text>{item.telefone}</Text>
                </View>
                <View style={styles.linha}>
                  <Text>Data de admissão</Text>
                  <Text>{item.data}</Text>
                </View>
              </View>
            }
         
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{flex: 1, height: 1, backgroundColor: 'rgba(0, 0, 0, 0.2)'}} />
          </View>
          </>
        ))}
          
      </View>
    


      </ScrollView>
  );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  header:{
    paddingTop: 35,
    width:'100%',
    backgroundColor: '#1C1C1C',
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
    marginTop: 10
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
    borderColor: "#ACACAC",
    backgroundColor: 'white'
  },
  areaTabela:{
    backgroundColor:'white',
    flex: 1,
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    marginTop:-20,
    margin: 20,
    padding: 0,
  },
  input:{
    width: '90%',
    height: '100%',
    fontSize: 16,
    lineHeight: 19,
    display:'flex',
    alignItems: 'center',
    color: '#9E9E9E'
  },
  tabela:{
    alignItems:'center',
    backgroundColor:'red',
    width: '100%',
    flexDirection: 'column',
  },
  show:{
    width: '100%',
    justifyContent:'space-between',
    padding:10,
    alignItems:'center',
    display:'flex',
    flexDirection: 'row'
  },
  tituloTabela:{
    flexDirection:'row',
    justifyContent:'space-between',
    display:'flex',
    alignItems: 'center',
    padding: 14,
    height: 50,
    backgroundColor: '#5984C0',
    margin: 20,
    padding: 10,
    borderTopLeftRadius:4,
    borderTopRightRadius:4
  },
  foto:{
    width: 34,
    height: 34,
    borderRadius: 34 / 2
  },
  tituloText:{
   color:'white'
  },
  linha:{
    justifyContent: 'space-between',
    margin:10,
    flexDirection: 'row'
  },
  info:{
    width: '100%',
  }

})
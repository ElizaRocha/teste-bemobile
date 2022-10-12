import { useState } from "react"
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import Table from "../Table";


function Info(props: any){
   const data = props.data
    return(
        <>
        <View style={styles.info}>
        <View style={styles.linha}>
            <Text>Cargo</Text>
            <Text>{data.cargo}</Text>
        </View>
        <View  style={styles.linha}>
            <Text>Telefone</Text>
            <Text>{data.telefone}</Text>
        </View>
        <View style={styles.linha}>
            <Text>Data de admissão</Text>
            <Text>{data.data}</Text>
        </View>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    img:{
        margin:10,
        marginLeft:10,
    },
    container: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.2)',
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

export default Info
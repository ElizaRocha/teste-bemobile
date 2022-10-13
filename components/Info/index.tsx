import { useState } from "react"
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import Table from "../Table";


function Info(props: any){

   const data = props.data
    return(
        <>
        <View style={styles.info}>
        <View style={styles.linha}>
            <Text style={{fontWeight:'bold'}}>Cargo</Text>
            <Text>{data.cargo}</Text>
           
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{flex: 1, height: 1, backgroundColor: 'rgba(0, 0, 0, 0.09)', marginTop: -10}} />
        </View>
       
        <View  style={styles.linha}>
            <Text style={{fontWeight:'bold'}}>Telefone</Text>
            <Text>+55 {data.telefone.slice(0,2)} {data.telefone.slice(2,11)}</Text>
        </View>
        
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{flex: 1, height: 1, backgroundColor: 'rgba(0, 0, 0, 0.09)', marginTop: -10}} />
        </View>
       
        <View style={styles.linha}>
            <Text style={{fontWeight:'bold'}}>Data de admissão</Text>
            <Text>{data.data}</Text>
        </View>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    linha:{
      justifyContent: 'space-between',
      margin:10,
      flexDirection: 'row'
    },
    info:{
      padding:10,
      width: '100%',
    }
  
  })

export default Info
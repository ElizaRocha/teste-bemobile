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
                
                <View style={{height: 1, width: '100%', borderRadius: 1, borderWidth: 1, borderColor: 'rgba(0, 0, 0, 0.09)', borderStyle: 'dashed' }}>
                    <View style={{ position: 'absolute', left: 0, bottom: 0, width: '100%', height: 1, backgroundColor: 'white', zIndex: 1 }} />
                </View>
            
                <View style={styles.linha}>
                    <Text style={{fontWeight:'bold'}}>Data de admissão</Text>
                    <Text>{data.data}</Text>
                </View>

                <View style={{ height: 1, width: '100%', borderRadius: 1, borderWidth: 1, borderColor: 'rgba(0, 0, 0, 0.09)', borderStyle: 'dashed'}}>
                    <View style={{ position: 'absolute', left: 0, bottom: 0, width: '100%', height: 1, backgroundColor: 'white', zIndex: 1 }} />
                </View>

                <View  style={styles.linha}>
                    <Text style={{fontWeight:'bold'}}>Telefone</Text>
                    <Text>+55 ({data.telefone.slice(0,2)}) {data.telefone.slice(2,11)}</Text>
                </View>
                
                <View style={{ height: 1, width: '100%', borderRadius: 1, borderWidth: 1, borderColor: 'rgba(0, 0, 0, 0.09)', borderStyle: 'dashed' }}>
                    <View style={{ position: 'absolute', left: 0, bottom: 0, width: '100%', height: 1, backgroundColor: 'white', zIndex: 1 }} />
                </View>

            </View>
        </>
    )
}

const styles = StyleSheet.create({
    linha:{
      justifyContent: 'space-between',
      flexDirection: 'row',
      paddingTop: 10
    },
    info:{
      padding:20,
      width: '100%',
    }
  
  })

export default Info
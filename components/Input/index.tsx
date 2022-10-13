import { useState } from "react"
import { Image, StyleSheet, TextInput, TouchableOpacity, View } from "react-native"
import Table from "../Table";


function Input(props: any){
  
    const [search, setSearch] = useState("")
    const [filteredData, setFilteredData] = useState(props.data)

    const searchFilter = (text: any) => {
        if (text) {
          const newData = props.data.filter(
            function (item:any) {
              if (item) {
                const nomeData = item.name.toUpperCase();
                const cargoData = item.cargo.toUpperCase();
                const textData = text.toUpperCase();
    
                for(let i = 0; i < props.data.length; i++ ){
                  if(nomeData.indexOf(textData) > -1 || item.telefone.indexOf(text) > -1 || cargoData.indexOf(textData) > -1){
                    return true;
                  }
                }
              }
          });
          
          setFilteredData(newData);
          setSearch(text);
        } else {
          setFilteredData(props.data);
          setSearch(text);
        }
      };
      
    return(
      <>
      <View style={styles.areaInput}>
        <TextInput
          style={styles.input}
          placeholder='Pesquisar'
          value={search}
          onChangeText={(e) => setSearch(e)}
        />
        <TouchableOpacity onPress={() => searchFilter(search)}>
         <Image source={require("../../assets/search.png")} style={styles.img}/>
        </TouchableOpacity>
       </View>
       <Table data={filteredData}/>
      </>
        
    )
}
const styles = StyleSheet.create({
    
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
    input:{
        width: '90%',
        height: '100%',
        fontSize: 16,
        lineHeight: 19,
        display:'flex',
        alignItems: 'center',
        color: '#9E9E9E'
    },
    img:{
        margin:10,
        marginLeft:10,
    },
})


export default Input
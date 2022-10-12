import { Image, StyleSheet, View } from "react-native"

function Header(){
    return(
        <View style={styles.header}>
            <Image source={require("../../assets/fundo.png")} style={styles.img}/>     
        </View>
    )
}
const styles = StyleSheet.create({
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
})


export default Header
import React from "react";
import { Text,View,StyleSheet } from "react-native";
const Header=({title})=>{
    return(
        <View style={styles.header}>
            <Text>{title}</Text>
        </View>
    );
}
const styles=StyleSheet.create({
    header:{
        width:'100%',
        height:60,
        backgroundColor:'#aaaa11',
        alignItems:'center',
        justifyContent:'center',
    },
});
export default Header;
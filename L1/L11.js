import React from "react";
import { Text,View,StyleSheet } from "react-native";
const L11SectionView=({title,child,backgroundColor})=>{
    return(
        <View style={[styles.container,{backgroundColor}]}>
            <Text>{title}</Text>
            {child}
        </View>
    );
}
const L11=()=>{
    return(
        <View style={styles.container}>
            <L11SectionView title="Header" backgroundColor="#aaa456">
                <Text>Day la header</Text>
            </L11SectionView>
            <L11SectionView title="Content" backgroundColor="#bbb456">
                <Text>Day la content</Text>
            </L11SectionView>
            <L11SectionView title="Footer" backgroundColor="#ccc456">
                <Text>Day la footer</Text>
            </L11SectionView>
        </View>
    );
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        padding:20,
    },
    title:{
        fontSize:30,
    },
});
export default L11;
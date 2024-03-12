import React from "react";
import { Text,View,Image,StyleSheet } from "react-native";
const L22SectionView=({title,imageSource,description})=>{
    return(
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Image source={imageSource} style={styles.image} />
            <Text style={styles.description}>{description}</Text>
        </View>
    );
}
const L22=()=>{
    return(
        <View style={styles.container}>
            <L22SectionView
                title="Xin chao cac ban"
                imageSource={{uri:''}}
                description="day la bai hoc dau tien"
            />
        </View>
    );
}
const styles=StyleSheet.create({
    container:{
        padding:20,
        backgroundColor:'#ffffff',
        borderRadius:10,
        shadowColor:'#000',
    },
    title:{
        fontSize:20,
        height:200,
        marginBottom:10,
        borderRadius:5,
    },
    image:{
        width:'100%',
        height:200,
        marginBottom:10,
        borderRadius:5,
    },
    description:{
        fontSize:15,
    },
});
export default L22;
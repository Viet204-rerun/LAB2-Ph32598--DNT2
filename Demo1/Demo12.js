import React from "react";
import { Text,View,StyleSheet } from "react-native";
const DemoWrapper=({children})=>{
    return(
        <View style={styles.wrapper}>
            {children}
        </View>
    );
}
const styles=StyleSheet.create({
    wrapper:{
        padding:20,
        backgroundColor:'#bbb123',
        borderRadius:10,
        margin:10,
    },
});
const App=()=>{
    return(
        <DemoWrapper>
            <Text>Xin chao cac ban</Text>
        </DemoWrapper>
    );
}
export default App;
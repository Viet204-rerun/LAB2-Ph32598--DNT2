import { Animated, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const L33 = () => {
    const [expanded, setExpanded] = useState(false);
    const [animation] = useState(new Animated.Value(60));//chieu cao ban dau header

    const thaydoiHeader=()=>{
        const initiaValue = expanded ? 200 :60;
        const finalValue = expanded ? 60 :200;
        setExpanded(!expanded);
        animation.setValue(initiaValue);
        Animated.spring(animation,{
            toValue:finalValue,
            useNativeDriver:false,
        }).start();
    }

  return (
    <View style={styles.container}>
        <Animated.View style={[styles.header,{height: animation}]}>
            <Text style={styles.headerText}>Mở rộng header</Text>
        </Animated.View>
        <TouchableOpacity onPress={thaydoiHeader} style={styles.button}>
            <Text>{expanded?'Thu Hep':'Mo Rong'}</Text>
        </TouchableOpacity>
    </View>
  )
}

export default L33

const styles = StyleSheet.create({
    container:{flex:1,
    justifyContent:'center',
alignItems:'center'},
    header:{
        width:"100%",
        backgroundColor:'blue',
        justifyContent:'center',
        alignItems:'center'
    },
    button:{
        marginTop: 20,
        padding:10,
        backgroundColor:'#000CCC',
    },
    headerText:{
        fontSize:20,
        fontWeight:'bold'
    }
})
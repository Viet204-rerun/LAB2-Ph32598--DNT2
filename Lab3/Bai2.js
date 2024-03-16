import { Animated, FlatList, PanResponder, StyleSheet, Text, View } from 'react-native'
import React, { useRef } from 'react'

const Bai32 = () => {
    const translateY = useRef(new Animated.Value(0)).current;
    const panResponder = useRef(
        PanResponder.create({
            onMoveShouldSetPanResponder: ()=>true,
            onPanResponderMove:Animated.event(
                [null,{dy:translateY}],
                {useNativeDriver:false}
                ),
                onPanResponderRelease:(e,gestureState)=>{
                    Animated.spring(translateY,{
                        toValue:0,
                        useNativeDriver:false,
                    }).start();
                }
        }),

    ).current;
    const renderItem=({item})=>{
        return(
            <Animated.View
            style={[styles.item,{transform: [{translateY}]}]}
            {...panResponder.panHandlers}>
            <Text style={styles.text}>Flatlist Items</Text>
            </Animated.View>
        )
    }
  return (
    <View>
        <FlatList
        data={Array.from({length:10},
            (_,index)=>({key:`${index}`}))}
        renderItem={renderItem}
        ></FlatList>
    </View>
  )
}

export default Bai32

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'blue'
    },
    item:{
        width:'100%',
        height:50,
        backgroundColor:'#1111AA',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        marginVertical:5
    },
    text:{fontSize:15,fontWeight:'bold'}

})
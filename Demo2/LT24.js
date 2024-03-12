import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useState } from 'react'
const ChildComponent=({onClick})=>{
    return<Button title='Click me' onPress={onClick}></Button>
}
const LT24 = () => {

        const [count, setCount] = useState(0);
        const handleClick=useCallback(()=>{
            setCount(count+1)
        },[count]);
        return (

            <View>
              <Text>Count {count}</Text>
              <ChildComponent onClick={handleClick}></ChildComponent>
            </View>
          )
    }
   


export default LT24

const styles = StyleSheet.create({})
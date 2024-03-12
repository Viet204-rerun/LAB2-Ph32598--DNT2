import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const LT23 = () => {
    const [count, setCount] = useState(0)
    useEffect(() => {
        //ham duoc goi sau moi lan render
        console.log("Có thay đổi giá trị");
     
    })
    
  return (
    <View>
    <Text>Count:{count}</Text>
    <Button title='Tang' onPress={()=> setCount(count+1)}></Button>
</View>
  )
}

export default LT23

const styles = StyleSheet.create({})
import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

const LT2 = () => {
    const [count, setCount] = useState(0);
    const tang = () => {
        setCount(count + 1);
    }

    return (
        <View>
            <Text>So lan click: {count}</Text>
            <Button title='Tang so' onPress={tang}></Button>
        </View>
    )
}

export default LT2

const styles = StyleSheet.create({})

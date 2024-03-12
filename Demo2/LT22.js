import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useRef, useState } from 'react'


const LT22 = () => {
    const inputRef = useRef(null);
    const focusInput=()=>{
        inputRef.current.focus();
    }
  return (

    <View>
      <Text>LT22</Text>
    <TextInput ref={inputRef}></TextInput>
      <Button title='Focus Input' onPress={focusInput}></Button>
    </View>
  )
}

export default LT22

const styles = StyleSheet.create({})
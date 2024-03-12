import React,{useState} from "react";
import { Text,View,TextInput,StyleSheet } from "react-native";
const DemoTextInput=()=>{
    const [text, setText]=useState('');
    const handleChangeText=(inputText)=>{
        setText(inputText);
    };
    return(
        <View>
            <TextInput
                placeholder="moi nhap"
                onChangeText={handleChangeText}
                value={text}
            />
            <Text>{text}</Text>
        </View>
    );
}
export default DemoTextInput;
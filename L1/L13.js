import React,{useState} from "react";
import { View,TextInput,Button,Text,StyleSheet } from "react-native";
const App=()=>{
    const [inputValue,setInputValue]=useState('');
    const [isInputValid,setIsInputValid]=useState(true);
    const handleBlur=()=>{
        setIsInputValid(inputValue.trim() !=='');
    };
    const handleSubmit=()=>{
        setIsInputValid(inputValue.trim() !=='');
    };
    return(
        <View>
            <TextInput
                placeholder="moi nhap lieu"
                onChangeText={text=>{
                    setInputValue(text);
                    setIsInputValid(true);
                }}
                onBlur={handleBlur}
            />
            {!isInputValid && <Text>khong duoc de trong</Text>}
            <Button title="Submit" onPress={handleSubmit}/>
        </View>
    );
};
export default App;
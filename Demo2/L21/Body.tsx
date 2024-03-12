import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

const Body = ({ onSubmit }: { onSubmit: (inputValue: string) => void }) => {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = () => {
        onSubmit(inputValue);
        setInputValue('');
    };

    return (
        <View>
            <Text>Input:</Text>
            <TextInput 
                style={styles.input}
                value={inputValue}
                onChangeText={setInputValue}
            />
            <Button title="Submit" onPress={handleSubmit} />
        </View>
    );
};

export default Body;

const styles = StyleSheet.create({
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
});

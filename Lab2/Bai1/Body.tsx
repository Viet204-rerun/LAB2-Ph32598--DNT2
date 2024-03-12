import moment from 'moment-timezone';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

interface BodyProps {
 onSubmit : (inputValue: string,inputValue2: string,lastTimeUpdate: string) => void ,
 onChangeColor:(footerColor:string)=>void}
    const Body: React.FC<BodyProps> = ({ onSubmit, onChangeColor }) => {
    const [inputValue, setInputValue] = useState('');
    const [inputValue2, setInputValue2] = useState('');
    const colors =['#E36259','#E3A559','#E3E159','#7DE359','#59E39E','#59E3D0','#59B5E3','#595BE3','#A959E3','#CC59E3','#E359B0','#E35970']
    const [footerColor,setFooterColor]=useState(colors[0]);
    const[lastTimeUpdate,setLastTimeUpdate] = useState(
        'Bạn chưa cập nhật thông tin',
    );
    const handleSubmit = () => {
        onSubmit(inputValue,inputValue2,lastTimeUpdate);
        setInputValue('');
        setInputValue2('');
        const datetime = 
        moment().tz('Asia/Ho_Chi_Minh').format('DD/MM/YYYY HH:mm:ss')
        setLastTimeUpdate(datetime)
 
    };
    const handleColor =() =>{
        onChangeColor(footerColor)
        const numberRan = Math.floor(Math.random() * colors.length);
        setFooterColor(colors[numberRan])
    }

    return (
        <View style={styles.khung}>
            <TextInput 
                style={styles.input}
                value={inputValue}
                onChangeText={setInputValue}
                placeholder='Nhập tên mới'
                placeholderTextColor={'#709BBD'}
            />
             <TextInput 
                style={styles.input}
                value={inputValue2}
                onChangeText={setInputValue2}
                placeholder='Dán địa chỉ avatar mới'
                placeholderTextColor={'#709BBD'}

            />
            <View style={{alignItems:'center'}}>
            <TouchableOpacity style={styles.btnCapNhat}  onPress={handleSubmit} >
                <Text style={styles.txt}>CẬP NHẬT THÔNG TIN</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnDoiMau} onPress={handleColor} >
                <Text style={styles.txt}>ĐỔI MÀU FOOTER</Text>
            </TouchableOpacity>
            </View>
            </View>
    );
};

export default Body;

const styles = StyleSheet.create({
    input: {
        height: 40,
        borderColor: 'blue',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        borderRadius:10
    },
    khung:{
        margin:20
    },
    btnCapNhat:{
        width:180,
        height:40,
        backgroundColor:'#58A4E2',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10,
        borderWidth:1,
        borderColor:'white'
    },
    btnDoiMau:{
        marginTop:10,
        width:150,
        height:40,
        backgroundColor:'#58A4E2',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10,
        borderWidth:1,
        borderColor:'white'

    },
    
    txt:{
        color:'blue'
    }
});

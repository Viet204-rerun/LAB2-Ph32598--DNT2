import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

const Main123 = () => {
    const [footerInfo, setFooterInfo] = useState('');
    const handleSubmit=(inputValue:string)=>{
        setFooterInfo(inputValue);
    }
  return (
    <View>
        <Header />
        <Body onSubmit={handleSubmit} />
        <Footer info={footerInfo} />
    </View>
  )
}

export default Main123

const styles = StyleSheet.create({})

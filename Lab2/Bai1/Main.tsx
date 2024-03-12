import { StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

const Main = () => {
    const [headerInfo, setHeaderInfo] = useState('');
    const [headerInfo2, setHeaderInfo2] = useState('');
    const [time, setTime] = useState('');
    const [footerColor, setFooterColor] = useState('');

  
    const handleSubmit=(inputValue:string,inputValue2:string,time:string)=>{
        setHeaderInfo(inputValue);
        setHeaderInfo2(inputValue2);
        setTime(time)
    }
    const handleColor=(color:string)=>{
      setFooterColor(color)
    }

   
  return (
    <View style={styles.khung}>
        <Header info={headerInfo} info2={headerInfo2}/>
        <Body onSubmit={handleSubmit} onChangeColor={handleColor} />
        <Footer  time={time} backgroundColor={footerColor}/>
    </View>
  )
}

export default Main

const styles = StyleSheet.create({
  khung:{backgroundColor:'#BFCFDD',flex:1}
})

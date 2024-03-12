import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Footer = ({time, backgroundColor}: {time: string, backgroundColor: string}) => {
  const styles = StyleSheet.create({

    khung: {backgroundColor: backgroundColor ? backgroundColor : 'white', height: 100, position: 'absolute', bottom: 0, width: 410, alignItems: 'center', justifyContent: 'center'},
    txt: {color: "#709BBD", fontSize: 15},
    txt2: {color: 'blue', fontSize: 25}
  });

  return (
    <View style={styles.khung}>
        <Text style={styles.txt}>Thời gian bạn cập nhật thông tin:</Text>
        <Text style={styles.txt2}>{time}</Text>
    </View>
  )
}

export default Footer;

import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = ({info,info2}:{info:string,info2:string}) => {
  const ten = info ? info: 'Chưa có tên';
  const anh = info2 ? info2: 'https://cdn-icons-png.flaticon.com/128/3177/3177440.png'
  return (
    <View style={styles.khung}>
        <View style={{flexDirection:'row'}}>
          <Image style={styles.img}
          source={{uri:anh}}></Image>
          <View>
        <Text style={styles.txt}>Chào ngày mới</Text>
        <Text style={styles.txt2}>{ten}</Text>
        </View>
        </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  khung:{backgroundColor:'white',alignContent:'center',justifyContent:'center',paddingTop:10,paddingBottom:10,marginTop:20},
  txt2:{marginLeft:10,color:'blue',fontSize:20},
  txt:{marginLeft:10,color:'#709BBD',paddingTop:1,fontSize:15},
  img:{width:50,height:50,marginLeft:15}
})
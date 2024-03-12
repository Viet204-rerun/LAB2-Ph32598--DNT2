import { Button, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const lichTrinh=({diadiem,thoigian,phuongtien,thoigian2,hinhanh})=>{
    return(
    <View>
    <Text style={styles.txt}>Lịch Trình</Text>
    <View style={styles.khung}>
    <Text style={styles.txt2}>Địa điểm</Text>
    <Text style={styles.txt3}>{diadiem}</Text>
    <Text style={styles.txt2}>Thời gian</Text>
    <Text style={styles.txt3}>{thoigian}</Text>
    <Text style={styles.txt2}>Phương tiện di chuyển</Text>
    <Text style={styles.txt3}>{phuongtien}</Text>
    <Text style={styles.txt2}>Thời gian</Text>
    <Text style={styles.txt3}>{thoigian2}</Text>
    <Text style={styles.txt2}>Hình ảnh</Text>
    <Image style={styles.img} 
    source={hinhanh}></Image>
   </View>
   </View>
    )
}
const khachSan=({ten,gio,diadiem})=>{
    return(
        <View>
    <Text style={styles.txt}>Khách Sạn</Text>
    <View style={styles.khung2}>
    <Text style={styles.txt2}>Tên khách sạn</Text>
    <Text style={styles.txt3}>{ten}</Text>
    <Text style={styles.txt2}>Giờ mở cửa</Text>
    <Text style={styles.txt3}>{gio}</Text>
    <Text style={styles.txt2}>Địa điểm</Text>
    <Text style={styles.txt3}>{diadiem}</Text>
    <Button title='CHI TIẾT'></Button>
    </View>
        </View>
    )
}
const Bai2 = () => {
  return (
    <View style={{flex:1,backgroundColor:'#BFCFDD'}}>
        <View style={{margin:20}}>
        {lichTrinh({
            diadiem:"Hồ Tràm, Vũng Tàu",
            thoigian:"09:00 AM - 12:00 AM, 12/12/2024",
            phuongtien:"Xe bus",
            thoigian2:"21:00 - 22:00",
            hinhanh:{uri:'https://booking.pystravel.vn/uploads/posts/albums/6349/41791af76df4ab65d2690bee79b99a84.jpg'}})}
        {khachSan({
            ten:"Hồng Quỳnh",
            gio:"06:00 AM - 12:00 AM",
            diadiem:"234 Quang Trung, Hồ Chí Minh",
        })}
      </View>
    </View>
  )
}

export default Bai2

const styles = StyleSheet.create({
    txt:{fontSize:25,color:'blue',fontWeight:'bold'},
    khung:{borderWidth:1,borderColor:'blue',borderRadius:20,width:370,height:400,marginTop:10,backgroundColor:'white',padding:10,marginBottom:15},
    txt2:{fontSize:12,color:'#709BBD'},
    txt3:{marginBottom:20,color:'blue',fontSize:17},
    img:{width:345,height:110},
    khung2:{borderWidth:1,borderColor:'blue',borderRadius:20,width:370,height:240,marginTop:10,backgroundColor:'white',padding:10,marginBottom:15},

})
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const component=({title,img})=>{
    return(
        <View style={styles.container}>
        <TouchableOpacity style={styles.iconContainer} >
          <Image source={img} style={styles.icon} />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <TouchableOpacity style={styles.iconContainer}>
          <Image source={require('../face.png')} style={styles.icon} />
        </TouchableOpacity>
      </View>
  
      
    )
}
const component2=({title,img})=>{
    return(
        <View style={styles.container}>
        <TouchableOpacity style={styles.iconContainer} >
          <Image source={img} style={styles.icon} />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <TouchableOpacity style={styles.iconContainer}>
        </TouchableOpacity>
      </View>
  
      
    )
}
const component3=({img})=>{
    return(
        <View style={styles.container}>
        <TouchableOpacity style={styles.iconContainer} >
          <Image source={img} style={styles.icon} />
        </TouchableOpacity>
   
      </View>
  
      
    )
}
const Bai1 = () => {
  return (
   <View>
    {component({title:"Header",img:require('../back.png')})}
    {component2({title:"Trang Chủ",img:require('../back.png')})}
    {component3({img:require('../back.png')})}
    
   </View>
  );
};

export default Bai1;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  iconContainer: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 24,
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
    
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color:'black'

  },
});

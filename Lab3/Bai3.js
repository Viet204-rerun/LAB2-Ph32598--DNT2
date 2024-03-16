import React, { useState } from 'react';
import { Animated, FlatList, Image, PanResponder, ScrollView, StyleSheet, Text, View } from 'react-native';

const Bai33 = () => {
  const [expanded, setExpanded] = useState(false);
  
  
  const [animation] = useState(new Animated.Value(60)); // chiều cao ban đầu của header

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: (evt, gestureState) => true,
    onPanResponderMove: (evt, gestureState) => {
      const { dy } = gestureState;
      if (dy > 0 && !expanded) {
        Animated.spring(animation, {
          toValue: 200,
          useNativeDriver: false,
        }).start();
        setExpanded(true);
      } else if (dy < 0 && expanded) {
        Animated.spring(animation, {
          toValue: 60,
          useNativeDriver: false,
        }).start();
        setExpanded(false);
      }
    },
  });
  const data = [
    {id:'1',do:'25 Độ C',nang:'Nắng Nhòe Nhòe',gio:'Gió Mạnh Cấp 3'},
    {id:'2',do:'20 Độ C',nang:'Nắng Nà Ní',gio:'Gió Mạnh Cấp 4'},
    {id:'3',do:'15 Độ C',nang:'Nắng Nhộn Nhịp',gio:'Gió Mạnh Cấp 5'}
  ]
  const renderItem=({item})=>{
    return(
    <ScrollView>
    <View style={{flex:1,backgroundColor:'#62B3F5',padding:20}}>
    <Text style={{color:'white',fontSize:25,fontWeight:'bold'}} >Nắng</Text>
    <View style={{width:370,height:200,backgroundColor:'blue',borderRadius:10,borderWidth:2,borderColor:'white',justifyContent:'center'}}>
        <Text style={{marginLeft:20,color:'white'}}>{item.do}</Text>
        <Text style={{marginTop:20,marginLeft:20,color:'white',fontWeight:'bold',fontSize:20}}>{item.nang}</Text>
        <Text style={{marginTop:20,marginLeft:20,color:'white'}}>{item.gio}</Text>

    </View>
  </View>
  </ScrollView>
    )
  }
  return (
    <View style={styles.container} {...panResponder.panHandlers}>
      <Animated.View style={[styles.header, { height: animation }]}>
        {expanded && (
          <>
            <Image source={require('../face.png')} style={styles.image} />
            <Text style={styles.headerText}>
              Bạn Cảm Thấy Thời Tiết Ngày Hôm Nay Như Nào ?
            </Text>
          </>
        )}
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.txt}>Nắng</Text>
            <Text style={styles.txt}>Mưa</Text>
            <Text style={styles.txt}>Âm u</Text>
            <Text style={styles.txt}>Mát Mẻ</Text>
            <Text style={styles.txt}>Như Cức</Text>
          </View>
      </Animated.View>
          <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item=>item.id}></FlatList>
    </View>
  );
};

export default Bai33;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: '100%',
    backgroundColor: 'blue',
    justifyContent: 'center',
    paddingLeft: 20,
    paddingTop: 10,
  },
  image: {
    width: 50,
    height: 50,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 10,
  },
  txt: {
    color: 'white',
    fontSize: 15,
    marginRight: 45,
    marginTop: 20,
  },
});

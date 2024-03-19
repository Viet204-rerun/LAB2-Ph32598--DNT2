//cai thu vien: npm i expo-av
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Audio } from 'expo-av';

const L41 = () => {
    const [sound, setSound] = useState(null);
    //---dinh nghia ham
    async function play(){
        const {sound} = await Audio.Sound.createAsync(
            {uri:'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'}
        );
        setSound(sound);
        await sound.playAsync();
    }
    //dinh nghia tam dung
    async function pause(){
        if(sound){
            await sound.stopAsync();
        }
    }
  return (
    <View>
      <Text>Vi du ve nghe nhac</Text>
      <View>
        <TouchableOpacity onPress={play}>
            <Text>Play</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={pause}>
            <Text>Pause</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default L41

const styles = StyleSheet.create({})
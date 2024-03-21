import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { usePlayTrack } from './playbackService'; // Import your playback service function
import { AddTrack, State } from 'react-native-track-player'; // Import the necessary types
import Slider from '@react-native-community/slider';
const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };
interface MusicPlayerProps {
  playlist: AddTrack[]; // Define the type for the playlist
}

const MusicPlayer1: React.FC<MusicPlayerProps> = ({ playlist }) => {
  const { 
    onTogglePlayTrack, 
    onSeekTo, 
    onSkipToNext, 
    onSkipToPrevious, 
    playBackState, 
    duration, 
    position, 
    trackTitle, 
    trackArtist, 
    trackArtwork 
  } = usePlayTrack(playlist); // Use the usePlayTrack hook with your playlist
  const formattedDuration = formatTime(duration);
  const formattedPosition = formatTime(position);


  // Log các giá trị trạng thái ra console
  console.log('playBackState:', playBackState);
  console.log('duration:', duration);
  console.log('position:', position);
  console.log('trackTitle:', trackTitle);
  console.log('trackArtist:', trackArtist);
  console.log('trackArtwork:', trackArtwork);

  return (
    <View style={styles.container}>
      <Image source={trackArtwork ? { uri: trackArtwork } : undefined} style={styles.artwork} />

      <Text style={styles.title}>{trackTitle}</Text>
      <Text style={styles.artist}>{trackArtist}</Text>
      
      <Slider
                style={styles.slider}
                minimumValue={0}
                maximumValue={duration}
                value={position}
           onValueChange={(value) => onSeekTo(value)} // Gọi hàm onSeekTo khi người dùng thả thanh trượt
                minimumTrackTintColor="#00f"
                maximumTrackTintColor="#000"
                thumbTintColor="#00f"
            />
      <View style={styles.controls}>

<TouchableOpacity onPress={() => onSkipToPrevious()}>
  <Image source={require('./left1.png')}
  style={{width:25,height:25,marginRight:20}}></Image>
</TouchableOpacity>
 
        <TouchableOpacity onPress={onTogglePlayTrack}>
       {playBackState === State.Playing ? (   <Image source={require('./pause.png')}
  style={{width:30,height:30,resizeMode:'center'}}></Image>) : (      <Image source={require('./play.png')}
  style={{width:30,height:30,resizeMode:'center'}}></Image>)}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onSkipToNext()}>
        <Image source={require('./right.png')}
  style={{width:25,height:25,marginLeft:20}}></Image>
</TouchableOpacity>

      </View>
   
      <Text style={{color:'#E4EC46'}}>{formattedPosition} / {formattedDuration}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#70BFFF'
  },
  artwork: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color:'#EE7E76'
  },
  artist: {
    fontSize: 16,
    color:'#8BFC3F'

  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  controlText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  slider: {
    width: '80%',
    marginBottom: 20,
},
});

export default MusicPlayer1;

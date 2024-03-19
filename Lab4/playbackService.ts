import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TrackPlayer, { Event } from 'react-native-track-player';

const playbackService = async() => {
  TrackPlayer.addEventListener(Event.RemotePause,()=>{
    TrackPlayer.pause();
})
TrackPlayer.addEventListener(Event.RemotePlay,()=>{
    TrackPlayer.play();
})
TrackPlayer.addEventListener(Event.RemoteNext,()=>{
    TrackPlayer.skipToNext();
})
TrackPlayer.addEventListener(Event.RemotePrevious,()=>{
    TrackPlayer.skipToPrevious();
})
TrackPlayer.addEventListener(Event.RemoteSeek,({position})=>{
    TrackPlayer.seekTo(position);
})

}

export default playbackService

import { Button, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import TrackPlayer, { AddTrack, Capability, Event, RepeatMode, State, usePlaybackState, useProgress, useTrackPlayerEvents } from 'react-native-track-player';
const startPlayer = async (setSetupDone:(isSetupDone:boolean)=>void)=>{
    try {
        await TrackPlayer.setupPlayer().finally(()=> setSetupDone(true));
        await TrackPlayer.updateOptions({
            capabilities:[
                Capability.Play,
                Capability.Pause,
                Capability.Stop,
                Capability.SeekTo,
                Capability.SkipToNext,
                Capability.SkipToPrevious,
            ]
        });
        await TrackPlayer.setRepeatMode(RepeatMode.Off);
    
    } catch (error) {
        console.log('[Error player]',error);
        
    }
    
}

 export const usePlayTrack =(playListData:AddTrack[]) =>{
    const playBackState = usePlaybackState();
    const [isSetupDone,setSetupDone] = useState(false);
    const {duration,position} = useProgress();
    const [trackTitle,setTrackTitle] = useState<string>();
    const [trackArtist,setTrackArtist] = useState<string>();
    const [trackArtwork,setTrackArtwork] = useState<string>();
    useTrackPlayerEvents([Event.PlaybackActiveTrackChanged],async event =>{
        const {title,artwork,artist} =event?.track || {};
        if(event.type === Event.PlaybackActiveTrackChanged && !!event?.track){
            setTrackTitle(title);
            setTrackArtist(artist);
            setTrackArtwork(artwork);
        }
    })
    useEffect(()=>{
        startPlayer(setSetupDone);
        return()=>{
            TrackPlayer.reset();
        };
    },[]);
    useEffect(()=>{
        if(!!isSetupDone && !!playListData){
            TrackPlayer.getActiveTrack().then(async activeTrack =>{
                if(!activeTrack){
                    await TrackPlayer.add(playListData);
                }
            })
        }
    },[isSetupDone,playListData])
    

    const onTogglePlayTrack = async () =>{
        if (playBackState.state === State.Playing){
            await TrackPlayer.pause();
        }else{
            await TrackPlayer.play();
        }
    }
    const onSeekTo = (toTime: number)=>{
        TrackPlayer.seekTo(toTime);
    }
    const onSkipToNext = (initialPosition?:number) =>{
        TrackPlayer.skipToNext(initialPosition)
    }
    const onSkipToPrevious = (initialPosition?:number) =>{
        TrackPlayer.skipToPrevious(initialPosition)
    }
    return{
        onTogglePlayTrack,
        onSeekTo,
        onSkipToNext,
        onSkipToPrevious,
        playBackState: playBackState.state,
        duration,
        position,
        trackTitle,
        trackArtist,
        trackArtwork,
    }
    
}


// Khai báo danh sách âm thanh
export const playlist: AddTrack[] = [
    {
        id: '1',
        url: require('./nhac/nhac2.mp3'),
        title: 'Bài Hát Giấu Tên',
        artist: 'Ca Sĩ Giấu Họ',
        artwork: 'https://th.bing.com/th/id/OIP.3w_uTbi0moy3zsE-822nbAHaEK?rs=1&pid=ImgDetMain'
    },
    {
        id: '2',
        url: require('./nhac/nhac1.mp3'),
        title: 'Bài Hát Giấu Tên',
        artist: 'Ca Sĩ Giấu Họ',
        artwork: 'https://mega.com.vn/media/news/1507_hinh-nen-luffy-gear-5-one-piece-cuc-ngau8.jpg'
    },
    {
        id: '3',
        url: require('./nhac/nhac2.mp3'),
        title: 'Bài Hát Giấu Tên',
        artist: 'Ca Sĩ Giấu Họ',
        artwork: 'https://th.bing.com/th/id/R.d353dbc7a9f9df663343a22ba071d565?rik=X4ABrotto5jGvA&pid=ImgRaw&r=0'
        
    },
    {
        id: '4',
        url: require('./nhac/nhac3.mp3'),
        title: 'Bài Hát Giấu Tên',
        artist: 'Ca Sĩ Giấu Họ',
        artwork: 'https://cdnb.artstation.com/p/assets/images/images/026/142/657/large/sleepy-jhin-roronoa-zoro-portrait.jpg?1587999560'

    },
    {
        id: '5',
        url: require('./nhac/nhac4.mp3'),
        title: 'Bài Hát Giấu Tên',
        artist: 'Ca Sĩ Giấu Họ',
        artwork: 'https://th.bing.com/th/id/R.f8a44cded46c3cd301bbf557768a33d5?rik=084vc4GbCXHZVA&pid=ImgRaw&r=0'

    }
];

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
} = usePlayTrack(playlist);



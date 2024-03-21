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
        url: require('../nhac1.mp3'),
        title: 'Bài Hát Không Tên',
        artist: 'Ca Sĩ Không Họ',
        artwork: 'https://th.bing.com/th/id/OIP.3w_uTbi0moy3zsE-822nbAHaEK?rs=1&pid=ImgDetMain'
    },
    {
        id: '2',
        url: 'https://example.com/song2.mp3',
        title: 'Bài Hát Không Tên',
        artist: 'Ca Sĩ Không Họ',
        artwork: 'https://th.bing.com/th/id/OIP.3w_uTbi0moy3zsE-822nbAHaEK?rs=1&pid=ImgDetMain'
    },
    {
        id: '3',
        url: 'https://example.com/song2.mp3',
        title: 'Bài Hát Không Tên',
        artist: 'Ca Sĩ Không Họ',
        artwork: 'https://th.bing.com/th/id/OIP.3w_uTbi0moy3zsE-822nbAHaEK?rs=1&pid=ImgDetMain'
        
    },
    {
        id: '4',
        url: 'https://example.com/song2.mp3',
        title: 'Bài Hát Không Tên',
        artist: 'Ca Sĩ Không Họ',
        artwork: 'https://th.bing.com/th/id/OIP.3w_uTbi0moy3zsE-822nbAHaEK?rs=1&pid=ImgDetMain'

    },
    {
        id: '5',
        url: 'https://example.com/song2.mp3',
        title: 'Bài Hát Không Tên',
        artist: 'Ca Sĩ Không Họ',
        artwork: 'https://th.bing.com/th/id/OIP.3w_uTbi0moy3zsE-822nbAHaEK?rs=1&pid=ImgDetMain'

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



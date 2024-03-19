import { AppRegistry, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import TrackPlayer, { AddTrack, Capability, Event, RepeatMode, State, usePlaybackState, useProgress, useTrackPlayerEvents } from 'react-native-track-player';
import App from '../App';
await TrackPlayer.setupPlayer()

   export const playbackService = async ()=>{
        TrackPlayer.addEventListener(Event.RemotePause,()=>{
            TrackPlayer.pause();
        });
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




// Component chính của bạn
const Bai3: React.FC = () => {
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
        trackArtwork,
    } = usePlayTrack();

    return (
        <View>
            {/* Hiển thị thông tin bài hát */}
            <Text>{trackTitle}</Text>
            <Text>{trackArtist}</Text>
            <Text>{playBackState}</Text>
            {/* Nút điều khiển */}
            <Button title="Play/Pause" onPress={onTogglePlayTrack} />
            <Button title="Next" onPress={onSkipToNext} />
            <Button title="Previous" onPress={onSkipToPrevious} />
            {/* Hiển thị thanh trạng thái */}
            <Text>{position} / {duration}</Text>
            {/* Hiển thị artwork */}
            {trackArtwork && <Image source={{uri: trackArtwork}} style={{width: 50, height: 50}} />}
        </View>
    );
};

export default Bai3
// module.exports = async function() {
//     // Service này cần được đăng ký để module hoạt động
//     // nhưng nó sẽ được sử dụng sau trong phần 'Receiving Events'
// }


const styles = StyleSheet.create({})
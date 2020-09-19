import React, { useRef, useState } from 'react';

export default function VideoPlayer() {
    const videoRef = useRef();
    const [playing, setplaying] = useState(false);

    return (
        <div className={`video_player ${playing ? 'playing' : ''}`}>
            <video onEnded={()=>{
                setplaying(false);
            }} ref={videoRef} src={require("../../assets/videos/quote.mp4")}></video>
            <div className="video_player__play_pause" onClick={()=>{
                setplaying(!playing);
                if(!playing) videoRef.current.play();
                else videoRef.current.pause();
            }}>
                <i className={playing ? "ion-ios-pause" : "ion-ios-play"}></i>
            </div>
        </div>
    )
}

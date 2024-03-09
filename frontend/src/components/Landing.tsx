import { useEffect, useRef, useState } from "react"
import { TextField,Button,Card } from "@mui/material";
import { Room } from "./Room";

export const Landing = () => {
    const [name, setName] = useState("");
    const [localAudioTrack, setLocalAudioTrack] = useState<MediaStreamTrack | null>(null);
    const [localVideoTrack, setLocalVideoTrack] = useState<MediaStreamTrack | null>(null);
    const videoRef = useRef<HTMLVideoElement>(null);

    const [joined, setJoined] = useState(false);

    const getCam = async () => {
        const stream = await window.navigator.mediaDevices.getUserMedia({
            video: true,
            audio: true
        })
        // MediaStream
        const audioTrack = stream.getAudioTracks()[0];
        const videoTrack = stream.getVideoTracks()[0];
        setLocalAudioTrack(audioTrack);
        setLocalVideoTrack(videoTrack);
        if (!videoRef.current) {
            return;
        }
        videoRef.current.srcObject = new MediaStream([videoTrack]);
        videoRef.current.play();
        


        // MediaStream
    }
    console.log(getCam);

    useEffect(() => {
        if (videoRef && videoRef.current) {
            getCam()
        }
    }, [videoRef]);

    if (!joined) {
            
    return <div>
            <video autoPlay ref={videoRef}></video>
            <br/><br/>
            <TextField onChange={(e)=>{
            setName(e.target.value);
         }} id="outlined-basic" type="text"  label="Your Interest" helperText="Please enter what kind of people you want to talk" color="success" size="small" variant="outlined" />
            <span>    </span>
          
            
            <Button onClick={() => {
                setJoined(true);
            }} variant="contained" color="success" >Join</Button>
        </div>
    }

    return <Room name={name} localAudioTrack={localAudioTrack} localVideoTrack={localVideoTrack} />
}
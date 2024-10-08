import React,{useRef} from 'react'

import './VideoPlayer.css'
function VideoPlayer({playstate,setplaystate}) {
    const player = useRef(null);
    const closePlayer =(e)=>{
        if(e.target === player.current){
            setplaystate(false);

        }
    }


  return (
    <div className={`videoplayer ${playstate ? '' : 'hide'}`} ref={player} onClick={closePlayer}>
       <video src='https://videos.pexels.com/video-files/2002527/2002527-sd_640_360_30fps.mp4' autoPlay muted controls></video>

    </div>
  )
}

export default VideoPlayer
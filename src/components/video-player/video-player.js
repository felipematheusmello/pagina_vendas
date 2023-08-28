import { useState } from "react"
import './video-player.css'
import video from "./opiniao_certa.mp4"
import {BiSolidVolumeMute} from "react-icons/bi"
function VideoPlayer() {
    const [isMuted, setIsMuted] = useState('muted')
    const [hidden, setHidden] = useState(false)

    const activeVideo = () => {
        setHidden(true)
        setIsMuted(false)
    }
    return (
            <div className="container-video">
            <div className="active-video" hidden={hidden} onClick={() => {activeVideo()}}>
                <div className="text spacing-my resp-txt">
                    CLIQUE PARA APRENDER A BAIXAR
                </div>
                    <div>
                        <BiSolidVolumeMute className="sound-icon"/>
                    </div>
                    <div className="text spacing-top-x resp-txt" >
                        E JA RECEBER HOJE
                    </div>
            </div>
            <video
                    muted={isMuted}
                    autoPlay='autoplay'
                    src={video}
                    width="800"
                    playsinline
                    style="-webkit-appearance: none;"
                    height="400"/>
            </div>
    )
}

export default VideoPlayer
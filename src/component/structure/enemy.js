import ReactPlayer from 'react-player';
import React, { useRef } from 'react';
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";

import './tec.css'
const VIDEO_PATH = 'https://www.youtube.com/watch?v=LbJNPYlhO40';
function Enemy() {
    const { width, height } = useWindowSize();
    const playerRef = useRef(null);

    let user = localStorage.getItem('user')
    let parsedUser = JSON.parse(user);

    let message = parsedUser.message;
    return (
        <div className='final'>
            <div className='image_arrange'>
                <Confetti width={width} height={height} numberOfPieces={100} />
                <img
                    alt="bg-img"
                    className="bg-img"
                    src="https://annapimenta.pl/wp-content/uploads/2019/09/Where_to_buy_an_engagement_ring_in_Cracow_photographer_surprise_proposal-9-1000x550.jpg"
                />
                <div className='collection'>
                    <ReactPlayer className='player' ref={playerRef} url={VIDEO_PATH} controls={true} />
                    <div className='heading'>
                    <h2 class="rainbow-text">{message}</h2>
                    </div>
                    
                </div>
            </div>

        </div>
    )
};
export default Enemy;
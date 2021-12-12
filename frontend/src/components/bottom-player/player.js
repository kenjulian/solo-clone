import React from 'react';
import ReactAudioPlayer from 'react-audio-player';

import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom';


const songPlayer = () => {
    const song = useSelector(state => (state.trackplayer.song));
    // const allSongs = useSelector(state => Object.entries((state.songs)));

    if (!song) return null;

    return (
        <div className="player-container">
            <ReactAudioPlayer className="play-song" autoPlay src={song.songUrl}/>
               
            
            <div className='current-song'>
                <div className='song-pic' style={{backgroundImage:'url(' + song.imageUrl + ')'}}></div>
                <div className="song-details">
                    <p className='song-username-sm'>{song.User.username}</p>
                    <Link className='song-link-text song-title-sm' to={{pathname: `/songs/${song.id}`}}>
                        <p>{song.title}</p>
                    </Link>
                </div>
            </div>
        </div>
    );
};



export default Player;
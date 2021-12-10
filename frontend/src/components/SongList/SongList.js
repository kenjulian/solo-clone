import { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactAudioPlayer from 'react-audio-player';

import { listSongs } from '../../store/songs';
import {Link} from 'react-router-dom';
//display all current songs in homepage
const SongList = () => {
    const dispatch = useDispatch();
    const songs = useSelector(state => state.songs);
    //const songs = useSelector(state => Object.values(state.songs))

    console.log(songs, 'yerrrrrrrrr')

    useEffect(() => {
        dispatch(listSongs());
    }, [dispatch]);
    


    return (
        <div className="songs-container">
            <h2>Listen to the most chill beats ever.</h2>
            <div>
                {/* {Object.values(songs).map((song) => {
                    return (
                        <div key={song.id} className="single-song">

                            
                           <ReactAudioPlayer src={song.songUrl} />
                           <p className="songtitle">{song.title}</p>

                        </div>
                    )
                })} */}

            </div>
        </div>

    )
}

export default SongList;
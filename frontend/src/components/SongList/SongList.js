import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listSongs } from '../../store/songs';
import {Link} from 'react-router-dom';
import "./SongList.css";
//import *  as songFuncs from '../../store/songs';
import { trackPlayer } from '../../store/trackplayer';


//display all current songs in homepage
const SongList = () => {
    const dispatch = useDispatch();
    const objList = useSelector(state => state.songs);

    //console.log(objList, 'huhuuuhu');
    
    const songs = Object.values(objList);


    useEffect(() => {
        dispatch(listSongs());
    }, [dispatch]);

    const player = useCallback((song) => {
        dispatch(trackPlayer(song));
    }, [dispatch]);

    if (!songs) {
        return null;
    }
    

    //console.log(songs, 'yerrrrrrrrr')

    


    return (
        <div className="songs-container">
            <h3>Listen to the most chill beats ever.</h3>
            <div>
                {songs.map((single) => {
                    return (
                        <div key={single.id} className="single-song-container">
                            //<ReactAudioPlayer className="play" autoPlay src={single.songUrl} />
                                    <div className="pic-container" style={{backgroundImage:"url(" + single.picUrl + ")"}}>
                                        <div className="play-container">
                                            <button className="play-button list-play" 
                                            onClick={() => 
                                            player(single)}></button>
                                        </div>
                                    </div>
                                <Link className="song-url" to={{pathname: `/songs/${single.id}`}}>
                                    <p>{single.title}</p>
                                </Link>
                                    <p className="song-user-link">{single.User?.username}</p>

                        </div>
                    );
                })}

            </div>
        </div>

    );
};

export default SongList;
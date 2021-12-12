import React from 'react';
//import ReactAudioPlayer from 'react-audio-player';
import { useEffect, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listSongs, removeSong } from '../../store/songs';
import {Link} from 'react-router-dom';
import "./SongList.css";
//import *  as songFuncs from '../../store/songs';
import { trackPlayer } from '../../store/trackplayer';
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";


//display all current songs in homepage
const SongList = () => {
    const dispatch = useDispatch();
    const objList = useSelector((state) => state.songs);
    const sessionUser = useSelector((state) => state.session.user);
    const [songToPlay, setSongToPlay] = useState(null);
  
    //console.log(objList, 'huhuuuhu');
    const songs = Object.values(objList);
        
    useEffect(() => {
        dispatch(listSongs());
    }, [dispatch]);
  
    const player = useCallback(
      (song) => {
        // console.log(song)
        setSongToPlay(song);
        dispatch(trackPlayer(song));
      },
      [dispatch]
    );
  
    if (!songs) {
      return null;
    }
  
    const handleDelete = async (song) => {
      await dispatch(removeSong(song));  
    };
  
    return (
      <div>
        <div className="songs-container">
          <h3>Listen to the most chill beats ever.</h3>
          <div>{songs.map((single) => {
              return (
                <div key={single.id} className="single-song-container">
                  <div className="pic-container" style={{ backgroundImage: "url(" + single.picUrl + ")" }}>
                    <div className="play-container">
                      <button className="play-button list-play" onClick={() => player(single)}></button>
                    </div>
                  </div>
  
                  <div className="actions">
                    <Link className="song-url" to={{ pathname: `/songs/${single.id}` }}>
                        <p>{single.title}</p>
                    </Link>
                    {sessionUser && single.userId === sessionUser.id && (
                      <div className="song-url delete">
                        <p style={{ color: "red", cursor: "pointer" }} onClick={(e) => handleDelete(single)}>
                          Delete
                        </p>
                      </div>
                    )}
                  </div>
  
                  <p className="song-user-link">{single.User?.username}</p>
                </div>
              );
            })}
          </div>
        </div>
  
        <div className="audio-player-wrapper">
          {
            songToPlay && (
              <AudioPlayer
                src={songToPlay.songUrl}
                autoPlay={true}
                autoPlayAfterSrcChange={true}
                // Try other props!
              />
            )
            //  < ReactAudioPlayer className="play" src={songToPlay.songUrl} autoPlay={true} controls={true} />
          }
        </div>
      </div>
    );
  };
  
  export default SongList;
  
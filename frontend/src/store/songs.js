import {csrfFetch} from "./csrf";

const TRACK_PLAYER = 'player/trackplayer';
const LIST_SONGS = 'song/listSongs';

//action creator to listen to a track
export const trackPlayer = (song) => ({
    type: TRACK_PLAYER,
    song
});



//action creator returns a thunk to load songs on homepage
export const allSongs = (list) => ({
    type: LIST_SONGS,
    list
});

export const listSongs = () => async (dispatch) => {
    const res = await csrfFetch('/api/songs');
    //console.log(res, 'yoyoyoyyo')

    if (res.ok) {
        const list = await res.json()
        console.log(list, "yoo")
        dispatch(allSongs(list.songs));

        
    }
}

export const trackReducer = (state = {}, action) => {
    switch(action.type) {
        case TRACK_PLAYER: {
            const newState = {...state, track:action.song};
            return newState
        }
        default:
            return state;
        }
        
    }


//song reducer
export default function songReducer(state = {}, action) {
    switch (action.type) {
        case LIST_SONGS: {
            const newState = { ...state };
            action.list.forEach(song => {
                newState[song.id] = song;
            });

            return newState;
        }
        default:
            return state;
    }
}

//export default songReducer;
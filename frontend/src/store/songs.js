import {csrfFetch} from "./csrf";


const LIST_SONGS = 'song/listSongs';
const POST_SONG = 'song/postsong';
const UPDATE_SONG = 'song/updatesong';
const DELETE_SONG = 'song/deletesong';



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
        //console.log(list, "yoo")
        dispatch(allSongs(list));

        
    }
}

//action creator and thunk to post a song as a user
export const postSong = (addSong) => ({
    type: POST_SONG,
    addSong
})

export const postingSong = (addSong) => async (dispatch) => {
    const res = await csrfFetch('api/songs', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(addSong)
    });

    if (res.ok) {
        const newSong = await res.json();
        dispatch(postSong(newSong));
        return newSong;

    }
}

//action creator and thunk to update a song 
export const update = (song) => ({
    type: UPDATE_SONG,
    song
});

export const updateSong = (id ,song) => async (dispatch) => {
    console.log(id)
    const res = await csrfFetch(`/api/songs/${id}`, {
        method: 'PUT',
        body: JSON.stringify(song)

    })

    if (res.ok) {
        const song = await res.json();
        dispatch(update(song));
        return song;
    }
}

export const deleteSong = (song) => ({
    type: DELETE_SONG,
    song
}); 

//delete song action and thunk
export const removeSong = (song) => async (dispatch) => {
    const res = await csrfFetch(`/api/songs/${song.id}`, {
        method: 'DELETE'
    });

    if (res.ok) {
        dispatch(deleteSong(song))
    }
}
 let newState = {};
//song reducer
export default function songReducer(state = {}, action) {
    console.log(action.type,"action.type")
    switch (action.type) {
        case LIST_SONGS: {
            newState = {...state};
            action.list.forEach(song => {
                newState[song.id] = song;
            });

            return newState;
        }
        case POST_SONG: 
            return {...state, [action.addSong.id]: action.addSong.id
            }
            // const newState = {...state};
            // newState[action.addSong.id] = action.addSong;
            // return newState;

        
        case UPDATE_SONG: 
            return {...state, [action.song.id]: action.song
            }
            // const newState = {};
            // newState[action.song.id] = action.song;
            // return newState;
        
        case DELETE_SONG: {
            newState = {...state};
            delete newState[action.song.id]
            return newState;
        }
        default:
            return state;
    }
}

//export default songReducer;

export const TRACK_PLAYER = 'player/trackplayer';

//action creator to listen to a track
export const trackPlayer = (song) => ({
    type: TRACK_PLAYER,
    song
});

// // let newState = {
// //     song:null
// };
export const trackReducer = (state = {}, action) => {
    switch(action.type) {
        case TRACK_PLAYER: {
            const newState = {...state, track:action.song};
            return newState
        }
        default:
            return state;
        }
        
    };

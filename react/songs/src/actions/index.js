// Action creator

// Add export at the begging of the method to use 'Named export'
export const selectSong = (song) => {
    //Return an action
    return {
        type: 'SONG_SELECTED',
        payload: song
    };
};




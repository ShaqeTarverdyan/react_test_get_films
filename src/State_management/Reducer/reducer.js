import React from 'react';

const initialState = {
    loading: false,
    serachFilm: '',
    films: ''
}

const reducer = (state = initialState, action) => {
    const newState = { ...state }

    if (action.type === 'GET_FILM') {
        return {
            ...newState,
            loading: false,
            films: action.payload
        }
    }
    else if (action.type === 'GET_INPUT') {
        const event = action.payload;
        const newFilm = { ...newState, [event.target.name]: event.target.value }
        console.log('Input_result', newFilm);
        return newFilm;
    }
    else if (action.type === 'LOADING') {
        newState.loading = true
    }
    return newState;
}

export default reducer;
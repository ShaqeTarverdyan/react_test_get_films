import React from 'react';
import store from '../Store/store';


export const getFilm = (resp) => {
    return { type: 'GET_FILM', payload: resp }
}

export const getInput = (event) => {
    return { type: 'GET_INPUT', payload: event }
}

export const loading = () => {
    return { type: 'LOADING' }
}

export const makeRequest = (val) => {
    return dispatch => {
        dispatch(loading());
        fetch(`http://www.omdbapi.com/?t=${val}&apikey=d6dae3f1&plot=full`)
            .then(response => response.json())
            .then(resp => {
                dispatch(getFilm(resp))
            }
            )
    }
}
console.log(store.getState())
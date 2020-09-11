import axios from 'axios';

export const FETCH_SUCCESS = 'FETCH_SUCCESS'
export const FETCH_ERROR = 'FETCH_ERROR'
export const POST_SUCCESS = 'POST_SUCCESS'
export const POST_ERROR = 'POST_ERROR'

export const getSmurfsAction = () => {
    return function(dispatch){
        axios.get(`http://localhost:3333/smurfs`)
            .then(res => {
                dispatch({
                    type: FETCH_SUCCESS,
                    payload: res.data
                }) 
                console.log('api called with response data: ', res.data)
            })
            .catch(err => {
                dispatch({
                    type: FETCH_ERROR,
                    payload: err
                })
            })
    }
}

export const postSmurfAction = (smurf) => {
    return function(dispatch){
        console.log(smurf)
        axios.post(`http://localhost:3333/smurfs`, smurf)
            .then(res => {
                dispatch({
                    type: POST_SUCCESS,
                })
            })
            .catch (err => {
                dispatch({
                    type: POST_ERROR,
                    payload: err
                })
            }) 
    }
}
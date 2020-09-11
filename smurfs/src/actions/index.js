import axios from 'axios';

export const FETCH_SUCCESS = 'FETCH_SUCCESS'
export const FETCH_ERROR = 'FETCH_ERROR'
export const POST_SUCCESS = 'POST_SUCCESS'
export const POST_ERROR = 'POST_ERROR'

export const getSmurfsAction = () => {
    return function(dispatch){
        async function axiosGetter(){
            let res = await axios.get(`http://localhost:3333/smurfs`)
            return res;
        }
        try {
            let dataForState = axiosGetter();
            dispatch({
                type: FETCH_SUCCESS,
                payload: dataForState
            })
        }
        catch (e){
            dispatch({
                type: FETCH_ERROR,
                payload: e
            })
        }
    }
}

export const postSmurfAction = () => {
    return function(dispatch){
        dispatch({
            type: POST_SUCCESS,
        })
    }
}
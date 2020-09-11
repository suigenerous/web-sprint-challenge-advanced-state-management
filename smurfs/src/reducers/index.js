import {FETCH_SUCCESS, FETCH_ERROR, POST_SUCCESS, POST_ERROR} from '../actions';

const initialState = {
    smurfData: [{
        name: "Brainey",
        age: 200,
        height: "5cm",
        id: 0
      },],
    fetchError: '',
    smurfToAdd: {},
    didSmurfPost: false,
    postError: ''
}

export const smurfReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_SUCCESS:
            return {...state, smurfData: action.payload}
        default:
            return state;
    }
}
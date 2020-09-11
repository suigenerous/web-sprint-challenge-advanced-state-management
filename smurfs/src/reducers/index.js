const initialState = {
    smurfData: [],
    fetchError: '',
    smurfToAdd: {},
    didSmurfPost: false,
    postError: ''
}

export const smurfReducer = (state = initialState, action) => {
    switch(action.type){
        default:
            return state;
    }
}
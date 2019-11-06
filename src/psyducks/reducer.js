const initialState = {
    user: null,
    id: 0
}

export const SET_USER = 'SET_USER';
export const SEND_ID = 'SEND_ID';

export default function reducer(state = initialState, action){
    const {type, payload} = action;
    switch(type){
        case SET_USER:
            return {user: payload};
        case SEND_ID:
            return {id: payload};
        default:
            return state;
    }
}

export function setUser(user){
    return {
        type: SET_USER,
        payload: user
    }
}

export function sendID(id){
    return {
        type: SEND_ID,
        payload: id
    }
}

import { FETCH_USER } from '../actions/types';

const defaultState = {
    auth: null,
    authFetched: false,
};

export default function (state = defaultState, action){
    switch(action.type){
        case FETCH_USER:
            return { ...state, auth: action.data || false, authFetched: true }
        default:
            return state;
    }
}
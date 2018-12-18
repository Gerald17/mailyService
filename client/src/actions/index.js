import { FETCH_USER } from './types';
import * as api from '../api/user';


export const fetchUser = () => {
    return async function(dispatch){
        const res = api.get('/api/current_user');
        res.then(r => dispatch({ type: FETCH_USER, data: r.data }));
    };
};


export const handleToken = token => async dispatch => {    
    return async function(dispatch){
        const res = api.post('/api/stripe', token)
        res.then(r => dispatch({ type: FETCH_USER, data: r.data }));
    };
    //const res = api.post('/api/stripe', token)
    //res.then(r => dispatch({ type: FETCH_USER, data: r.data }));
}
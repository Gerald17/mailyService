import { FETCH_USER } from './types';
import * as api from '../api/user';


export const fetchUser = () => {
    return function(dispatch){
        api
            .get('/api/current_user')
            .then(res => dispatch({ type: FETCH_USER, data: res.data }));
    };
};

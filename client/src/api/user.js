import axios from 'axios';

const api = axios.create({
    timeout: 0,    
    headers: {
      'Content-Type' : 'application/json'
    }
});  

export function get(endpoint){  
  const request = api.get(endpoint);
  return request;
};

export function post(endpoint, token){  
  const request = api.post(endpoint, token);
  return request;
};

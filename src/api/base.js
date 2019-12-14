import axios from 'axios';
import { Authentication } from 'helpers';

const URL = 'http://localhost:3000/api';
export const BASE_URL = (url) => URL + url;

let request =axios.create({
  baseURL: URL,
});
request.defaults.headers['Authorization'] = Authentication.isAuthenticated() 
? 'Basic ' + Authentication.getCredentials() 
: null;

export default request;

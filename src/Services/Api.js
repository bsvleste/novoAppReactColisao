import axios from 'axios';
const local = 'http://192.168.137.1:3001';
const remoto = 'https://backendcolisao.herokuapp.com';

const Api = axios.create({
	baseURL:remoto,
})
export default Api;
import axios from 'axios';
const local = 'http://192.168.15.72:3333/api/colisao/v2/';
const remoto = 'https://backendcolisao.herokuapp.com/api/colisao/v2/';

const Api = axios.create({
	baseURL:remoto,
})
export default Api;
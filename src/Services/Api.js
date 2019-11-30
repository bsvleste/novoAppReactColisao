import axios from 'axios';

const Api = axios.create({
	//baseURL:'https://backendcolisao.herokuapp.com',
	baseURL:'http://192.168.137.1:3001',
})
export default Api;
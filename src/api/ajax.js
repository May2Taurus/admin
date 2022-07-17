import axios from 'axios';

const BASE_URL = 'http://localhost:8080'

export default function ajax(url, params={}, method='GET') {
	return new Promise((resolve, reject) => {
		let promise;
		url = BASE_URL + url;
		if (method === 'GET') {
			promise = axios.get(url, {
				params: params
			});
		} else {
			promise = axios.post(url, params);
		}
		
		promise.then(response => {
			resolve(response.data);
		}).catch(error => {
			console.log('请求错误：' + error);
		})
	})
}

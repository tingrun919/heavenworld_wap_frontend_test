import axios from 'axios'
import main from '../main'

axios.defaults.baseURL = 'http://www.tiantangshijie.com:8080/';//正式 
// axios.defaults.baseURL = 'http://192.168.10.196:8080/';//公司
// axios.defaults.baseURL = 'http://127.0.0.1:8080/';//自己
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
class API {

	get(url, params) {
		return axios.get(url, params);
	}

	post(url, params) {
		return axios.post(url, params);
	}

}
export default API;

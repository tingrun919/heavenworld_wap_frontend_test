/*
 * @Author: tarn.tianrun 
 * @Date: 2018-02-07 16:26:54 
 * @Last Modified by: tarn.tianrun
 * @Last Modified time: 2018-03-21 10:47:06
 */

const app = {
	state: {
		currentPageName: '推荐',
		currentPageFromIos: false,
		currentPageFromAndroid: false,
		information:[],
		panoramic:[],
		userToken:'',
		userId:'',
	},
	mutations: {
		setCurrentPageName(state, name) {
			state.currentPageName = name;
		},
		setCurrentPageFromIos(state, name) {
			state.currentPageFromIos = name;
		},
		setCurrentPageFromAndroid(state, name) {
			state.currentPageFromAndroid = name;
		},
		setInformation(state, name){
			state.information = name;
		},
		setPanoramic(state, name){
			state.panoramic = name;
		},
		setUserToken(state, name){
			state.userToken = name;
		},
		setUserId(state, name){
			state.userId = name;
		}
	}
};
export default app;

import API from '../../../../api/API'
const api = new API()

export default {
	methods: {
		getInformationDetail(id, token) {
			return api.get(`banaworld_show/noinfo/selectOneInformationByInfoId?infoId=${id}&token=${token}`)
				.then(res => {
					this.resultData = res.data.data
				})
				.catch(err => {
				});
		},
	}
}
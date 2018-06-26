import API from '../../../../../api/API'
const api = new API()

export default {
	methods: {
		handlePraiseNetWork(token, praInfoid, praUserid) {
			return api.get(`banaworld_show/noinfo/addInformationPraise?token=${token}&praInfoid=${praInfoid}&praUserid=${praUserid}`)
				.then(res => {
					alert(1)
					// this.resultData = res.data.data
					// Toast(res.data.message);
				})
				.catch(err => {
				});
		},
	}
}
import API from '../../../api/API'
const api = new API()

export default {
	methods: {
		getInformationCommentList(cominfoid) {
			return api.get(`banaworld_show/info/selectInformationCommentList?token=21232f297a57a5a743894a0e4a801fc55&comInfoid=${cominfoid}`)
				.then(res => {
					this.items = res.data.data
				})
				.catch(err => {
				});
		},
		addComment(token, comInfoid, comPcomid, content, type) {
			return api.get(`banaworld_show/info/addInformationComment?token=${token}&comInfoid=${comInfoid}&comPcomid=${comPcomid}&comContent=${content}&comType=${type}`)
				.then(res => {
					return res
				})
				.catch(err => {
				});
		},
	}
}
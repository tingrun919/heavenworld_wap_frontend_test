import API from '../../../../api/API'
const api = new API()

export default {
	methods: {
		getPanoramicList() {
			return api.get(`banaworld_show/nopano/selAllPano?beginRow=0&pageSize=10`)
				.then(res => {
					this.items = res.data.data
					// panoramic.show_comment_list(res.data.data);
				})
				.catch(err => {
				});
		},
	}
}

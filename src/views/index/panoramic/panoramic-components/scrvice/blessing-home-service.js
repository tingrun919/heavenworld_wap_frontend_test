import API from '../../../../../api/API'
const api = new API()

export default {
	methods: {
		//获取某个全景的信息
		getSinglePanoramic(panoid) {
			return api.get(`banaworld_show/nopano/selOnePano?panoid=${panoid}`)
				.then(res => {
					this.resultData = res.data.data[0]
					this.panoPicture = this.resultData.panoPicture.split(",")
				})
				.catch(err => {
				});
		},
		//获取某个全景的评论
		getSinglePanoramicCommentList(panoid, commentid, pid, pagesize) {
			return api.get(`banaworld_show/nopano/selComment?panoid=${panoid}&commentid=${commentid}&pid=${pid}&pagesize=${pagesize}`)
				.then(res => {
					this.commentList = res.data.data
				})
				.catch(err => {
				});
		},
		//添加评论，回复评论
		addComment(token, panoid, commentid, content, type) {
			return api.get(`banaworld_show/pano/addComment?token=${token}&panoid=${panoid}&commentid=${commentid}&content=${content}&type=${type}`)
				.then(res => {
					return res
				})
				.catch(err => {
				});
		},
		//获取更多评论
		getMoreComment(panoid, commentid, pid, pagesize) {
			return api.get(`banaworld_show/nopano/selComment?panoid=${panoid}&commentid=${commentid}&pid=${pid}&pagesize=${pagesize}`)
				.then(res => {
					return res
				})
				.catch(err => {
				});
		},
		getSinglePerson(panoid) {
			return api.get(`banaworld_show/nopano/panoPerson?panoid=${panoid}`)
				.then(res => {
					this.resultPerson = res.data.data
				})
				.catch(err => {
				});
		}
	}
}

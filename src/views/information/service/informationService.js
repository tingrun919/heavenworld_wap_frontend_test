import API from '../../../api/API'
const api = new API()

export default {
	methods: {
		getInformationList() {
			return api.get(`banaworld_show/noinfo/selectInformationList?infoAreaid=`)
				.then(res => {
					//typePId
					//1:文章、2:话题、3:视频
					this.items = res.data.data
					this.items.forEach(element => {
						if(element.infoMainpic){
							var pic = element.infoMainpic.split(",")
							this.mainPic.push(pic)
						}else{
							this.mainPic.push([])
						}
					});
					
				})
				.catch(err => {
				});
		},
	}
}
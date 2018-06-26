//更新祈福位置
function update_comm_ele(p1, p2) {
	$("#comment-athv").attr("data-ath", p1).attr("data-atv", p2)
}

var comment_list = new Array();

//获取某scene下的所有祈福
function getComment() {
	var prayId = window.location.pathname
	prayId = prayId.substr(prayId.length - 1, 1)
	var krpano = document.getElementById('krpanoSWFObject');
	//取得当前scene
	var s = krpano.get("scene[get(xml.scene)].name");
	//ajax开始=======================================
	$.ajax({
		type: "get",
		url: 'http://39.107.78.100:8080/banaworld_show/nopano/selListPray',
		// url: 'http://192.168.10.196:8080/banaworld_show/nopano/selListPray',
		dataType: "json",
		data: { panoid: prayId, scenename: s },
		success: function (data) {
			comment_list = data.data;
			var data = data.data
			for (var i = 0; i < data.length; i++) {
				var commname = "userComm_" + data[i].prayId;
				var commname_txt = commname + "_txt";
				var commname_avatar = commname + "_avatar";
				var head_img = data[i].staffPortrait
				// krpano.call(//显示可拖动的评论热点
				// 	"addhotspot(" + commname + ");" +
				// 	"set(hotspot[" + commname + "].url,%SWFPATH%/blessing.png);" +
				// 	"set(hotspot[" + commname + "].ath," + data[i].prayLongitude + ");" +
				// 	"set(hotspot[" + commname + "].atv," + data[i].prayDimension + ");" +
				// 	"set(hotspot[" + commname + "].scale,.2);" +
				// 	"set(hotspot[" + commname + "].onclick,js(blessing_detail("+data[i].prayId+")));"
				// );
				krpano.call(//显示可拖动的评论热点
					"addhotspot(" + commname + ");" +
					"set(hotspot[" + commname + "].url,%SWFPATH%/comm-hide-icon1.png);" +
					// "set(hotspot[" + commname + "].url,"+data[i].staffPortrait+");" +
					"set(hotspot[" + commname + "].ath," + data[i].prayLongitude + ");" +
					"set(hotspot[" + commname + "].atv," + data[i].prayDimension + ");" +
					// "set(hotspot[" + commname + "].scale,.2);" +
					"set(hotspot[" + commname + "].edge,bottom);" +
					"set(hotspot[" + commname + "].zoom,false);" +
					"set(hotspot[" + commname + "].onclick,js(blessing_detail(" + data[i].prayId + ")));" +
					"addplugin(" + commname_txt + ");" +
					"set(plugin[" + commname_txt + "].parent, 'hotspot[" + commname + "]');" +
					"set(plugin[" + commname_txt + "].url,'%SWFPATH%/plugins/textfield.swf');" +
					"set(plugin[" + commname_txt + "].align,righttop);" +
					"set(plugin[" + commname_txt + "].edge,lefttop);" +
					"set(plugin[" + commname_txt + "].x,-5);" +
					"set(plugin[" + commname_txt + "].autowidth,true);" +
					"set(plugin[" + commname_txt + "].height,30);" +
					"set(plugin[" + commname_txt + "].background,true);" +
					"set(plugin[" + commname_txt + "].backgroundcolor,0x333333);" +
					"set(plugin[" + commname_txt + "].roundedge,5);" +
					"set(plugin[" + commname_txt + "].backgroundalpha,0.8);" +
					"set(plugin[" + commname_txt + "].css,'text-align:center;color:#FFFFFF;font-size:14px;line-height:25px;padding:0 5px;font-family:microsoft yahei;');" +
					"set(plugin[" + commname_txt + "].html," + data[i].staffNickname + ");" +
					"set(plugin[" + commname_txt + "].enabled,true);" +
					"addplugin(" + commname_avatar + ");" +
					"set(plugin[" + commname_avatar + "].url,%SWFPATH%/plugins/textfield.swf);" +
					"set(plugin[" + commname_avatar + "].parent,'hotspot[" + commname + "]');" +
					"set(plugin[" + commname_avatar + "].width,30);" +
					"set(plugin[" + commname_avatar + "].height,30);" +
					"set(plugin[" + commname_avatar + "].align,lefttop);" +
					"set(plugin[" + commname_avatar + "].edge,lefttop);" +
					"set(plugin[" + commname_avatar + "].roundedge,3);" +
					"set(plugin[" + commname_avatar + "].enabled,false);" +
					"set(plugin[" + commname_avatar + "].css,'margin:0;width:30px;height:30px;background:url(" + head_img + ") 0 0 no-repeat;background-size:cover;background-position:center;');"

				);
			}
		}
	});
	//ajax开始=======================================end
}
function blessing_detail(prayId) {
	$("#blessingDetail").attr("data-prayid", prayId)
	$("#blessingBtn").trigger("click");
}

function switch_show_comment(arg) {
	var krpano = document.getElementById('krpanoSWFObject');
	console.log(arg)
	if (arg == 'true') {
		for (var i = 0; i < comment_list.length; i++) {
			krpano.call("set(hotspot[userComm_" + comment_list[i].prayId + "].visible,true);");
		}
	} else {
		for (var i = 0; i < comment_list.length; i++) {
			krpano.call("set(hotspot[userComm_" + comment_list[i].prayId + "].visible,false);");
		}
	}
}

var arr = new Array()
var isplay = true

function getMusciList() {
	var audio = document.getElementById("audioMusic")
	if (audio.paused) {
		audio.currentTime = currenttime
		audio.play()
		isplay = true
	} else {
		audio.pause()
		isplay = false
		currenttime = audio.currentTime
	}
}

function getMusciListApi() {
	var prayId = window.location.pathname
	prayId = prayId.substr(prayId.length - 1, 1)
	var audio = document.getElementById("audioMusic")
	if (!audio) {
		$.ajax({
			type: "get",
			url: 'http://39.107.78.100:8080/banaworld_show/nopano/panoMusic',
			dataType: "json",
			data: { panoid: prayId },
			success: function (data) {
				for (var i = 0; i <= data.data.length; i++) {
					if (i == data.data.length) {
						playMusic()
					} else {
						arr.push(data.data[i].music_url)
					}
				}
			}
		});
	}

}

function playMusic() {
	var index = 0;
	var myAudio = new Audio();
	var currenttime = 0;
	myAudio.id = "audioMusic"
	myAudio.preload = true;
	// myAudio.controls = true;
	myAudio.src = arr[index];
	myAudio.addEventListener('ended', playEndedHandler, false);
	// myAudio.play();
	if (isplay) {
		myAudio.play()
	} else {
		// var krpano = document.getElementById('krpanoSWFObject');
		// var name = 'soundico'
		myAudio.pause();
		myAudio.currentTime = currenttime;
		// krpano.set('layer[soundico].crop;', "0|70|62|62");
	}

	document.getElementById("audioBox").appendChild(myAudio);
	myAudio.loop = false;
	function playEndedHandler() {
		index++
		if (index == arr.length) {
			index = 0
			$("#audioMusic").remove()
			getMusciListApi()
		}
		myAudio.src = arr[index];
		myAudio.play();
	}
}

function testaaa() {
	var param = getQueryVariable("param")
	if (param) {
		var krpano = document.getElementById('krpanoSWFObject');
		krpano.call('loadscene("' + param + '", null, MERGE,BLEND(0.5));');
	} else {
		var krpano = document.getElementById('krpanoSWFObject');
		krpano.call('loadscene("get(startscene)", null, MERGE,BLEND(0.5));');
	}
	getMusciListApi();
}

function getQueryVariable(variable) {
	var query = window.location.search.substring(1);
	var vars = query.split("&");
	for (var i = 0; i < vars.length; i++) {
		var pair = vars[i].split("=");
		if (pair[0] == variable) { return pair[1]; }
	}
	return (false);
}
/*
 * @Author: tarn.tianrun 
 * @Date: 2018-02-07 14:41:07 
 * @Last Modified by: tarn.tianrun
 * @Last Modified time: 2018-05-07 15:28:49
 */
//祈福列表
export function show_comment_list(data) {
	var krpano = document.getElementById('krpanoSWFObject');
	for (var i = 0; i < data.length; i++) {
		var commname = "userComm_" + data[i].prayId;
		krpano.call(//显示可拖动的评论热点
			"addhotspot(" + commname + ");" +
			"set(hotspot[" + commname + "].url,%SWFPATH%/comm-hide-icon2.png);" +
			"set(hotspot[" + commname + "].ath," + data[i].prayLongitude + ");" +
			"set(hotspot[" + commname + "].atv," + data[i].prayDimension + ");" +
			// "set(hotspot[" + commname + "].scale,.2);" +
			"set(hotspot[" + commname + "].onclick,js(blessing_detail("+data[i].prayId+")));"
		);
	}
}

//新增祈福
export function show_comment() {
	var krpano = document.getElementById('krpanoSWFObject');
	krpano.set("autorotate.enabled",false);
	var windowX = window.innerWidth / 2 - 30;
	var windowY = window.innerHeight / 2;
	var sphereXY = krpano.screentosphere(windowX, windowY - 66);
	var sphereX = sphereXY.x;  
	var sphereY = sphereXY.y ; 
	krpano.call(//显示可拖动的评论热点
		"addhotspot(commname);" +
		"set(hotspot[commname].url,%SWFPATH%/comm-hide-icon2.png);" +
		"set(hotspot[commname].ath,"+sphereX+");" +
		"set(hotspot[commname].atv,"+sphereY+");" +
		"set(hotspot[commname].edge,center);" +
		"set(hotspot[commname].zoom,false);" +
		// "set(hotspot[commname].scale,.2);" +
		"set(hotspot[commname].ondown,dragcommenthotspot());" +
		"set(hotspot[commname].onloaded,js(update_comm_ele(get(ath),get(atv))));" +
		"set(hotspot[commname].onup,js(update_comm_ele(get(ath),get(atv))));" +
		"addplugin(commname_txt);" +
		"set(plugin[commname_txt].parent, 'hotspot[commname]');" +
		"set(plugin[commname_txt].url,'%SWFPATH%/plugins/textfield.swf');" +
		"set(plugin[commname_txt].align,righttop);" +
		"set(plugin[commname_txt].edge,lefttop);" +
		"set(plugin[commname_txt].x,-5);" +
		"set(plugin[commname_txt].y,-4);" +
		"set(plugin[commname_txt].autowidth,true);" +
		"set(plugin[commname_txt].height,30);" +
		"set(plugin[commname_txt].background,true);" +
		"set(plugin[commname_txt].backgroundcolor,0x990000);" +
		"set(plugin[commname_txt].roundedge,5);" +
		"set(plugin[commname_txt].backgroundalpha,0.8);" +
		"set(plugin[commname_txt].css,'text-align:center;color:#FFFFFF;font-size:14px;line-height:25px;padding:0 5px;font-family:microsoft yahei;');" +
		"set(plugin[commname_txt].html,请拖动左边祈福圈确定位置~);" +
		"set(plugin[commname_txt].enabled,true);"
	);
}

//删除祈福
export function cancel_comment() {
	var krpano = document.getElementById('krpanoSWFObject');
	krpano.set("autorotate.enabled",true);
	krpano.call("removehotspot(commname);removeplugin(commname_avatar);set(layer[skin_layer].visible,true);");
}

export function testtesttest(){
	var krpano = document.getElementById('krpanoSWFObject');
	krpano.call('loadscene("scene_hongkong9", null, MERGE,BLEND(0.5));');
}
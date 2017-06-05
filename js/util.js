var util={
	loadImg: function (imgUrl,fn){
		var imgObj={};
		var tempImg,loaded=0,imgLength=0;
		// 遍历imgUrl
		for (var k in imgUrl){
			imgLength++;
			tempImg=new Image();
			tempImg.onload=function(){
				loaded++;
				if(loaded>=imgLength){
					fn(imgObj);
				}
			}
			tempImg.src=imgUrl[k];
			imgObj[k]=tempImg;
		}
	},
	extend: function(o1,o2){
    	for(var key in o2){
    		if(o2.hasOwnProperty(key)){
    			o1[key]=o2[key];
    		}
    	}
    }
}
(function(w){
	function Scene(ctx,imgObj){
		this.imgObj=imgObj;
		//听众队列
		this.listeners=[];
		this.roles=[];
		this.ctx=ctx;
		this.initialRoles();
	}
	Scene.prototype={
		constructor:Scene,
		initialRoles:function(){
			//背景2个
			this.roles.push( getSky( this.ctx, this.imgObj.sky, 3 ) );
			this.roles.push( getSky( this.ctx, this.imgObj.sky, 3 ) );
			//管道6个
			for(var i=0; i<6; i++){
				this.roles.push(getPipe(this.ctx, this.imgObj.pipeDown, this.imgObj.pipeUp, 150, this.imgObj.land.height, 3))
			}
			//大地四个
			for(var i=0; i<4; i++){
				this.roles.push(getLand( this.ctx, this.imgObj.land, 3 ))
			}
			//创建鸟
			this.roles.push(getBird(this.ctx,this.imgObj.bird,2,3,1,10,10));
			this.roles.push( getText( this.ctx, this.ctx.canvas.width-50, 0 ) );
		},
			//添加听众
		addListener: function(listener){
			this.listeners.push(listener);
		},
			//小鸟死亡
		triggerBirdOver: function(){
			this.listeners.forEach(function(listen){
				listen();
			})
		},
			draw:function(){
				var bird=getBird();
				var birdCoreX=bird.x+bird.width/2;
        		var birdCoreY=bird.y+bird.height/2;
        		if(this.ctx.isPointInPath(birdCoreX, birdCoreY)||bird.y<=0
        			||bird.y>=this.ctx.canvas.height-this.imgObj.land.height){
        			this.triggerBirdOver();
        		}else{
        			this.ctx.beginPath();
        			this.roles.forEach(function(role){
        				role.draw();
        				if(role.update){
        					role.update();
        				}
        				
        			})
        		}
			}
	}
	w.getScene=function(ctx,imgObj){
		return new Scene(ctx,imgObj);
	}
})(window)
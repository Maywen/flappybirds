(function(w){
	function FillText(ctx,x,y){
		this.x=x;
		this.ctx=ctx;
		this.y=y;	
	};
	FillText.i={time:0};
	w.obj=FillText.i;
	FillText.prototype={
		constructor:FillText,
		draw:function(){
			this.ctx.textAlign = 'right';
        	this.ctx.textBaseline = 'top';
        	this.ctx.fillStyle = 'red';
        	this.ctx.font = '900 20px 微软雅黑';
        	this.ctx.fillText( "您已经坚持了"+FillText.i.time+"秒", this.x, this.y );
		},
		
	};
	w.getText=function(ctx,x,y){
		return new FillText(ctx,x,y);
	}
})(window)
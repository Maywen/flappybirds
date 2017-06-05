(function(w){
	function OverScene(ctx){
		this.ctx=ctx;
	}
	OverScene.prototype={
		constructor: OverScene,
		draw: function(){
			this.ctx.save();
			this.ctx.fillStyle="rgba(100,100,100,0.7)";
			this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
			this.ctx.textAlign="center";
			this.ctx.textBaseline="middle";
			this.ctx.fillStyle="red";
			this.ctx.font="700 40px microsoft yahei"
			this.ctx.fillText("GAME OVER!!!", this.ctx.canvas.width / 2, this.ctx.canvas.height / 2)
			this,ctx.restore();
		}
	}
	w.getOverScene=function(ctx){
		return new OverScene(ctx);
	}
})(window)
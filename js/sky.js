(function(w){
    //定义绘制天空函数
    function Sky(ctx,img,speed){
        this.ctx=ctx;
        this.img=img;
        this.width=this.img.width;
        this.height=this.img.height;
        this.speed=speed||2;
        Sky.len++;
        //绘制起点坐标
        this.x=this.width*(Sky.len-1);
        this.y=0;
    }
    Sky.len=0;
    // Sky扩充原型
    Sky.prototype={
        constructor:Sky,
        draw:function(){
            this.ctx.drawImage(this.img, this.x, this.y)
        },
        update:function(){
            this.x-=this.speed;
            this.x=this.x<=-this.width?this.ctx.canvas.width:this.x;
        }
    }
    w.getSky=function(ctx,img,speed){
        return new Sky(ctx,img,speed);
    }
})(window)
    
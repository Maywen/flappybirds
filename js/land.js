(function(w){
//定义绘制大地函数
    function Land(ctx,img,speed){
        this.ctx=ctx;
        this.img=img;
        this.width=this.img.width;
        this.height=this.img.height;
        this.speed=speed||2;
        Land.len++;
        this.x=this.width*(Land.len-1);
        this.y=this.ctx.canvas.height-this.height;
    }
    Land.len=0;
    //Land扩充原型
    Land.prototype={
        constructor:Land,
        draw:function(){
            this.ctx.drawImage(this.img, this.x, this.y)
        },
        update:function(){
            this.x-=this.speed;
            this.x=this.x<=-this.img.width?this.img.width*(Land.len-1):this.x;
        }
    }
    w.getLand=function(ctx,img,speed){
        return new Land(ctx,img,speed);
    }
})(window)
    
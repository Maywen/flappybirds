(function(w){
    //定义绘制管道函数
    function Pipe(ctx,upImg,downImg,space,landHeight,speed){
        this.ctx=ctx;
        this.upImg=upImg;
        this.downImg=downImg;
        this.speed=speed;
        this.space=space;
        this.landHeight=landHeight;
        //定义管道最小高度
        this.minHeight=100;
        this.width=this.upImg.width;
        this.height=this.upImg.height;
        Pipe.len++;
        //定义起点坐标
        this.x=300+this.width*3*(Pipe.len-1);
        this.y=0;
        this._initial();
    }
    Pipe.len=0;
    util.extend(Pipe.prototype,{
        _initial:function(){
            var maxLength=this.ctx.canvas.height-this.landHeight-this.space-this.minHeight;
            //随机生成高度
            var randomHeight=Math.random()*maxLength;
            randomHeight=randomHeight<this.minHeight?this.minHeight:randomHeight;
            this.upY=randomHeight-this.height;
            this.downY=randomHeight+this.space;
        },
        draw:function(){
            this.ctx.drawImage(this.upImg, this.x, this.upY);
            this.ctx.drawImage(this.downImg, this.x, this.downY);
            this.drawPath();
        },
        drawPath:function(){
            this.ctx.strokeStyle="rgba(0,0,0,0)";
            this.ctx.rect(this.x,this.upY,this.width,this.height);
            this.ctx.rect(this.x,this.downY,this.width,this.height);
            this.ctx.stroke();
        },
        update:function(){
            this.x-=this.speed;
            if(this.x<=-this.width){
                this.x=this.width*3*Pipe.len-this.width;
                this._initial();
            }
            
        }
    })
    w.getPipe=function(ctx,upImg,downImg,space,landHeight,speed){
        return new Pipe(ctx,upImg,downImg,space,landHeight,speed);
    }
})(window)
   
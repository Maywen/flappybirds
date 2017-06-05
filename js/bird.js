(function(w){
 //定义bird函数
    function Bird(ctx,img,speed,widthFrame,heightFrame,x,y){
        this.ctx=ctx;
        this.img=img;
        this.speed=speed||2;
        this.x=x;
        this.y=y;
        this.widthFrame=widthFrame;
        this.heightFrame=heightFrame;
        this.width=this.img.width/this.widthFrame;
        this.height=this.img.height/this.heightFrame;
        this.currentFrame=0;
        this.speedPlus=0.1;
        this.bind();
    };
    //扩展Bird原型
    Bird.prototype={
        constructor:Bird,
        draw:function(){
            var baseRadian=Math.PI/180*10;
            var maxRadian=Math.PI/180*45;
            var rotateDeg=baseRadian*this.speed;
            rotateDeg=rotateDeg>maxRadian?maxRadian:rotateDeg;
            this.ctx.save();
            this.ctx.translate(this.x+this.width/2, this.y+this.height/2);
            this.ctx.rotate(rotateDeg);
            this.ctx.drawImage(this.img, 
                this.width*this.currentFrame,0,this.width,this.height,
                -this.width/2, -this.height/2,this.width,this.height);
            this.ctx.restore();
        },
        update:function(){
            this.currentFrame = ++this.currentFrame >= this.widthFrame? 0 : this.currentFrame;
            this.y+=this.speed;
            this.speed+=this.speedPlus;
        },
        bind:function(){
            var self=this;
            this.ctx.canvas.addEventListener("click", function(){
                self.speed=-3;
            })
        }
    };
    var bird=null;
    w.getBird=function(ctx,img,speed,widthFrame,heightFrame,x,y){
        if(!bird){
            bird=new Bird(ctx,img,speed,widthFrame,heightFrame,x,y);    
        }
        return bird;
    };
})(window)
   
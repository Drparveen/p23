class Computer{
    
        constructor(x,y,width,height){
        
            this.width=width;
            this.height=height;
        
          var  rect_opt={
        
                isStatic:true
            }
        
           this.body=Bodies.rectangle(x,y,this.width,this.height,rect_opt)
           this.image=loadImage('./assets/player.png')
        
           World.add(world,this.body)
        }
        
        display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        imageMode(CENTER)
        
        image (this.image,0,0,this.width,this.height)
        pop ()
        
        }
        
        }



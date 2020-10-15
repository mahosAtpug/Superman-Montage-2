class Superman {
    constructor (){
        this.sprite = createSprite(200,300);
        this.sprite.shapeColor = "white"
    }
    control (){
        if (keyIsDown(DOWN_ARROW)){
           this.sprite.y+=3;
        }
        if (keyIsDown(UP_ARROW)){
            this.sprite.y-=3;
        }
        
        if (keyIsDown(RIGHT_ARROW)){
            this.sprite.x+=7;
        }
    }
    shoot (){
       var bullet = createSprite(this.sprite.x+70,this.sprite.y-90, 40,3);
       bullet.shapeColor = "red";
       bullet.velocityX= 10;
    } 
    
}
var superman , enemyGroup;
var supermanImg, skyImg, boss1, boss2;
var edges;
var enemyX = 1000 ;


function preload(){
  supermanImg=loadImage("images/Super.png");
  skyImg=loadImage("images/sky.png");
  boss1=loadImage("images/Boss1.png");
  boss2=loadImage("images/Boss2.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  superman = new Superman();
  superman.sprite.addImage(supermanImg);
  enemyGroup = new Group ();
}

function draw() {

  background("#91D5ED");
  image (skyImg,0,0,displayWidth*11, displayHeight)
  // edges = createEdgeSprites();
  // superman.sprite.collide(edges[2]);
  // superman.sprite.collide(edges[3]);
  camera.position.x = superman.sprite.x;

  if (keyWentDown(32)){

    superman.shoot();
  }


  drawSprites();
  spawnEnemies();
  superman.control();
}

function spawnEnemies(){
  if (frameCount % 10 === 0 ){
    var rando = Math.round(random(100,height-100));
    var enemy = createSprite (enemyX,rando,5,30);
    enemy.velocityX = -3
    enemyX=enemyX+500;

    var rand = Math.round(random(1,2));
    switch(rand) {
    case 1: enemy.addImage(boss1);
    break;

    case 2:enemy.addImage(boss2);
    break;

    default: break;
  }
  enemy.lifetime = 300;
  enemy.scale = 0.5;
  enemyGroup.add(enemy);
}
}
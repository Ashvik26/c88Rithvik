var canvas=new fabric.Canvas("myCanvas");
player_x=10;
player_y=10;
block_img_width=30;
block_img_height=30;
var player_object="";
var block_object="";
function player_update() {
    fabric.Image.fromURL("player.png",function(Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(150);
        player_object.set({
            top:player_y,
left:player_x
        });
        canvas.add(player_object);
    });
}
function block_update(get_Image) {
    fabric.Image.fromURL(get_Image,function(Img){
        block_object=Img;
        block_object.scaleToWidth(block_img_width);
        block_object.scaleToHeight(block_img_height);
        block_object.set({
            top:player_y,
left:player_x
        });
        canvas.add(block_object);
    });
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e) {
    console.log(e);
    var keypressed=e.keyCode;
    if(e.shiftKey==true&& keypressed=="80") {
        block_img_width=block_img_width +10;
        block_img_height=block_img_height +10;
        document.getElementById("current_width").innerHTML=block_img_width;
        document.getElementById("current_height").innerHTML=block_img_height;
    }
    if(e.shiftKey==true&& keypressed=="77") {
        block_img_width=block_img_width -10;
        block_img_height=block_img_height -10;
        document.getElementById("current_width").innerHTML=block_img_width;
        document.getElementById("current_height").innerHTML=block_img_height;
    }
    if(keypressed=="38") {
        console.log("up arrow key is pressed");
    up(); 
    
    }
    if(keypressed=="40") {
        console.log("down arrow key is pressed");
        down();
    }
    if(keypressed=="37") {
        console.log("left arrow key is pressed");
        left();
    }
    if(keypressed=="39") {
        console.log("right arrow key is pressed");
        right ();
    }
    if(keypressed=="67") {
        block_update("cloud.jpg");
    }
    if(keypressed=="68") {
        block_update("dark_green.png");
    }
    if(keypressed=="71") {
        block_update("ground.png");
    }
    if(keypressed=="76") {
        block_update("light_green.png");
    }
    if(keypressed=="82") {
        block_update("roof.jpg");
    }
    if(keypressed=="84") {
        block_update("trunk.jpg");
    }
    if(keypressed=="85") {
        block_update("unique.png");
    }
    if(keypressed=="87") {
        block_update("wall.png");
    }
    if(keypressed=="89") {
        block_update("yellow_wall.png");
    }
}
function up() {
    if(player_y>=0) {
        player_y=player_y-block_img_height;
        console.log("player_y="+player_y+"player_x"+player_x);
        canvas.remove(player_object);
        player_update();
    }
}
function down() {
    if(player_y<=450) {
        player_y=player_y+block_img_height;
        console.log("player_y"+player_y+"player_x"+player_x);
        canvas.remove(player_object);
        player_update();
    }
}
function left() {
    if(player_x>=0) {
        player_x=player_x-block_img_width;
        console.log("player_y"+player_y+"player_x"+player_x);
        canvas.remove(player_object);
        player_update();
    }
}
function right() {
    if(player_x<=850) {
        player_x=player_x+block_img_width;
        console.log("player_y"+player_y+"player_x"+player_x);
        canvas.remove(player_object);
        player_update();
    }
}

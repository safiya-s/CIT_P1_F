var wrapperEle = document.body;
var x=0;
var numbers=[-30, 14, 66, 21, 72, -4];

function player(ply) {
  var that=this;
  this.score = ply;
  this.ele = document.createElement("div");
  this.scoreEle = document.createElement("h1");
  this.checkNum();
  this.ele.appendChild(this.scoreEle);
  this.ele.addEventListener("click", function(){
    that.addUp();
  })
  wrapperEle.appendChild(this.ele);
}

player.prototype.addUp=function(){
  this.score=this.score+1;
  this.checkNum();
}
player.prototype.checkNum=function(){
  if(this.score<0){
    this.scoreEle.innerHTML = "The number is "+this.score+" and this is a negative number";}
  else if(this.score===14){
    this.scoreEle.innerHTML = "The number is "+this.score+" and this number divided by 2 is equal to 7";
  }
  else if(this.score>50){
    this.scoreEle.innerHTML = "The number is "+this.score+" and this number is greater than 50";
  }
  else{
    this.scoreEle.innerHTML = "The number is "+this.score;
  }
}

function game(){
  var that=this;
  this.players=[];
  for(var i=0; i<numbers.length; i++){
    this.createPlayer(i);
  }
}


game.prototype.createPlayer = function(q){
  this.players.push(new player(numbers[q]));
  var that=this;
}

var newGame= new game();
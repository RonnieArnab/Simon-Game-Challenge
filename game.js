function nextSquence(){
    let randomNumber ;
    let color = ["red", "blue", "green", "yellow"] ;
    let gamePattern = [] , randomChosenColour ;
    for(let i=0;i<4;i++){
        randomNumber = Math.floor(Math.random()*3) 
        randomChosenColour = color[randomNumber] ;
        gamePattern[i]=randomChosenColour ;
    }

    
}

$(document).on("keypress",function(event){
    nextSquence() ;
})
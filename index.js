// APP STRUCTURE AND LOGIC
// when we click on start 
// if we are playing
//    reload page
// if we are not playing
// set score on 0
// show countdown
// reduce time by 1 sec 
// timeleft?
//  yes---continue
// no-- gameover
//  change button to reset 
// generate new Q&A

// if we click on answer box
// if we are playing 
// correct?
//yes
//  increase score
//  show cacorrect box for 1 sec
// generate new Q&A
// No
// Show try again Box for 1 sec
var playing = false;
var score;
var correctanswer;
function startbutton() {
    if (playing == true) {
        location.reload();
    }
    else { // if we are not playing
        // set palying var on true value
        playing = true;
        // set score on 0
        var score = 0;
        // show score
        show("score");
        
        document.getElementById('scorevalue').innerHTML = score;
        // show countdown
        show("timeremaining");
        // countdown fonction
        var time = 60;
        var interval = setInterval(function () {
            document.getElementById("timeremainingvalue").innerHTML = --time;

            if (time == 0) {
                show("gameOver");
                clearInterval(interval);
                document.getElementById("gameOver").innerHTML="<p>Game Over ! </p><p>Your score is "+score+" </p>";
                hide("timeremaining");
                hide("correct");
                hide("wrong");

           
            }
        }, 1000)

        // change start game to reset game
        document.getElementById("start").innerHTML = "Reset Game";
        questionQA()
       
      
            
    }

for (let i = 0; i < 4; i++) {
    document.getElementById("box"+i).onclick= function (){
        if (playing==true){
            if (this.innerHTML==correctanswer){
                score++;
                document.getElementById("scorevalue").innerHTML=score;
                hide("wrong");
                show("correct");
                setTimeout(function () {
                    hide("correct")
                },2000)
                // new qustion
                questionQA() 
            }
            else{
                show("wrong");
                hide("correct");
                setTimeout(function () {
                    hide("wrong")
                },2000)
            }
        }
        }

    
}

}
function hide(id) {
    document.getElementById(id).style.display="none";    
}
function show(id) {
    document.getElementById(id).style.display="block";    
}
 // generat question
function questionQA() {
    var numebre1=Math.floor(Math.random() * 10);
    var numbre2=Math.floor(Math.random() * 10);
    correctanswer= numebre1*numbre2;
   
    document.getElementById('question').innerHTML = numebre1 +"X"+ numbre2;
// fille one box with the correct answer
    var correctposition=Math.floor(Math.random() *4);
    document.getElementById("box"+correctposition).innerHTML = correctanswer;
    // fille other box with the wrong answer
    var answers=[correctanswer];
    for (let i = 0; i < 4; i++) {
        if (i!=correctposition) {
            var wronganswer
            do{
wronganswer=Math.floor(Math.random() *9)*Math.floor(Math.random() * 9);
            }
           while (answers.indexOf(wronganswer)>-1)
    document.getElementById("box"+i).innerHTML = wronganswer;
    answers.push(wronganswer)
        }
        
    }
}
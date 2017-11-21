let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
}

function setHiddenFields(){
    answet=Math.floor(Math.random()*10000);
    while(answer.nodeValue.length<4){
        answer.value+=0+answer.value.toString();
    }
}
//implement new functions here
let players = ['Kewel','Stephan'];

let loginButton = document.getElementById('login-btn');
loginButton.addEventListener('click', login);

let signupButton = document.getElementById('signup-btn');
signupButton.addEventListener('click', register);

function login(event){
    let username = document.getElementById('username');
    let name = username.value;
    if (players.includes(name)){
        alert(`${name} is inn.`);
        console.log(name);
    }
    else{
        alert(`${name} does not exist. Pls signup.`);
    }
}

function register(event) {
    let newUser = document.getElementById('username');
    let newPlayer = newUser.value;
    if(players.includes(newPlayer)){
        alert(`${newPlayer} already exist. Please login`)
    }
    else{
        alert(`${newPlayer} registered.`)
    }
}

function playGame(){

}

function displayQuestions(){

}

function checkAnswer() {

}

function incrementCorrectAnswer(){

}

function increamentIncorrectAnswer(){

}


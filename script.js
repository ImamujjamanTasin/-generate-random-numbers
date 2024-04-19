const random = document.getElementById("pass");
const length = 5;
const number = "0123456789";


function generateRandomNumber(){
    let pass = "";
    pass += number[Math.floor(Math.random() * number.length)];

    while (length > pass.length){
        pass += number[Math.floor(Math.random() * number.length)];
    }
    random.value = pass;
}
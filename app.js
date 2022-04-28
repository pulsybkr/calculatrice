// nombre
var nbre = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];


// bouton nombre
var num0 = document.querySelector('.num0')
var num1 = document.querySelector('.num1')
var num2 = document.querySelector('.num2')
var num3 = document.querySelector('.num3')
var num4 = document.querySelector('.num4')
var num5 = document.querySelector('.num5')
var num6 = document.querySelector('.num6')
var num7 = document.querySelector('.num7')
var num8 = document.querySelector('.num8')
var num9 = document.querySelector('.num9')

// ecran
var ecran1 = document.querySelector('.ecran1')
var ecran2 = document.querySelector('.ecran2')

// signe
var dells = document.querySelector('.dells')
var dell = document.querySelector('.dell')

var egale = document.querySelector('.egale')


var ecran = ecran1.innerHTML = "0";


function insert(num)
{
    ecran2.innerHTML += num;
}

dells.addEventListener('click', () =>{
    ecran2.innerHTML = "";
    ecran1.innerHTML = "0"

})

dell.addEventListener('click', () =>{
    var exp = ecran2.innerHTML;
    ecran2.innerHTML = exp.substring(0, exp.length - 1); 

})

egale.addEventListener('click', () => {
    var exp = ecran2.innerHTML;
    ecran1.innerHTML = eval(exp);
    ecran2.innerHTML =  ecran1.innerHTML
})


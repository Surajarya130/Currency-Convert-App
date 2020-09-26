// alert("New Project!");

var FirstCurr = document.querySelector("#inputCurrFirst"); //USD option
var SecondCurr = document.querySelector("#inputCurrSecond"); //Euro Option
var amountFirst = document.querySelector("#amount-one"); //USD Input 
var amountSecond = document.querySelector("#amount-two"); //Euro Input 
var rate = document.querySelector(".rate");
var swap = document.querySelector("#swap");


function calc(){

    var curr_first = FirstCurr.value; //USD, INR, EURO Etc
    var curr_Second = SecondCurr.value; //USD, INR, EURO Etc

    fetch(`https://v6.exchangerate-api.com/v6/cd0ca1ef27905644e0b0e636/latest/${curr_first}`)
    .then(res => res.json())
    .then(data => {
        var exchangeRate = data.conversion_rates[curr_Second];
        rate.innerHTML = `1 ${curr_first} = ${exchangeRate} ${curr_Second}`;
        amountSecond.value = (amountFirst.value * exchangeRate).toFixed(2);
    })

}

FirstCurr.addEventListener("change", calc);
SecondCurr.addEventListener("change", calc);
amountFirst.addEventListener("input", calc);
amountSecond.addEventListener("input", calc);

swap.addEventListener("click", swapVal);
function swapVal(){
    var firstSwap = FirstCurr.value;
    FirstCurr.value = SecondCurr.value;
    SecondCurr.value = firstSwap;
    calc();
}

calc();
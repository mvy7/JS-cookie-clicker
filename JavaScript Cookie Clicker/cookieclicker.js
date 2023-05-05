var cookies = 0;
var cookiespc = 1;
var bakerPrice = 20;

function cookieClick() {
    cookies += cookiespc;
    document.getElementById('intro').innerHTML = "Hire a Baker to Earn More Cookies!";

    if (cookies < bakerPrice) {
        scorenumber.style.color = "red";
        document.getElementById('scorenumber').innerHTML = cookies + " cookies";
    }

    if (cookies >= bakerPrice) {
        scorenumber.style.color = "green";
        document.getElementById('scorenumber').innerHTML = cookies + " cookies";
    }
}

function hireBaker() {

// Whenever function hireBaker()is executed, 
// the variable 'cookies' decrease by 20 (indicating its cost).
// As a result, each cookie click is now worth +1 cookies each time.

    if (cookies >= bakerPrice) {
        cookiespc += 1;
        cookies -= bakerPrice;
        bakerPrice = Math.round(bakerPrice * 1.5);
        document.getElementById('scorenumber').innerHTML = cookies + " cookies";
        document.getElementById('baker-price').innerHTML = "New Baker Price: " + bakerPrice + " cookies";
    } else {
        document.getElementById('intro').innerHTML = "You do not have enough cookies!";
    }
}

function resetButton() {
    cookies = cookies - cookies;
    cookiespc = 1;
    var bakerPrice = 20;
    document.getElementById('scorenumber').innerHTML = cookies + " cookies";
    document.getElementById('intro').innerHTML = "Click the Cookie to Begin!";
    document.getElementById('baker-price').innerHTML = "Baker Price: " + bakerPrice + " cookies";
}


function howtoPlay() {

}
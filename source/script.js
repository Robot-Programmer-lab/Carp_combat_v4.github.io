alert("Добропожаловать в Carp Combat!")

let taps = 0

function tap(){
    if (taps <= 25){
        taps = taps + 1;
    }
    else if (20 <= taps <= 50){
        taps = taps + 200;
    }
    else if (50 <= taps <= 50000){
        taps = taps + 100000;
    }
    else if (50000 <= taps <= 1000000){
        taps = taps + 500000;
    }
    else if (1000000 <= taps <= 1000000000){
        taps = taps + 50000000;
    }
    else{
        taps = taps + 10000000000;
    }
    document.getElementById("coins").textContent=taps;
}
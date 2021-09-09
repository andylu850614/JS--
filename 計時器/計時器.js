window.onload = function () {
    let minutes = 00;
    let seconds = 00;
    let tens = 00;
    let appendTens = document.getElementById('tens');
    let appendSeconds = document.getElementById('seconds');
    let appendMinutes = document.getElementById('minutes');
    let btnStart = document.getElementById('btnStart');
    let btnStop = document.getElementById('btnStop');
    let btnReset = document.getElementById('btnReset');
    let Interval;
    btnStart.addEventListener('click', function(){
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
    })

    btnStop.addEventListener('click', function(){
        clearInterval(Interval);
    })

    btnReset.addEventListener('click', function(){
        clearInterval(Interval);
        tens = '00';
        seconds = '00';
        minutes = '00';
        appendTens.innerHTML = tens;
        appendSeconds.innerHTML = seconds;
        appendMinutes.innerHTML = minutes;
    })

    function startTimer(){
        tens++;

        if(tens <= 9){
            appendTens.innerHTML = '0' + tens;
        }

        if(tens > 9){
            appendTens.innerHTML = tens;
        }

        if(tens > 99){
            seconds++;
            appendSeconds.innerHTML = '0' + seconds;
            tens = 0;
            appendTens.innerHTML = '0' +　tens;
        }

        if(seconds > 9){
            appendSeconds.innerHTML = seconds
        }

        if(seconds > 59){
            minutes++;
            appendMinutes.innerHTML = '0' + minutes;
            seconds = 0;
            appendSeconds.innerHTML = '0' + seconds;
        }
    }
}

function a(){
    console.log('hi')
}
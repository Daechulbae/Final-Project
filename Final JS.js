var cnt = 0;
var gnum;

function color()
{
    while(1)
    {
        var num = Math.floor(Math.random()*50)+1;
        gnum = num;

        if(num>=1 && num<=50)
            break;
    }

    var box = document.getElementById(num);
    box.style.backgroundColor = 'violet';
}

function check(n)
{
    var box = document.getElementById(gnum);

    if(n == gnum)
    {
        box.style.backgroundColor = 'white';
        cnt++;

        if(cnt < 10)
            color();
        else
        {
            alert('You got the Ticket! and Your Accuracy is 100%');
            cnt = 0;
        }
    }
    else if(n!=gnum && box.style.backgroundColor!='white')
    {
        alert('You missed the Ticket...and Your Accuracy is ' + cnt*10 + '%');

        cnt = 0;
        box.style.backgroundColor = 'white';
    }
}
ProgressCountdown(15, 'pageBeginCountdown', 'pageBeginCountdownText').then(value => alert(`All tickets have been sold out.`));

function ProgressCountdown(timeleft, bar, text) {
    return new Promise((resolve, reject) => {
        var countdownTimer = setInterval(() => {
            timeleft--;

            document.getElementById(bar).value = timeleft;
            document.getElementById(text).textContent = timeleft;

            if (timeleft <= 0) {
                clearInterval(countdownTimer);
                resolve(true);
            }
        }, 1000);
    });
}
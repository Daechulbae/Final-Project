var cnt = 0;
var gnum;

function color()
{
    while(1)
    {
        var num = Math.floor(Math.random()*52)+1;
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
            alert('Your Accuracy is 100% for 🎫');
            cnt = 0;
        }
    }
    else if(n!=gnum && box.style.backgroundColor!='white')
    {
        alert('Your Accuracy is ' + cnt*10 + '%');

        cnt = 0;
        box.style.backgroundColor = 'white';
    }
}
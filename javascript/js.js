function fn() {
    var font = document.getElementById('d1');
    font.classList.add('red');
    if (font.getAttribute('class') == 'red')
    {
        font.classList.remove('red')
        font.classList.add('green')
    }
    else
    {
        font.classList.remove('green')
        font.classList.add('red')
    }
}

var btn = document.getElementById('btn');
btn.addEventListener("click",fn)

function xx(){
    var ele = document.createElement('div');
    ele.setAttribute('id','d1');
    ele.setAttribute('class', 'red');
    ele.innerText = "我應該要變成紅色";

    var inp = document.createElement('input');
    inp.setAttribute('type','text');
    inp.setAttribute('value', '你看到我了');

    document.getElementsByTagName('body')[0].append(ele);
    document.getElementsByTagName('body')[0].append(inp);
}

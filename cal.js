
// 1.取得輸入的值
// 2.做運算
//  2-1. +-*/ 運算時清空
// 3.顯示結果

function num(x) {
    document.getElementById("temp").innerText += x;

}

function cal(a) {
    switch (a) {
        case '+':
            console.log(document.getElementById("temp").innerText += a);
            break;
        case '-':
            console.log(document.getElementById("temp").innerText += a);
            break;
        case '*':
            console.log(document.getElementById("temp").innerText += a);
            break;
        case '/':
            console.log(document.getElementById("temp").innerText += a);
            break;
        case '=':
            document.getElementById("temp").innerText = eval(document.getElementById('temp').innerText);
            
            var newImg = document.createElement('img');
            newImg.setAttribute("src", "img/sum.gif");
            document.body.insertBefore(newImg, document.getElementById("test"));
            break;
        default:
            document.getElementById("temp").innerText = "";
            break;
    }
}

function addImg(img) {
    var newImg = document.createElement('img');
    switch (img) {
        case '+/-':

            newImg.setAttribute("src", "img/18.gif");
            document.body.insertBefore(newImg, document.getElementById("test"));
            break;
        case '%':

            newImg.setAttribute("src", "img/20.gif");
            document.body.insertBefore(newImg, document.getElementById("test"));
        break;
    }
}

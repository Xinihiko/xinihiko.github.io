var deleteChar = true;
var index = 1;
var maxIdx = 2;
var varHTML = ["Computer Vision Engineer to be!","says 'Hello' to you!","Welcome to my simplistic portfolio!"];
var temp = "";

function AnimateText(){
    console.log(index)
    console.log(deleteChar)

    var a = document.getElementById('logo-desc');

    if(deleteChar){
        for(i=a.innerText.length+1;i>0;i--){
            setTimeout(function (){deleteKey(a);},(i)*100);
        }
    }else{
        for(i=varHTML[index].length+1;i>0;i--){
            setTimeout(function (){writeKeys(a);},i*100);
        }
    }
}

function deleteKey(x){
    // console.log('deleted')
    if(x.innerText.length>0){
        x.innerText = x.innerText.slice(0,-1);
    }else{
        deleteChar=false;
    }
}

function writeKeys(x){
    // console.log('written')
    if(x.innerText.length != varHTML[index].length){
        temp+= varHTML[index][temp.length];
        x.innerHTML = temp;
    }else{
        deleteChar = true;
        temp = "";
        index++;
        if(index>maxIdx){
            index = 0;
        }   
    }
}

function init(){
    setInterval(AnimateText,  3500);
        
    // var a = document.getElementById('hello');
    // var b = document.getElementById('welcome');

    // console.log(a.innerHTML.length)
    // console.log(a.innerText.length)

    // console.log(b.innerHTML.length)
    // console.log(b.innerText.length)
}
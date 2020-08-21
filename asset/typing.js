var writeUp = false;
var deleteChar = true;
var index = 1;
var maxIdx = 2;
var upHTML = ["ハロー・ワールド！","Hello, World!","Hai, Dunia!"];
var botHTML = ["ウェッブをようこそ！","Welcome!","Selamat Datang!"];
var temp = "";

function AnimateText(){
    console.log(index)
    console.log(writeUp)
    console.log(deleteChar)

    var a = document.getElementById('hello');
    var b = document.getElementById('welcome');

    if(deleteChar){
        if(writeUp == false){
            for(i=b.innerText.length+1;i>0;i--){
                    setTimeout(function (){deleteKey(b);},(i)*100);
                }
            // if (index == 1){
            //     for(i=b.innerText.length+1;i>0;i--){
            //         setTimeout(function (){deleteKey(b);},(i)*100);
            //     }
            // }else{
            //     for(i=b.innerText.length;i>0;i--){
            //         setTimeout(function (){deleteKey(b);},(i)*100);
            //     }
            // }
        }else{
            for(i=a.innerText.length+1;i>0;i--){
                setTimeout(function (){deleteKey(a);},(i)*100);
            }
            // if (index == 1){
            //     for(i=a.innerText.length+1;i>0;i--){
            //         setTimeout(function (){deleteKey(a);},(i)*100);
            //     }
            // }else{
            //     for(i=a.innerText.length;i>0;i--){
            //         setTimeout(function (){deleteKey(a);},i*100);
            //     } 
            // }
        }
    }else{
        if(writeUp){
            for(i=upHTML[index].length+1;i>0;i--){
                setTimeout(function (){writeKeys(a);},i*100);
            }
        }else{
            for(i=botHTML[index].length+1;i>0;i--){
                setTimeout(function (){writeKeys(b);},i*100);
            }
        }
    }
}

function deleteKey(x){
    console.log('deleted')
    if(x.innerText.length>0){
        x.innerText = x.innerText.slice(0,-1);
    }else{
        if(writeUp){
            deleteChar = false;
        }else{
            writeUp = true;
        }
    }
}

function writeKeys(x){
    console.log('written')
    if(writeUp){
        // console.log(x.innerText.length == upHTML[index].length)
        if(x.innerText.length != upHTML[index].length){
            temp+= upHTML[index][temp.length];
            x.innerHTML = temp;
        }else{
            writeUp = false;
            temp = "";
        }
    }else{
        // console.log(x.innerText.length == botHTML[index].length)
        if(x.innerText.length != botHTML[index].length){
            temp+= botHTML[index][temp.length];
            x.innerHTML = temp;
        }else{
            deleteChar = true;
            index++;
            if(index>maxIdx){
                index = 0;
            }
            temp = "";
        }
    }
}

function init(){
    setInterval(AnimateText, 2000);
    // var a = document.getElementById('hello');
    // var b = document.getElementById('welcome');

    // console.log(a.innerHTML.length)
    // console.log(a.innerText.length)

    // console.log(b.innerHTML.length)
    // console.log(b.innerText.length)
}
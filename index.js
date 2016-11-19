var path=require('path');
var http = require('http');
var fs = require('fs');

var appName= path.basename(__dirname);

var appPort = 900;

var adminMoney=10000;

var test=[36,180,936,5004,26640,141948]

var temp=null;
var tempArr=[];
var haveChanceBet=false;
var count=0;
var betcout=0;
var betYesCout=0;
var setTime=setInterval(function(){
    count++;
    console.log(count,"count")
    var betNumResult="";
    for(var i=0;i<5;i++){
        betNumResult +=parseInt(Math.random()*(10)).toString();
    }
    var betNum0=betNumResult.charAt(0);
    var betNum1=betNumResult.charAt(1);
    if(haveChanceBet){
        betcout++;
        console.log(betcout,"betcount");
        console.log(adminMoney,"adminMoney");
        if(betNum0!=betNum1&&betNum0!=temp&&betNum1!=temp){
            adminMoney+=10*1.3541666666;
            betYesCout++;
            console.log(betYesCout);
        }

        haveChanceBet=false;
    }
    

    if(betNum0==betNum1){
        
        // if(temp==)
        haveChanceBet=true;
        temp=betNum0;
        adminMoney-=10;
    }
    if(adminMoney<=100||adminMoney>20000){
        console.log(adminMoney,count,betcout);
        clearInterval(setTime);
        
    }


    // fs.readFile('message.txt', function (err, logData) {
    //     if (err) throw err;

    //     var text = logData.toString();
    //     text += betNumResult +'\r\n';

    //     fs.writeFile('message.txt',text , (err) => {
    //         if (err) throw err;
    //         console.log('It\'s saved!');
    //     });

    // });


},0.0001)


// var putMoney=[];
// function putSussMoney(count){
//     var betFirstMoney=36;
//     var bili=0.1;
//     var temp=0;
//     putMoney[1]=36;

//     if(count==1) return betFirstMoney;
//     for(var i=0;i<count;i++){
//         for(var j=0;j<count-1;j++){
//             temp+=putMoney[j]
//         }
//     }



// }

var path=require('path');
var fs = require('fs');


var adminMoney=80000;
var firstBetMoney=500;
var theBetRate=1.86;

var tempArr=[];
var haveChanceBet=false;
var betcout=0;
var betNum=null;
var temp =null;
var maxCout=0;
var maxbetMoney=0;
var startNum=0;
function coutOutMoney(count){
    if(count==1) {
        return firstBetMoney;
    }else{
        var outMoney=723
        for(var i=0;i<count-2;i++){
            outMoney*=2.45;
        }
        outMoney=(parseInt(outMoney/100)+1)*100;
        return outMoney;
    }

}
var setTime=setInterval(function(){
    startNum++;

    var betNumResult =Math.random()>0.5?1:0;

    if(haveChanceBet){
        betcout++;
        if(maxCout<betcout){
            maxCout=betcout;
        }
        var betMoney= coutOutMoney(betcout);
        if(betMoney>maxbetMoney){
            maxbetMoney=betMoney;
        }
        if(betNumResult==betNum){
            adminMoney +=betMoney*theBetRate;
            betcout=0;
            haveChanceBet=false;
        }else{
            if(adminMoney>betMoney){
                adminMoney -=betMoney
            }else{
                console.log("fail")
                console.log(startNum,"startNum")
                console.log(adminMoney,"adminMoney",maxCout,"maxCout",maxbetMoney,"maxbetMoney");
                clearInterval(setTime);
            };
        }
        
    }
    if(temp==betNumResult){
        haveChanceBet=true;
        //betNum=! temp;
        betNum=temp?0:1
    }

    temp=betNumResult;
    
    if(adminMoney>800000){
        console.log("sucsuss");
        console.log(startNum,"startNum")
        console.log(adminMoney,"adminMoney",maxCout,"maxCout",maxbetMoney,"maxbetMoney");
        clearInterval(setTime);
        
    }

},0.0001)

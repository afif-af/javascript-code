









console.log(a);
var a;




var i;
for(i=0;i<3;i++)
{
    setTimeout(()=>{
        console.log(i);
    },3000)
}
console.log(i);




(function(){
   var num1=7;
   var num2=9;
   console.log(num1+num2)



})();




var num1=2;


var sum=function(){
    var num2=5
    return function(){
       return num1+num2;
    } ;
};

var myFunc=sum();

console.dir(myFunc);


function bankAccount(initialBalance){
    var balance =initialBalance;
    return function(){
        return balance;
    }
}

var account=bankAccount(34433)

console.log(account)



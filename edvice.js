const moment = require("moment");
const time = moment().format("DD MM YYYY HH:mm:ss");

/*
callback function 
define 
call bor 

define jarayonida har doim callback keladi 

call jarayonida har doim callbackbilan bog'langan function keladi. 
*/

const list = [
    "be a good student",// 02-20
    "choose right boss", // 21-30
    "start your own business", // 31-40
    "do what you are goot at",//41-50
    "invest in young generation",// 51-60
    "now do a rest and enjoy your life" // 61
];

//define 
function giveAdvice (age, callback) {
    if (typeof age  !== "number") callback("insert only number", null); 
    else if (age >= 61) callback(null, list[5]);
    else if (age >= 51) callback(null, list[4]);
    else if (age >= 41) callback(null, list[3]);
    else if (age >= 31) callback(null, list[2]);
    else if (age >= 21) callback(null, list[1]);
    else callback(null, list[0]);
}

//call

giveAdvice(62, (err, data) =>{
    if(err) console.log("EROR:", err);
    else{
        console.log("DATA:", data);
    }
})

console.log("TIME:", time);
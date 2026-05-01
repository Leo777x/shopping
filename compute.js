/*
callback function 
define 
call bor 

define jarayonida har doim callback keladi 

call jarayonida har doim callbackbilan bog'langan function keladi. 
*/

// define
function division (a, b, callback) {
    if (b === 0) {
        callback("no'lga bo'lib bo'lmaydi", null);  
    } else {
        callback(null, a % b); //qoldiqli bo'lish deyiladi 
    }
    
}


//call
division(10, 3, (err, data) => {
     if (err) console.log("ERROR:", err, data);
     else{
        console.log("RESULT:", data)
        console.log("....");

        division(10, 4, (err, data) => {
     if (err) console.log("ERROR:", err, data);
     else{
        console.log("RESULT:", data)
        console.log("....");

        division(20, 7, (err, data) => {
     if (err) console.log("ERROR:", err, data);
     else{
        console.log("RESULT:", data)
        console.log("....");
        
     }
});
     }
}); 
     }
});
  
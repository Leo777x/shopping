/*
 asynchronous function: Callback vs Async vs Promise 

DEFINE : async &  await ishlatishimiz mumkin 

CALL  : then & catch bilan ishlatishimiz mumkin

promise : then & catch 

then: data keladi ya'ni javob
catch: error

define qismda aynan callback keladi

Call qismida callga dahildor functionlar kelar ekan

*/


function division (a, b, callback) {
    return new Promise((resolve, reject) => {
        if (b === 0) {
        throw new Error("no'lga bo'lib bo'lmaydi", null);  
    } else {
        setInterval(function() {
            resolve (a % b); //qoldiqli bo'lish deyiladi 
        }, 5000);
        
    }
    })
    
    
}



division(10, 3).then(data => {
    console.log("result:",data)
    console.log("........")

    division(10, 4).then(data => {
    console.log("result:",data)
    console.log("........")

    division(20, 7).then(data => {
    console.log("result:",data)
    console.log("........")
    
}).catch(err => {
    console.log("Error division:", err)
});
}).catch(err => {
    console.log("Error division:", err)
});
}).catch(err => {
    console.log("Error division:", err)
});

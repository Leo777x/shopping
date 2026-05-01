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

//define
async function division (a, b, callback) {
    if (b === 0) {
        throw new Error("no'lga bo'lib bo'lmaydi");  
    } else {
            return a % b //qoldiqli bo'lish deyiladi 
        }
        
    }



async function run() {

    let result = await division(10, 3);
    console.log("result one:", result);

    result = await division(10, 4);
    console.log("result two:", result);

    result = await division(20, 7);
    console.log("result there:", result);

}
run();
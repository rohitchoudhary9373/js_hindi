const accountId = 734659
let accountEmail = "Rohitchoudhary@go.com"
var accountPassword = "6745" // var ka use mostly avoid krte because var not know scope({})//
accountCity = "Jaipur"
let accountState; /*yeh hm difine nhi kr rhe h toh yrh unfine output de dega ,or hm java script ka ; use kre ya na kre koi frk nhi pdta*/

// accountId = 2 // not allowed


accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
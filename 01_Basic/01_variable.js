const accountId = 144553

let accountEmail = "sunny@google.com"
var accountPassword = "12345"
/* 
prefer not to use var
because of issue in block scope and functional Scope
 */

accountCity = "Jaipur"
let accountState;

// accountId = 2  // not allowed 

console.log(accountId);

accountEmail = "hc@hc.com"
accountPassword = "2333455"
accountCity = "chandi"

console.table([accountId, accountEmail, accountPassword, accountCity,accountState])
const accountId = 103045
let accountEmail = "vedant@google.com"
var accountPassword = "vedant@123"
accountCity = "Mumbai"

//accountId = 12345 // not allowed to change const variable

accountEmail = "vedant1@google.com"
accountPassword = "vedant@1234"
accountCity = "Pune"

console.log(accountId);

//to print all data of account we need too much time by taking console.log() for each credential

//So we print data all together in tabular form

console.table([accountId, accountEmail, accountPassword, accountCity])

/*
Do not use var in javascript here onwards to define variable.
Use only let keyword to define variables.
*/
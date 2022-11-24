const { Hook } = require("mocha")

function receivesAFunction(callback) {
    callback ()
}

function namedFunction() {
    console.log ("A named function")

}
function returnsANamedFunction (){
    return namedFunction

}
function returnsAnAnonymousFunction() {
    return function () {}
}
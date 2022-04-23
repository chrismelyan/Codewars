// altERnaTIng cAsE <=> ALTerNAtiNG CaSe

// Define String.prototype.toAlternatingCase
// (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase
// in your selected language; see the initial solution for details) such that each lowercase letter
// becomes uppercase and each uppercase letter becomes lowercase. For example:
//
// "hello world".toAlternatingCase() === "HELLO WORLD"
// "HELLO WORLD".toAlternatingCase() === "hello world"

String.prototype.toAlternatingCase = function () {
    return this.split("")
        .map(a => a === a.toUpperCase()? a.toLowerCase(): a.toUpperCase())
        .join('')
}
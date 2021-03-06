class C { private p: string };

var str: string;
var bool: boolean;
var num: number;
var strOrNum: string | number;
var strOrBool: string | boolean;
var numOrBool: number | boolean
var strOrNumOrBool: string | number | boolean;
var strOrC: string | C;
var numOrC: number | C;
var boolOrC: boolean | C;
var c: C;

//	A type guard of the form typeof x === s, 
//  where s is a string literal with the value 'string', 'number', or 'boolean',
//  - when true, narrows the type of x to the given primitive type, or
//  - when false, removes the primitive type from the type of x.
if (typeof strOrNum === "number") {
    num = strOrNum; // number
}
else {
    str === strOrNum; // string
}
if (typeof strOrBool === "number") {
    num = strOrBool; // number
}
else {
    var y: string | boolean = strOrBool; // string | boolean
}
if (typeof numOrBool === "number") {
    num = numOrBool; // number
}
else {
    var x: number | boolean = numOrBool; // number | boolean
}
if (typeof strOrNumOrBool === "number") {
    num = strOrNumOrBool; // number
}
else {
    strOrBool = strOrNumOrBool; // string | boolean
}
if (typeof numOrC === "number") {
    num = numOrC; // number
}
else {
    c = numOrC; // C
}

// A type guard of the form typeof x !== s, where s is a string literal,
//  - when true, narrows the type of x by typeof x === s when false, or
//  - when false, narrows the type of x by typeof x === s when true.
if (typeof strOrNum !== "number") {
    str === strOrNum; // string
}
else {
    num = strOrNum; // number
}
if (typeof strOrBool !== "number") {
    var y: string | boolean = strOrBool; // string | boolean
}
else {
    num = strOrBool; // number
}
if (typeof numOrBool !== "number") {
    var x: number | boolean = numOrBool; // number | boolean
}
else {
    num = numOrBool; // number
}
if (typeof strOrNumOrBool !== "number") {
    strOrBool = strOrNumOrBool; // string | boolean
}
else {
    num = strOrNumOrBool; // number
}
if (typeof numOrC !== "number") {
    c = numOrC; // C
}
else {
    num = numOrC; // number
}
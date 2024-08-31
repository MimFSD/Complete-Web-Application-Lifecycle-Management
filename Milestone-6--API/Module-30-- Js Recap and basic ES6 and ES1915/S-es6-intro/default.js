// default --> if value is not provided, take this as a default.

function car(a,b,c) {
    const add = a+b+c;
    console.log(a,b ,c ,add);  
}
car(2,3,6); // 2 3 6 11

function ar(a,b,c) {
    const add = a+b+c;
    console.log(a,b ,c ,add);  
}
ar(6);  //6 undefined undefined NaN

function sar(a,b=5,c=5) {
    const add = a+b+c;
    console.log(a,b ,c ,add);  
}
sar(6);  //6 5 5 16

function her(a=3,b=5,c=5) {
    const add = a+b+c;
    console.log(a,b ,c ,add);  
}
her();  //3 5 5 13

function say(message='Hi',love='Everyone ') {
    console.log(message,love);
}

say();  //Hi Everyone
say('Hello','Handsome')  //Hello Handsome
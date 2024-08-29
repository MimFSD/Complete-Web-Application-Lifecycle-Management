console.log("Mim Islam");

const iv= document.getElementsByTagName("li");
console.log(iv);

const kp= document.getElementsByTagName("li");
console.log(kp);
for (let iterate of kp) {
     console.log(iterate);
}

const ks= document.getElementsByTagName("li");
console.log(ks);
for (let ever of ks) {
     console.log(ever.innerText);
}

//GetElementByClass VS GetElementById

const ds = document.getElementById("mcq");
console.log(ds);
// console.log(ds.innerText);
const db = document.getElementById("mcq");
console.log(db);
console.log(db.innerText);

const pr = document.getElementsByClassName("book")
console.log(pr);
for (const srt of pr) {
    // console.log(srt);
    console.log(srt.innerText);
    
}
const pj = document.getElementsByClassName("book")
for (const srt of pj) {
    // console.log(srt);
    console.log(srt.innerText);
    
}
// ds.innerText ="Change Life "

//quarrySelector  ----- quarrySelectorAll
const kd= document.querySelectorAll(".book");
console.log(kd);
const pop = document.querySelectorAll("#pen")
console.log(pop);

const kg= document.querySelectorAll(".book");
for (const pump of kg) {
    console.log(pump);
    // console.log(pump.innerText);
    
}

//style CSS in Js
const rgb = document.getElementById("mcq");
rgb.style.color="red";
const lsv = document.getElementById("pen");
lsv.style.background="yellow";
lsv.style.textAlign="center";

//get Attribute





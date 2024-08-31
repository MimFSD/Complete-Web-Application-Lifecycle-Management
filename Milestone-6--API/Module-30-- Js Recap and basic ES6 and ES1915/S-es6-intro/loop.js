const nur =[3,7,12,98]
for(const gn of nur){
    console.log(gn);
}

const nb ='We shall over come'
for (const tm of nb) {
    console.log(tm);
    
}
// In Object ,Use for in 
const pc ={
    Name : 'ASUS',
    Model : 'A-43U',
    Camera : 8 ,
    MRP : 34000

}
// console.log(pc);
for (const build in pc) {
    const value = pc[build];
    console.log(build,value);  
    }



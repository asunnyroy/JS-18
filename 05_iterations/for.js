// for 

for (let i = 0; i < 10; i++) {
    // const element = i;
    // console.log(element);
    // console.log(i);
    if(i == 5){
        // console.log("5 is the best number");
    }
}

for(let i=0;  i<=5;i++ ){
    //  console.log(`Inner loop vlaue : ${i}`)
    for(let j=0; j<=5; j++){
        // console.log(`Inner loop vlaue : ${j} and inner loop ${i}`)
        // console.log(i + "*" + j + "=" + i*j);
    }
}

let myArray = ["flash", "batman", "superman"]

console.log(myArray.length)

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element)
}


// break and continue

for (let index = 1; index <20; index++){
    if(index == 5){
        console.log(`detected 5`);
        continue;
    }
    console.log(`value of i is ${index}`);
}

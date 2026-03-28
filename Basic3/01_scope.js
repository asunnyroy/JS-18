
let a = 300

if (true){
let a = 10
// console.log(a)
const b = 20
var c = 30 // override the value of c this is main reason to avoid var
          // var scope {} ke bahar se access kiya ja sakta hai
}

// console.log(a);
// console.log(b);
// console.log(c)

function one () {
    const username = "sunny"

    function two(){
        const website = "YOUTUBE"
        console.log(username)
    }
    // console.log(website)  out of Scope

    two()
}

// one()

if (true){
    const username = "sunny"
    if(username ==="sunny"){
        const website = " youtube"
        // console.log(username + website)
    }
    // console.log(website)
}
// console.log(username)

//+++++++++++++++++++++++++++ interesting ++++++++++++++

console.log(addone(5))

function addone (num){
    return num+1

}


// console.log(addTwo(5))  _-> try to access before initialization

const addTwo = function(num){
    return num+2
}

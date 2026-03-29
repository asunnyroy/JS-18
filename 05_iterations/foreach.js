const coding = ["js", "ruby","java", "c", "c++", "pythom"]

// coding.forEach(function (item) {
//     console.log(item)
// })


// coding.forEach((item) => {
//     console.log(item)
// })


// function printMe(item){
//     console.log(item)
// }
// coding.forEach(printMe)

// coding.forEach( (item , index, arr)=> {
//     console.log(index, item, arr);
// })

const myCoding = [
    {
        languageName : "javascript",
        languageFileName : "js"
    },
    {
        languageName : "java",
        languageFileName : "java"
    },
    {
        languageName : "pyton",
        languageFileName : "py"
    }
]

myCoding.forEach( (obj)=>{
    console.log(obj.languageFileName)
})
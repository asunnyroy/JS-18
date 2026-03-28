// Immediately Invoked Function Expresssions (IIFE)

(function chai (){
    console.log(`DB CONNECTED`)
})();

// global pulluation ke problem ko handle karne liye IIFE function ka user karte

(()=>{
    console.log(`DB CONNECTED 2`)
})();

( (NAME ) => {
    console.log(`Db connecte ${NAME}`)
})('SUNNY')
function createQuote(quote,callback){
    let myQuoto = "like I always say, " + quote;
    callback(myQuoto);
}
function logQuote(quote){
    console.log(quote + 'Yes...');
}
createQuote("you will geting better! ", logQuote);
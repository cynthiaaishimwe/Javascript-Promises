function talk(statement,callback){
    console.log(statement)
    callback(statement);
};
function greet(){
    console.log("hello there")
}
talk('I loved the coronation',greet);
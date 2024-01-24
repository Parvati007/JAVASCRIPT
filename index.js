//var (function level scope), let , const (block level scope) usage

function exampleFunction(){
    if(true)
    {
        const functionScopeVar = "i am function scoped";
        console.log(functionScopeVar);//function will run due to block level scope
    }

    console.log(functionScopeVar);//i am function scoped
}
 exampleFunction();
console.log(functionScopeVar);//error: functionScopeVar is not defined
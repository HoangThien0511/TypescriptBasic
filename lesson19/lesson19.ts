type ericType=number | string |boolean;


function addNumberOrString1(a:ericType,b:any){
    if(typeof a === 'number' && typeof b === 'number'){
        return a + b;
    }
    if(typeof a === 'string' && typeof b === 'string'){
        return a.concat(b);
    }
    throw new Error('Invalid number or string')

}
console.log(addNumberOrString1('eric','thien'))

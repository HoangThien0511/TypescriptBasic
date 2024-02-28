function addNumberOrString(a:number | string |boolean,b:any){
    if(typeof a === 'number' && typeof b === 'number'){
        return a + b;
    }
    if(typeof a === 'string' && typeof b === 'string'){
        return a.concat(b);
    }
    throw new Error('Invalid number or string')

}
console.log(addNumberOrString(6,9))

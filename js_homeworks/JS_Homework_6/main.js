function filterBy(array, type) {
    let arr = [];
    let data_type;
    if(type == 'null'){
        data_type = 'object';
    }
    else{
        data_type = type;
    }
    for(let i of array){
        if(typeof(i) != data_type){
            arr.push(i);
        }
    }

    return arr;
}

let a = ['hello', 'world', 23, '23', null, undefined];
console.log(filterBy(a, 'number'));
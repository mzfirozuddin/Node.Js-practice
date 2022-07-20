const add = (a,b)=>{
    return a+b;
}

const sub = (a,b)=>{
    return a-b;
}

// module.exports = add;    //for only one function


// module.exports.add = add;   // for multiple file export
// module.exports.sub = sub;

module.exports = {add,sub}
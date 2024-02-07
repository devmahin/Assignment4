

let array = { name: "rahat" , roll: 34};
// console.log(typeof array)

function chechArray (arr){
    if(typeof arr !== "object" || Array.isArray(arr)){
        // console.log(chechArray)
        return "Invalid"
    }

    let result = arr.name + " " + arr.roll
    return result;
}

console.log(chechArray(array))

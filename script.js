// ( 10 * 120) - ( 500 + (8 * 50) ) = 300
function calculateMoney(ticketSale) {
    if (ticketSale < 0) {
        return "Invalid Number"
    }
    let ticketPrice = 120;
    let everydayCost = 500 + (8 * 50);
    return ticketSale * ticketPrice - (everydayCost)
}
// console.log(
// calculateMoney(10)
// )





function checkName(name) {
    if(typeof name !== "string"){
        return "invalid"
    }
    let lastCarectar = "Ayieouw";
    let lastIndex = name.charAt(name.length - 1).toLowerCase();
    // console.log(lastIndex)
    for (let i = 0; i < lastCarectar.length; i++) {
        if (lastIndex === lastCarectar[i].toLowerCase()) {
            return "Good Name";
        }
    }
    return "Bad Name"
}
// console.log(checkName("MAHIN"))
// Tonoy, utsho , Roide, shanto


function deleteInvalids(array){
    if(!Array.isArray(array)){
        return "Invalid"
    }
    let newArray = [];
    for(let i = 0; i<array.length; i++){
        if(typeof array[i] === "number" && !isNaN(array[i])){
                newArray.push(array[i])
        }
    }
    return newArray;
}
const arrays = deleteInvalids(["1" , {num:2} , NaN ])
// console.log(arrays)




function password(obj) {
    if(typeof obj !== "object" || Array.isArray(obj)){
        return "Invalid"
    }
    else if(!obj.name || !obj.siteName || !obj.birthYear){
        return "Invalid"
    }
    else if(obj.birthYear.toString().length < 4){
        return "Invalid"
    }

    let companyName = obj.siteName;
    let com = companyName.charAt(0).toUpperCase() + companyName.slice(1)
    let birthDay = obj.birthYear;
    let seoName = obj.name;
    return `${com}#${seoName}@${birthDay}` 
    }




console.log(
password({ name: "rahat" , siteName: "mahin" ,  birthYear: 200})
)
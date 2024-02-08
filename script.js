function calculateMoney(ticketSale) {
    if (ticketSale < 0) {
        return "Invalid Number"
    }
    let ticketPrice = 120;
    let everydayCost = 500 + (8 * 50);
    return (ticketSale * ticketPrice) - everydayCost
}




function checkName(name) {
    if (typeof name !== "string") {
        return "invalid"
    }
    let lastCarectar = "Ayieouw";
    let lastIndex = name.charAt(name.length - 1).toLowerCase();
    for (let i = 0; i < lastCarectar.length; i++) {
        if (lastIndex === lastCarectar[i].toLowerCase()) {
            return "Good Name";
        }
    }
    return "Bad Name"
}




function deleteInvalids(array) {
    if (!Array.isArray(array)) {
        return "Invalid Array"
    }
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === "number" && !isNaN(array[i])) {
            newArray.push(array[i])
        }
    }
    return newArray;
}




function password(obj) {
    if (typeof obj !== "object" || Array.isArray(obj)) {
        return "invalid"
    }
    else if (!obj.name || !obj.siteName || !obj.birthYear) {
        return "invalid"
    }
    else if (obj.birthYear.toString().length < 4) {
        return "invalid"
    }

    let companyName = obj.siteName;
    let com = companyName.charAt(0).toUpperCase() + companyName.slice(1)
    let birthDay = obj.birthYear;
    let seoName = obj.name;
    return `${com}#${seoName}@${birthDay}`
}





function monthlySavings(arr, livingCost) {
    let vat = 0;
    let allPaymentTotal = 0;
    let totalSaving = 0;
    if(!Array.isArray(arr) || typeof livingCost !== "number"){
        return "invalid input"
    }
    for (let i = 0; i < arr.length; i++) {
        allPaymentTotal += arr[i];
        if (arr[i] >= 3000) {
            vat += arr[i] * 20 / 100;
        }
    }
    totalSaving = (allPaymentTotal - vat) - livingCost;
    if(totalSaving >= 0){
        return totalSaving;
    }else{
        return "earn more"
    }
}


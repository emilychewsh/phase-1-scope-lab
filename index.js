var customerName = "bob"
function upperCaseCustomerName() {
    return customerName = customerName.toUpperCase()
}

function setBestCustomer(){
    bestCustomer = "not bob";
}

function overwriteBestCustomer(){
    bestCustomer = "maybe bob";
}

const leastFavouriteCustomer = "x"
function changeLeastFavoriteCustomer(){
    leastFavouriteCustomer = "flanders"
}
console.log(leastFavouriteCustomer)
console.log(changeLeastFavoriteCustomer())
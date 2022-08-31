var customerName = 'bob'
function upperCaseCustomerName() {
    customerName = 'BOB'
}
function setBestCustomer() {
    bestCustomer = 'not bob'
    return bestCustomer 
}
function overwriteBestCustomer() {
    bestCustomer = 'maybe bob'
    return bestCustomer
}
const leastFavoriteCustomer = 'karen'
function changeLeastFavoriteCustomer() {
     leastFavoriteCustomer = 'kevin'
    return leastFavoriteCustomer
}
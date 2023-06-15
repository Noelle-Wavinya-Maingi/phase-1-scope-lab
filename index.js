// Write your solution in this file!
var customerName = "bob";
//console.log(window.customerName);

var bestCustomer;

let newCustomer = "maybe bob";

const leastFavoriteCustomer = "Mary Kim";

//this function first checks if the customerName is a string then it converts it to uppercase.
function upperCaseCustomerName() {
  if (typeof window.customerName === "string") {
    window.customerName = window.customerName.toUpperCase();
  }
}

//this function should allow the setting of the best customer if the variable is declared but not assigned a value.
function setBestCustomer() {
  if (typeof window.bestCustomer === "undefined") {
    window.bestCustomer = "not bob";
  }
}

//newCustomer has been assigned a value and we want that person to be our new bestCustomer
function overwriteBestCustomer() {
  window.bestCustomer = newCustomer;
}

//tries to reassign the variable leastFavoriteCustomer but cannot as const was used.
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = "John Doe";
}

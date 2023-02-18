// 1. call method can be used in any function to call the function with the given this value and arguments provided individually.

const mike = {
  name: "Mike",
};

const tom = {
  name: "Tom",
};

function showThisName() {
  console.log(this.name);
}

showThisName(); // this means window object in the case
showThisName().call(mike); // Mike
showThisName().call(tom); // Tom

function update(birthYear, occupation) {
  this.birthYear = birthYear;
  this.occupation = occupation;
}

update().call(mike, 1990, "Developer");
console.log(mike); // {name: "Mike", birthYear: 1990, occupation: "Developer"}

// 2. apply method is similar to call method but the difference is that it takes the arguments as an array

update().apply(mike, [1990, "Developer"]);

const num = [1, 2, 9, 4, 5, 6, 11, 8, 9, 10];

// takes argument as an array
const minNum = Math.min.apply(null, num); // 1
//Math.min.apply(null, [1, 2, 9, 4, 5, 6, 11, 8, 9, 10]);

// takes argument as individual
const maxNum = Math.max.call(null, ...num); // 11
//Math.max.call(null, 1, 2, 9, 4, 5, 6, 11, 8, 9, 10);

// 3. bind method is used to change the this value of a function

const updateMike = update.bind(mike);
updateMike(1995, "Mechanic");
console.log(mike); // {name: "Mike", birthYear: 1995, occupation: "Mechanic"}

// Exercise

const user = {
  name: "Simon",
  showName: function () {
    console.log(this.name);
  },
};

const fn = user.showName;
fn(); // undefined
fn.call(user); // Simon
fn.apply(user); // Simon

const bindFn = fn.bind(user);
bindFn(); // Simon
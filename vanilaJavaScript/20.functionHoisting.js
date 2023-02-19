// function hoisting

// 1. function declaration
// function declaration is hoisted

function itsHosited() {
  console.log("its hosited");
}

// 2. function expression
// function expression is not hoisted
// you may use this more often than function declaration
// you may use function expression as a callback function
// you may use function expression as a closure function

const itsNotHosited = function () {
  console.log("its not hosited");
};

// 3. arrow function
// arrow function is not hoisted
// you may use this more often than function expression
// you may use arrow function as a callback function

const itsAlsoNotHosited = () => {
  console.log("its also not hosited");
};

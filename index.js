// code your solution here
function razzle() {
    console.log("You've been razzled!");
  }
  console.log(hoistedVar); // undefined
var hoistedVar = "I am hoisted";
razzle(); // "You've been razzled!"

function razzle() {
  console.log("You've been razzled!");
}
const razzle = function() {
    console.log("You've been razzled!");
  };
  const anon = function() {
    console.log("Anonymous function");
  };
  const fn = function() {
    console.log("Function expression");
  };
  fn(); // "Function expression"
  (function() {
    console.log("IIFE executed");
  })();
  function outer() {
    const innerVar = "I'm inside";
    function inner() {
      console.log(innerVar);
    }
    inner(); // "I'm inside"
  }
  outer();
  
  function outer() {
    const outerVar = "Outer";
  
    function middle() {
      const middleVar = "Middle";
  
      function inner() {
        console.log(outerVar); // "Outer"
        console.log(middleVar); // "Middle"
      }
      inner();
    }
    middle();
  }
  outer();
  function outer() {
    const outerVar = "Outer";
  
    return function inner() {
      console.log(outerVar);
    };
  }
  
  const innerFunc = outer();
  innerFunc(); // "Outer"

  function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  }
  const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
  };
  function wrapAdjective(flair = "*") {
    return function(adjective = "special") {
      return `You are ${flair}${adjective}${flair}!`;
    };
  }
  console.log(saturdayFun()); // "This Saturday, I want to roller-skate!"
console.log(saturdayFun("bathe my dog")); // "This Saturday, I want to bathe my dog!"

console.log(mondayWork()); // "This Monday, I will go to the office."
console.log(mondayWork("work from home")); // "This Monday, I will work from home."

const encouragingPromptFunction = wrapAdjective("!!!");
console.log(encouragingPromptFunction("a dedicated programmer")); // "You are !!!a dedicated programmer!!!"

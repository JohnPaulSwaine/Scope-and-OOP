// let age = 21
// console.log(`Age: ${age}`)
// let name = "John"
// const callAge = () => {
//    let name = "John"
//     console.log(`My age is ${age}`)
//     console.log(`My name is ${name}`)
// }
// callAge()

// console.log(`Name: ${name}`)


// function startLet() {
//     for (let i = 0; i < 5; i++) {
//         console.log(i);
//     }
//     console.log(i)
// }

// function startVar() {
//     for (var i = 0; i < 5; i++) {
//         console.log(i)
//     }
//     console.log(i)
// }

// console.log(`Running with let:`)
// startLet()
// console.log(`Running with Var:`)
// startVar()

// function startLet() {
//     for (let i = 0; i < 5; i++) {
//         if (true) {
//             let colour = `blue`
//             console.log(i, colour)
//         }
//         console.log(i);
//     }
//     console.log(i)
// }

// function startVar() {
//     for (var i = 0; i < 5; i++) {
//         if (true) {
//             var colour = `green`
//             console.log(i, colour)
//         }
//         console.log(i)
//     }
//     console.log(i, colour)
// }

// let globalVar = 'globalVar'; 
// console.log(`Global Scope: ${globalVar}`); 
// const outerFun = () => {
// let outerVar = 'outerVar'; 
// console.log(`Outer function: ${globalVar}`); 
// console.log(`Outer function: ${outerVar}`);
// console.log(`Outer function: ${innerVar}`); 
// const innerFun = () => {
// let innerVar = 'innerVar';
// console.log(`Inner function: ${globalVar}`); 
// console.log(`Inner function: ${outerVar}`); 
// console.log(`Inner function: ${innerVar}`);
// };
// innerFun();
// };
// outerFun();
// innerFun();

//          HIGHER ORDER FUNCTIONS

//      EXAMPLE ONE

// const whichGreeting = (timeOfDay) => { 
//     console.log(`Good ${timeOfDay}`);
//     };
//     const greet = (time, fn) => { 
//     if (time < 1200) {
//     fn('Morning');
//     } else if (time >= 1200 && time < 1800) { 
//     fn('Afternoon');
//     } else {
//     fn('Evening');
//     }
//     };
//     greet(1400, whichGreeting);

//      EXAMPLE TWO

// const add = () => { 
//     return 2 + 3;
//     };
//     console.log(add()); //logs 5
//     console.log(add); // logs the whole function

//       EXAMPLE THREE

// const add = (num1) => { 
//     return (num2) => {
//     return num1 + num2;
//     };
//     };
//     console.log(add(2)); //returns the function in the main function
    
//      EXAMPLE FOUR

// const add = (num1) => { 
//     return (num2) => {
//     return num1 + num2;
//     };
//     };
//     console.log(add(2)); //returns the function in the main functio
// console.log(add(2) (1)) // output: 3

//      ACTIVITY ONE
//  PART ONE
// const greeting = () => {
//     console.log("Hello Codenation")
// }
// greeting()
//PART TWO
// const greet = () => {
//     for (let i = 0; i < 5; i++) {
//         console.log("Hello Codenation");
        
//     }
// }
// greet()
//      ACTIVITY TWO



//      ACTIVITY THREE

const add = (a, b) => { 
    return a + b;
    };
    const subtract = (a, b) => { 
    return a - b;
    };
    const multiply = (a, b) => { 
    return a * b;
    };
    const divide = (a, b) => { 
    return a / b;
    };
    const doMaths = (num1) => { 
    return (num2, fn) => {
    return fn(num1, num2);
    };
}
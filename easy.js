// function exercise() {
//     function run() {
//         console.log("Running")
//     }
//     function swim() {
//         console.log("Swimming")
//     }
// }

// console.log(run())


// var run = exercise('running');
// console.log(run()); // prints "Today's exercise: running"
// var swim = exercise('swimming');
// console.log(swim()); // prints "Today's exercise: swimming"



// function exercise() {
//     function run() {
//         return (`Today exercise is: ${run}`);
//     }
//     function swim() {
//         return `Today's exercise: ${swim}`;
//     }
// }
// console.log(exercise(swim()));


/*
let exercise = activity => { return  () => {
      return `Today's exercise:`+ activity; 
    }
  }
  
  var run = exercise("Running");
  var swim = exercise("Swimming");

  console.log(run());
  console.log(swim())
  */

  let exercise = activity => {
      return function () {
        return `Todays exercise is: ${activity}`;
     }
  }
  var run = exercise("running");
  var swim = exercise("swimming");

  console.log(run());
  console.log(swim());
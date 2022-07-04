let { cookBeans, steamBroccoli, cookRice, bakeChicken } = require('./dinner_library.js');

// Write your code below:
let serveDinnerAgain = async () => {
  let foodArray = await Promise.all([steamBroccoli(), cookRice(), bakeChicken(), cookBeans()])
  console.log(`Dinner is served. We're having ${foodArray[0]}, ${foodArray[1]}, ${foodArray[2]}, and ${foodArray[3]}.`)
}

serveDinnerAgain()
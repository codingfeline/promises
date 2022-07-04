let { cookBeans, steamBroccoli, cookRice, bakeChicken } = require('./dinner_library.js');

// Write your code below:
let serveDinner = async () => {
  let vegetablePromise = steamBroccoli()
  let starchPromise = cookRice()
  let proteinPromise = bakeChicken()
  let sidePromise = cookBeans()

  console.log(`Dinner is served. We're having ${await vegetablePromise}, ${await starchPromise}, ${await proteinPromise}, and ${await sidePromise}.`)
}

serveDinner()
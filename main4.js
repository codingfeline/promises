const cookBeanSouffle = require('./bean2_library.js');

// Write your code below:
let hostDinnerParty = async () => {
  try {
    let dinner = await cookBeanSouffle()
    console.log(`${dinner} is served!`)
  } catch (error) {
    console.log(error)
    console.log('Ordering a pizza!')
  }
}

hostDinnerParty()
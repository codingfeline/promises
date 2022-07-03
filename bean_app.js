const { shopForBeans, soakTheBeans, cookTheBeans } = require('./bean_library.js');

// Write your code below:
const makeBeans = async () => {
  let type = await shopForBeans()
  let isSoft = await soakTheBeans(type)
  let dinner = await cookTheBeans(isSoft)
  console.log(dinner)
}
makeBeans()

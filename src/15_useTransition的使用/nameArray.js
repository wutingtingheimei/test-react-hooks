import { faker } from "@faker-js/faker"

const nameArray = []

for (let index = 0; index <10000; index++) {
  nameArray.push(faker.name.firstName())
  
}

console.log(nameArray)


export default nameArray
// faker
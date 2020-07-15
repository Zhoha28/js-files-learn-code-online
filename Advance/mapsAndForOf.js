var John = {
  name: 'I amd John',
  age: 50,
  isActive: true
}

var marry = {
  name: 'I am Marry',
  age: 21,
  isActive: false
}

var sam = {
  name: 'I am sam',
  age: 25,
  isActive: true
}

const users = new Map()

users.set('john', John)
users.set('marry', marry)

console.log(users.get('john'))
console.log(users.keys())

// for of loop to iterate the keys
for (const key of users.values()) {
  console.log(key.age)
}

for (const [key, value] of users.entries()) {
  console.log(key + ' ' + value.name)
  // convert the above line in strings
}
console.log('dshsjdhj')

users.forEach((value, key) => console.log(key))

// assignment 

var arrOfArr = [['1', '12'], ['we', 'sfsf']]

var newMap = new Map(arrOfArr)
console.log(newMap)

for (const arr of newMap.values()) {
  console.log(arr);
}
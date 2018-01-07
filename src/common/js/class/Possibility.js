export default class Possibility {
  constructor (value) {
    this.list = value
  }

  getNumber () {
    return this.list[0]
  }

  getLength () {
    return this.list.length
  }

  has (number) {
    return this.list.indexOf(number) !== -1
  }

  compare (target) {
    return this.list.every((number, index) => number === target.list[index])
  }

  remove (...numbers) {
    let isRemoved = false
    numbers.forEach(number => {
      const index = this.list.indexOf(number)
      if (index !== -1) {
        this.list.splice(index, 1)
        isRemoved = true
      }
    })
    return isRemoved
  }

  removeAll () {
    this.list = []
  }
}

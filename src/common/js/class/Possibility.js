export default class Possibility {
  constructor (value) {
    this.list = value
    this.length = this.list.length
  }

  numbers () {
    return this.list
  }

  isSpecified () {
    return this.length === 1
  }

  specifiedNumber () {
    return this.isSpecified() ? this.list[0] : null
  }

  has (number) {
    return this.list.includes(number)
  }

  compare (target) {
    return this.length === target.length &&
           this.list.every((number, index) => number === target.list[index])
  }

  remove (...numbers) {
    let isRemoved = false
    numbers.forEach(number => {
      const index = this.list.indexOf(number)
      if (index !== -1) {
        this.list.splice(index, 1)
        this.length = this.list.length
        isRemoved = true
      }
    })
    return isRemoved
  }

  removeAll () {
    if (this.length === 0) {
      return false
    }
    this.list = []
    this.length = 0
    return true
  }
}

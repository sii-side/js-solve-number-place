export default class NumberTable {
  constructor (numberTable) {
    this.validate(numberTable)
    this.all = numberTable
  }

  numbers () {
    return this.all
  }

  validate (numberTable) {
    if (!(numberTable instanceof Array)) {
      throw new Error('The argument of the NumberPlace constructer must be an Array.')
    }
    if (numberTable.some(number => typeof number !== 'number')) {
      throw new Error('All elements of the argument array must be number literals.')
    }
    if (numberTable.length !== 81) {
      throw new Error('The argument array must have 81 elements of number.')
    }
  }
}

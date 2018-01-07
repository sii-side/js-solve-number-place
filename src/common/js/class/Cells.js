export default class Cells {
  constructor (cells) {
    this.all = cells
  }

  getLength () {
    return this.all.length
  }

  getCell (index) {
    return this.all[index]
  }

  countChanged () {
    return this.all.filter(cell => cell.isChanged).length
  }

  countEmpty () {
    return this.all.filter(cell => cell.number === 0).length
  }

  getEmpty () {
    return this.all.filter(cell => cell.number === 0)
  }

  reset () {
    this.all.forEach(cell => {
      cell.reset()
    })
  }

  filter (...excludeCells) {
    return this.getEmpty().filter(cell => excludeCells.indexOf(cell) === -1)
  }

  filterByCellNumber (number) {
    return this.all.filter(cell => cell.number === number)
  }

  filterByPossibilityNumber (number) {
    return this.all.filter(cell => cell.possibility.has(number))
  }

  checkOnSameColumn () {
    return this.all.every(cell => cell.index.column === this.all[0].index.column)
  }

  checkOnSameRow () {
    return this.all.every(cell => cell.index.row === this.all[0].index.row)
  }

  check () {
    this.all.forEach(cell => {
      cell.check(this)
    })
  }

  narrow (...numbers) {
    this.getEmpty().forEach(cell => {
      cell.narrow(...numbers)
    })
  }

  validate () {
    let isValid = true
    ;[1, 2, 3, 4, 5, 6, 7, 8, 9].forEach(number => {
      if (this.all.filter(cell => cell.number === number).length > 1) {
        isValid = false
      }
    })
    return isValid
  }
}

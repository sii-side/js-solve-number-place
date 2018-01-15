export default class Cells {
  constructor (cells) {
    this.all = cells
    this.length = cells.length
  }

  allCells () {
    return this.all
  }

  cell (index) {
    return this.all[index]
  }

  error () {
    this.all.forEach(cell => {
      cell.flag.error()
    })
  }

  reset () {
    this.all.forEach(cell => {
      cell.reset()
    })
  }

  countChanged () {
    return this.all.filter(cell => cell.flag.isChanged).length
  }

  countEmpty () {
    return this.all.filter(cell => cell.number === 0).length
  }

  countError () {
    return this.all.filter(cell => cell.flag.isError).length
  }

  filterByEmpty () {
    return new Cells(this.all.filter(cell => cell.number === 0))
  }

  filterByExcludeCells (...excludeCells) {
    return new Cells(this.all.filter(cell => !excludeCells.includes(cell)))
  }

  filterByCellNumber (number) {
    return new Cells(this.all.filter(cell => cell.number === number))
  }

  filterByPossibilityNumber (number) {
    return new Cells(this.all.filter(cell => cell.possibility.has(number)))
  }

  isSameBlock () {
    return this.all.every(cell => cell.index.block === this.all[0].index.block)
  }

  isSameRow () {
    return this.all.every(cell => cell.index.row === this.all[0].index.row)
  }

  isSameColumn () {
    return this.all.every(cell => cell.index.column === this.all[0].index.column)
  }

  isSameRegion () {
    return this.isSameBlock() || this.isSameRow() || this.isSameColumn()
  }

  solve () {
    this.all.forEach(cell => {
      if (!cell.solve() && this.isSameRegion()) {
        this.narrow(cell.number)
      }
    })
  }

  narrow (...numbers) {
    this.filterByEmpty().all.forEach(cell => {
      cell.narrow(...numbers)
    })
  }
}

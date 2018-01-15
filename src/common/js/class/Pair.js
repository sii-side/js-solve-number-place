import Cells from './Cells'

export default class Pair {
  constructor (...cells) {
    this.cells = new Cells(cells)
  }

  isSpecifiedEither () {
    return this.cells.cell(0).number > 0 || this.cells.cell(1).number > 0
  }

  isSpecial () {
    const possibilities = this.cells.allCells().map(cell => cell.possibility)
    if (possibilities[0].compare(possibilities[1]) && possibilities[0].length === 2) {
      return true
    }
    return false
  }

  solve () {
    if (this.isSpecial()) {
      this.solveSpecial()
    }
  }

  solveSpecial () {
    if (this.cells.isSameBlock()) {
      this.narrow(this.cells.cell(0).block())
    }
    if (this.cells.isSameRow()) {
      this.narrow(this.cells.cell(0).row())
    }
    if (this.cells.isSameColumn()) {
      this.narrow(this.cells.cell(0).column())
    }
  }

  narrow (region) {
    const filteredCells = region.cells.filterByExcludeCells(...this.cells.allCells())
    const possibility = this.cells.cell(0).possibility.numbers()
    filteredCells.narrow(...possibility)
  }
}

export default class Pair {
  constructor (cell1, cell2) {
    this.cell1 = cell1
    this.cell2 = cell2
    this.isSameColumn = cell1.index.column === cell2.index.column
    this.isSameRow = cell1.index.row === cell2.index.row
  }

  check () {
    if (this.checkSpecial()) {
      if (this.isSameColumn) {
        this.cell1.getColumn().cells.filter(this.cell1, this.cell2).forEach(cell => {
          cell.narrow(...this.cell1.possibility.list)
        })
      }
      if (this.isSameRow) {
        this.cell1.getRow().cells.filter(this.cell1, this.cell2).forEach(cell => {
          cell.narrow(...this.cell1.possibility.list)
        })
      }
      this.cell1.getBlock().cells.filter(this.cell1, this.cell2).forEach(cell => {
        cell.narrow(...this.cell1.possibility.list)
      })
    }
  }

  checkSpecial () {
    if (
      this.cell1.possibility.compare(this.cell2.possibility) &&
      this.cell1.possibility.getLength() === 2
    ) {
      return true
    }
    return false
  }
}

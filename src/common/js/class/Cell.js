import CellIndex from './CellIndex'
import Possibility from './Possibility'

export default class Cell {
  constructor (number, index, table) {
    this.index = new CellIndex(index)
    this.table = table
    this.number = number
    this.possibility = new Possibility(number > 0 ? [] : [1, 2, 3, 4, 5, 6, 7, 8, 9])
    this.isPrepare = number > 0
    this.isChanged = false
  }

  getBlock () {
    return this.table.blocks.all[this.index.block]
  }

  getRow () {
    return this.table.rows.all[this.index.row]
  }

  getColumn () {
    return this.table.columns.all[this.index.column]
  }

  setNumber (number) {
    this.number = number
    this.isChanged = true
    this.possibility.removeAll()
  }

  reset () {
    this.isChanged = false
  }

  narrow (...numbers) {
    if (this.number > 0) {
      return
    }
    this.isChanged = this.possibility.remove(...numbers)
    this.checkPossibility()
  }

  check (cells) {
    if (this.number > 0) {
      cells.narrow(this.number)
    } else {
      this.checkPossibility()
    }
  }

  checkPossibility () {
    if (this.possibility.getLength() === 1) {
      return this.setNumber(this.possibility.getNumber())
    }
  }

  output () {
    return `<td${this.isPrepare ? ' class="prepare"' : ''}>${this.number === 0 ? '-' : this.number}</td>`
  }
}

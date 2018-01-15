import CellIndex from './CellIndex'
import CellFlag from './CellFlag'
import Possibility from './Possibility'

export default class Cell {
  constructor (number, index, table) {
    this.index = new CellIndex(index)
    this.flag = new CellFlag(number > 0)
    this.possibility = new Possibility(number > 0 ? [] : [1, 2, 3, 4, 5, 6, 7, 8, 9])
    this.table = table
    this.number = number
  }

  block () {
    const index = this.index.block
    return this.table.blocks.block(index)
  }

  row () {
    const index = this.index.row
    return this.table.rows.row(index)
  }

  column () {
    const index = this.index.column
    return this.table.columns.column(index)
  }

  reset () {
    this.flag.reset()
  }

  solve () {
    if (this.number > 0) {
      return false
    }
    this.decideNumberIfPossible()
  }

  decideNumberIfPossible () {
    if (this.possibility.isSpecified()) {
      const number = this.possibility.specifiedNumber()
      this.decideNumber(number)
    }
  }

  decideNumber (number) {
    this.number = number
    this.flag.change()
    this.possibility.removeAll()
  }

  narrow (...numbers) {
    if (this.number > 0) {
      return false
    }
    if (this.possibility.remove(...numbers)) {
      this.flag.change()
    }
    this.decideNumberIfPossible()
  }

  output () {
    const text = this.number === 0 ? '-' : this.number
    return `<td${this.flag.classAttr()}>${text}</td>`
  }
}

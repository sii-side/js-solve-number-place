import Cell from './Cell'
import Cells from './Cells'
import Rows from './Rows'
import Columns from './Columns'
import Blocks from './Blocks'

export default class Table {
  constructor (numberTable) {
    this.cells = new Cells(this.createCells(numberTable))
    this.rows = new Rows(this.cells.all)
    this.columns = new Columns(this.cells.all)
    this.blocks = new Blocks(this.cells.all)
  }

  createCells (numberTable) {
    return numberTable.map((number, index) => new Cell(number, index, this))
  }

  output () {
    return `
      <table>
        <colgroup span="3">
        <colgroup span="3">
        <colgroup span="3">
        ${this.rows.output()}
      </table>
    `
  }
}

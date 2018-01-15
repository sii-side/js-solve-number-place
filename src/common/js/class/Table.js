import Cell from './Cell'
import Cells from './Cells'
import Rows from './Rows'
import Columns from './Columns'
import Blocks from './Blocks'

export default class Table {
  constructor (numberTable) {
    this.cells = new Cells(this.createCells(numberTable))
    this.blocks = new Blocks(this.cells.allCells())
    this.rows = new Rows(this.cells.allCells())
    this.columns = new Columns(this.cells.allCells())
  }

  createCells (numberTable) {
    return numberTable.numbers().map((number, index) => new Cell(number, index, this))
  }

  solve () {
    this.cells.reset()
    this.blocks.solve()
    this.rows.solve()
    this.columns.solve()
  }

  output () {
    return `<table><colgroup span="3"><colgroup span="3"><colgroup span="3">${this.rows.output()}</table>`
  }
}

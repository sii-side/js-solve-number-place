import Column from './Column'

export default class Columns {
  constructor (cells) {
    this.all = this.create(cells)
  }

  create (cells) {
    return [...Array(9)].map((element, index) => {
      return new Column(this.getColumnCells(cells, index), index)
    })
  }

  column (index) {
    return this.all[index]
  }

  getColumnCells (cells, columnIndex) {
    return cells.filter(cell => cell.index.column === columnIndex)
  }

  solve () {
    this.all.forEach(column => {
      column.validate()
      column.solve()
    })
  }
}

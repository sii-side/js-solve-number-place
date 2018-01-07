import Cells from './Cells'

export default class Row {
  constructor (cells, index) {
    this.index = index
    this.cells = new Cells(cells)
  }

  output () {
    return `<tr>${this.cells.all.map(cell => cell.output()).join('')}</tr>`
  }
}

import Cells from './Cells'

export default class Column {
  constructor (cells, index) {
    this.index = index
    this.cells = new Cells(cells)
  }
}

export default class CellIndex {
  constructor (index) {
    this.table = index
    this.row = index / 9 | 0
    this.column = index % 9
    this.block = (index / 27 | 0) * 3 + index % 9 / 3 | 0
    this.columnInBlock = index % 3
    this.rowInBlock = (index / 9 | 0) % 3
  }
}

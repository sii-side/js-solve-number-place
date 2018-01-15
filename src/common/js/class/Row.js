import Region from './Region'
import Pairs from './Pairs'

export default class Row {
  constructor (cells, index) {
    this.index = index
    this.cells = new Region(cells)
    this.pairs = new Pairs(this.cells)
  }

  solve () {
    this.cells.solve()
    this.pairs.solve()
  }

  validate () {
    this.cells.validate()
  }

  output () {
    return `<tr>${this.cells.all.map(cell => cell.output()).join('')}</tr>`
  }
}

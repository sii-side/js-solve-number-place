import Region from './Region'
import Pairs from './Pairs'

export default class Column {
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
}

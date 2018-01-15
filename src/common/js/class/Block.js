import Region from './Region'
import Pairs from './Pairs'

export default class Block {
  constructor (cells, index) {
    this.cells = new Region(cells)
    this.index = index
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

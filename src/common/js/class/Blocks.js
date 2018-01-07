import Block from './Block'
import BlockRow from './BlockRow'
import BlockColumn from './BlockColumn'

export default class Blocks {
  constructor (cells) {
    this.all = this.create(cells)
    this.rows = this.createRows()
    this.columns = this.createColumns()
  }

  create (cells) {
    const blockCells = [...Array(cells.length / 9 | 0)].map(() => [])
    cells.forEach(cell => {
      blockCells[cell.index.block].push(cell)
    })
    return blockCells.map((cells, index) => new Block(cells, index))
  }

  createRows () {
    return [
      new BlockRow(this.all.slice(0, 3), 0),
      new BlockRow(this.all.slice(3, 6), 1),
      new BlockRow(this.all.slice(6, 9), 2)
    ]
  }

  createColumns () {
    return [
      new BlockColumn([this.all[0], this.all[3], this.all[6]], 0),
      new BlockColumn([this.all[1], this.all[4], this.all[7]], 1),
      new BlockColumn([this.all[2], this.all[5], this.all[8]], 2)
    ]
  }

  check () {
    this.all.forEach(block => {
      block.cells.check()
      block.check()
    })
    this.rows.forEach(blockRow => {
      blockRow.check()
    })
    this.columns.forEach(blockColumn => {
      blockColumn.check()
    })
  }
}

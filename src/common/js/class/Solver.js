export default class Solver {
  constructor (table) {
    this.table = table
  }

  solve () {
    do {
      this.table.cells.reset()
      this.checkTableOnce()
    } while (this.table.cells.countChanged() > 0)

    if (this.table.cells.countEmpty() > 0) {
      console.log('can\'t solved.')
    }
  }

  checkTableOnce () {
    this.table.rows.check()
    this.table.columns.check()
    this.table.blocks.check()
  }
}

export default class Solver {
  constructor (table) {
    this.table = table
  }

  solve () {
    do {
      if (this.table.cells.countError() > 0) {
        console.log('There was an error.')
        break
      }
      this.table.solve()
    } while (this.table.cells.countChanged() > 0)

    if (this.table.cells.countEmpty() > 0) {
      console.log('couldn\'t solve.')
    }
  }
}

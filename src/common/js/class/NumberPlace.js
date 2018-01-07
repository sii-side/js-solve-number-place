import Table from './Table'
import Solver from './Solver'

export default class NumberPlace {
  constructor (numberTable) {
    this.table = new Table(numberTable)
  }

  solve () {
    this.start()
    const solver = new Solver(this.table)
    solver.solve()
    this.finish()
  }

  start () {
    this.startTime = new Date().getTime()
  }

  finish () {
    this.finishTime = new Date().getTime()
    this.elapsedTime = this.finishTime - this.startTime
  }

  output () {
    return this.table.output()
  }
}

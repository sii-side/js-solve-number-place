import NumberTable from './NumberTable'
import Table from './Table'
import Solver from './Solver'

export default class NumberPlace {
  constructor (numberTable) {
    this.numberTable = new NumberTable(numberTable)
    this.table = new Table(this.numberTable)
    this.solver = new Solver(this.table)
  }

  solve () {
    this.start()
    this.solver.solve()
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

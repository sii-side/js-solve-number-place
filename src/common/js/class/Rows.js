import Row from './Row'

export default class Rows {
  constructor (cells) {
    this.all = this.create(cells)
  }

  create (cells) {
    return [...Array(9)].map((element, index) => {
      return new Row(cells.slice(index * 9, index * 9 + 9), index)
    })
  }

  check () {
    this.all.forEach(row => {
      row.cells.check()
    })
  }

  output () {
    return this.all.map(row => row.output()).join('')
  }
}

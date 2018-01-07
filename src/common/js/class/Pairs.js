import Pair from './Pair'

export default class Pairs {
  constructor (cells) {
    this.all = this.create(cells)
  }

  create (cells) {
    const pairs = []
    const filteredCells = cells.all.filter(cell => cell.number === 0)
    if (filteredCells.length === 0) {
      return pairs
    }
    filteredCells.forEach((cell, index) => {
      filteredCells.slice(index + 1).forEach(partner => {
        pairs.push(new Pair(cell, partner))
      })
    })
    return pairs
  }

  clean () {
    const newPairs = []
    this.all.forEach(pair => {
      if (pair.cell1.number === 0 && pair.cell2.number === 0) {
        newPairs.push(pair)
      }
    })
    this.all = newPairs
  }

  check () {
    this.all.forEach(pair => {
      pair.check()
    })
    this.clean()
  }
}

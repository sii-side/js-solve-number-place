import Pair from './Pair'

export default class Pairs {
  constructor (cells) {
    this.all = this.create(cells)
  }

  create (cells) {
    const filteredCells = cells.filterByEmpty()
    if (filteredCells.length === 0) {
      return []
    }
    return this.makePairs(filteredCells)
  }

  makePairs (filteredCells) {
    const pairs = []
    filteredCells.allCells().forEach((cell, index) => {
      filteredCells.allCells().slice(index + 1).forEach(partner => {
        pairs.push(new Pair(cell, partner))
      })
    })
    return pairs
  }

  pair (index) {
    return this.all[index]
  }

  clean () {
    this.all = this.all.filter(pair => !pair.isSpecifiedEither())
  }

  solve () {
    this.all.forEach(pair => {
      pair.solve()
    })
    this.clean()
  }
}

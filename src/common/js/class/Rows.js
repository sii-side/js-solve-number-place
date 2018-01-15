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

  row (index) {
    return this.all[index]
  }

  solve () {
    this.all.forEach(row => {
      row.validate()
      row.solve()
    })
    ;[1, 2, 3, 4, 5, 6, 7, 8, 9].forEach(number => {
      this.solveRows(number)
    })
  }

  solveRows (number) {
    this.all.forEach((firstRow, index) => {
      this.all.slice(index + 1).forEach(secondRow => {
        this.searchDiagonal(number, firstRow, secondRow)
      })
    })
  }

  searchDiagonal (number, firstRow, secondRow) {
    const firstCells = firstRow.cells.filterByPossibilityNumber(number)
    const secondCells = secondRow.cells.filterByPossibilityNumber(number)
    if (firstCells.length !== 2 || secondCells.length !== 2) {
      return
    }
    if (firstCells.cell(0).index.column !== secondCells.cell(0).index.column) {
      return
    }
    if (firstCells.cell(1).index.column === secondCells.cell(1).index.column) {
      this.narrowByDiagonal(number, firstCells, secondCells)
    }
  }

  narrowByDiagonal (number, firstCells, secondCells) {
    const firstColumn = firstCells.cell(0).column()
    const secondColumn = firstCells.cell(1).column()
    const firstExcludeCells = [firstCells.cell(0), secondCells.cell(0)]
    const secondExcludeCells = [firstCells.cell(1), secondCells.cell(1)]
    firstColumn.cells.filterByExcludeCells(...firstExcludeCells).narrow(number)
    secondColumn.cells.filterByExcludeCells(...secondExcludeCells).narrow(number)
  }

  output () {
    return this.all.map(row => row.output()).join('')
  }
}

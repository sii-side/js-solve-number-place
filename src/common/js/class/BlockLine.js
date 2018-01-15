import Cells from './Cells'

export default class BlockLine {
  solve () {
    ;[1, 2, 3, 4, 5, 6, 7, 8, 9].forEach(number => {
      this.solveByNumber(number)
    })
  }

  solveByNumber (number) {
    const filteredBlocks = this.filterBlocks(number)
    if (filteredBlocks.length === 2) {
      this.checkLines(number, filteredBlocks)
    }
  }

  filterBlocks (number) {
    return this.all.map(block => {
      return block.cells.filterByPossibilityNumber(number)
    }).filter(cells => {
      return cells.length === 2
    })
  }

  checkLines (number, filteredBlocks) {
    if (this.isBlockRow()) {
      this.solveBlocksByRow(number, this.cellsPatterns(filteredBlocks))
    } else if (this.isBlockColumn()) {
      this.solveBlocksByColumn(number, this.cellsPatterns(filteredBlocks))
    }
  }

  cellsPatterns (filteredBlocks) {
    return [
      new Cells([filteredBlocks[0].cell(0), filteredBlocks[1].cell(0)]),
      new Cells([filteredBlocks[0].cell(1), filteredBlocks[1].cell(1)]),
      new Cells([filteredBlocks[0].cell(0), filteredBlocks[1].cell(1)]),
      new Cells([filteredBlocks[0].cell(1), filteredBlocks[1].cell(0)])
    ]
  }

  solveBlocksByRow (number, cellsPatterns) {
    if (cellsPatterns[0].isSameRow() && cellsPatterns[1].isSameRow()) {
      const row0 = cellsPatterns[0].cell(0).row()
      const cells0 = row0.cells.filterByExcludeCells(...cellsPatterns[0].allCells())
      const row1 = cellsPatterns[1].cell(0).row()
      const cells1 = row1.cells.filterByExcludeCells(...cellsPatterns[1].allCells())
      this.narrow(number, cells0, cells1)
    } else if (cellsPatterns[2].isSameRow() && cellsPatterns[3].isSameRow()) {
      const row0 = cellsPatterns[2].cell(0).row()
      const cells0 = row0.cells.filterByExcludeCells(...cellsPatterns[2].allCells())
      const row1 = cellsPatterns[3].cell(0).row()
      const cells1 = row1.cells.filterByExcludeCells(...cellsPatterns[3].allCells())
      this.narrow(number, cells0, cells1)
    }
  }

  solveBlocksByColumn (number, cellsPatterns) {
    if (cellsPatterns[0].isSameColumn() && cellsPatterns[1].isSameColumn()) {
      const column0 = cellsPatterns[0].cell(0).column()
      const cells0 = column0.cells.filterByExcludeCells(...cellsPatterns[0].allCells())
      const column1 = cellsPatterns[1].cell(0).column()
      const cells1 = column1.cells.filterByExcludeCells(...cellsPatterns[1].allCells())
      this.narrow(number, cells0, cells1)
    } else if (cellsPatterns[2].isSameColumn() && cellsPatterns[3].isSameColumn()) {
      const column0 = cellsPatterns[2].cell(0).column()
      const cells0 = column0.cells.filterByExcludeCells(...cellsPatterns[2].allCells())
      const column1 = cellsPatterns[3].cell(0).column()
      const cells1 = column1.cells.filterByExcludeCells(...cellsPatterns[3].allCells())
      this.narrow(number, cells0, cells1)
    }
  }

  narrow (number, ...cellsGroup) {
    cellsGroup.forEach(cells => {
      cells.narrow(number)
    })
  }
}

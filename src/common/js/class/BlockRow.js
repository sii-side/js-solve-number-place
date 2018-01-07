import Cells from './Cells'

export default class BlockRow {
  constructor (blocks, index) {
    this.index = index
    this.all = blocks
  }

  check () {
    [1, 2, 3, 4, 5, 6, 7, 8, 9].forEach(number => {
      const filtered = this.all.map(block => new Cells(block.cells.filterByPossibilityNumber(number))).filter(cells => cells.getLength() === 2)
      if (
        filtered.length === 2
      ) {
        if (
          new Cells([filtered[0].getCell(0), filtered[1].getCell(0)]).checkOnSameRow() &&
          new Cells([filtered[0].getCell(1), filtered[1].getCell(1)]).checkOnSameRow()
        ) {
          new Cells(filtered[0].getCell(0).getRow().cells.filter(filtered[0].getCell(0), filtered[1].getCell(0))).narrow(number)
          new Cells(filtered[0].getCell(1).getRow().cells.filter(filtered[0].getCell(1), filtered[1].getCell(1))).narrow(number)
        } else if (
          new Cells([filtered[0].getCell(0), filtered[1].getCell(1)]).checkOnSameRow() &&
          new Cells([filtered[0].getCell(1), filtered[1].getCell(0)]).checkOnSameRow()
        ) {
          new Cells(filtered[0].getCell(0).getRow().cells.filter(filtered[0].getCell(0), filtered[1].getCell(1))).narrow(number)
          new Cells(filtered[0].getCell(1).getRow().cells.filter(filtered[0].getCell(1), filtered[1].getCell(0))).narrow(number)
        }
      }
    })
  }
}

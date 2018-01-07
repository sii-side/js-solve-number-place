import Cells from './Cells'
import Pairs from './Pairs'

export default class Block {
  constructor (cells, index) {
    this.index = index
    this.cells = new Cells(cells)
    this.pairs = new Pairs(this.cells)
  }

  check () {
    [1, 2, 3, 4, 5, 6, 7, 8, 9].forEach(number => {
      this.checkPossibility(number)
    })
    this.pairs.check()
  }

  checkPossibility (number) {
    // Block内にその数字を持ったセルがある場合はチェック不要
    if (this.cells.filterByCellNumber(number).length === 1) {
      return
    }
    const filteredCells = new Cells(this.cells.filterByPossibilityNumber(number))
    // Block内にその数字が入る可能性のあるセルが1つしかない場合はそのセルに数字を入れる
    if (filteredCells.getLength() === 1) {
      return filteredCells.getCell(0).setNumber(number)
    // 2つ以上でかつ1列に並んでいる場合は、その行または列の他のBlockから可能性を消す
    } else if (filteredCells.getLength() > 1) {
      if (filteredCells.checkOnSameColumn()) {
        filteredCells.getCell(0).getColumn().cells.filter(...filteredCells.all).forEach(cell => {
          cell.narrow(number)
        })
      } else if (filteredCells.checkOnSameRow()) {
        filteredCells.getCell(0).getRow().cells.filter(...filteredCells.all).forEach(cell => {
          cell.narrow(number)
        })
      }
    }
  }
}

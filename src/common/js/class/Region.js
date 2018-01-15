import Cells from './Cells'

export default class Region extends Cells {
  isBlock () {
    const isSameColumn = this.cell(0).index.column === this.cell(8).index.column
    const isSameRow = this.cell(0).index.row === this.cell(8).index.column
    return !isSameColumn && !isSameRow
  }

  solve () {
    super.solve()
    ;[1, 2, 3, 4, 5, 6, 7, 8, 9].forEach(number => {
      this.checkPossibilityByNumber(number)
    })
  }

  checkPossibilityByNumber (number) {
    // Region内にその数字を持ったセルがある場合は他のセルから可能性を除外
    if (this.filterByCellNumber(number).length === 1) {
      return this.narrow(number)
    }
    const filteredCells = this.filterByPossibilityNumber(number)
    // Region内にある数字が入る可能性のあるセルが1つしかない場合は、そのセルに数字を入れる
    if (filteredCells.length === 1) {
      return filteredCells.cell(0).decideNumber(number)
    // Block内かつ2つの場合はBlock内で可能性を消し、並んでいる場合はその行または列からも消す
    } else if (this.isBlock() && filteredCells.length === 2) {
      this.filterByExcludeCells(...filteredCells.allCells()).narrow(number)
      this.checkFilteredIsSameLineInBlock(number, filteredCells)
    }
  }

  checkFilteredIsSameLineInBlock (number, filteredCells) {
    const cell = filteredCells.cell(0)
    if (filteredCells.isSameRow()) {
      cell.row().cells.filterByExcludeCells(...filteredCells.allCells()).narrow(number)
    } else if (filteredCells.isSameColumn()) {
      cell.column().cells.filterByExcludeCells(...filteredCells.allCells()).narrow(number)
    }
  }

  validate () {
    let isValid = true
    ;[1, 2, 3, 4, 5, 6, 7, 8, 9].forEach(number => {
      if (this.checkDuplication(number)) {
        isValid = false
      }
    })
    return isValid
  }

  checkDuplication (number) {
    const filteredCells = this.filterByCellNumber(number)
    if (filteredCells.length > 1) {
      filteredCells.error()
      return true
    }
    return false
  }
}

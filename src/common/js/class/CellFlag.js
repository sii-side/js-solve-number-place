export default class CellFlag {
  constructor (isPrepare) {
    this.isPrepare = isPrepare
    this.isChanged = false
    this.isError = false
  }

  reset () {
    this.isChanged = false
  }

  change () {
    this.isChanged = true
  }

  error () {
    this.isError = true
  }

  className () {
    let className = ''
    className += this.isPrepare ? 'prepare ' : ''
    className += this.isError ? 'error ' : ''
    return className.trim()
  }

  classAttr () {
    const className = this.className()
    return className ? ` class="${className}"` : ''
  }
}

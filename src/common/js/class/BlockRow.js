import BlockLine from './BlockLine'

export default class BlockRow extends BlockLine {
  constructor (blocks, index) {
    super()
    this.all = blocks
    this.index = index
  }

  isBlockRow () {
    return true
  }

  isBlockColumn () {
    return false
  }
}

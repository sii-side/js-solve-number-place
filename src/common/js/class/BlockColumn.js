import BlockLine from './BlockLine'

export default class BlockColumn extends BlockLine {
  constructor (blocks, index) {
    super()
    this.all = blocks
    this.index = index
  }

  isBlockRow () {
    return false
  }

  isBlockColumn () {
    return true
  }
}

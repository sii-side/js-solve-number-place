import NumberPlace from './class/NumberPlace'

const numberTables = [
  [
    0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0
  ],
  [
    0, 0, 0, 0, 0, 0, 0, 2, 0,
    0, 3, 0, 0, 0, 9, 0, 0, 6,
    0, 0, 1, 0, 4, 7, 0, 0, 0,
    0, 0, 0, 1, 0, 0, 4, 7, 0,
    0, 0, 5, 0, 0, 0, 3, 0, 0,
    0, 2, 7, 0, 0, 8, 0, 0, 0,
    0, 0, 0, 5, 3, 0, 8, 0, 0,
    8, 0, 0, 2, 0, 0, 0, 6, 0,
    0, 1, 0, 0, 0, 0, 0, 0, 0
  ],
  [
    0, 0, 0, 0, 0, 0, 2, 5, 0,
    0, 0, 0, 0, 8, 9, 0, 0, 7,
    0, 0, 0, 2, 0, 0, 0, 0, 8,
    0, 0, 4, 0, 6, 0, 0, 1, 0,
    0, 6, 0, 9, 0, 4, 0, 3, 0,
    0, 7, 0, 0, 2, 0, 5, 0, 0,
    2, 0, 0, 0, 0, 6, 0, 0, 0,
    3, 0, 0, 5, 1, 0, 0, 0, 0,
    0, 8, 9, 0, 0, 0, 0, 0, 0
  ],
  [
    0, 9, 0, 0, 0, 0, 0, 4, 0,
    2, 0, 0, 9, 0, 6, 0, 0, 1,
    0, 0, 5, 0, 0, 0, 3, 0, 0,
    0, 4, 0, 3, 0, 7, 0, 6, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 1, 0, 2, 0, 5, 0, 8, 0,
    0, 0, 3, 0, 0, 0, 8, 0, 0,
    7, 0, 0, 5, 0, 1, 0, 0, 3,
    0, 6, 0, 0, 0, 0, 0, 1, 0
  ],
  [
    0, 0, 9, 0, 4, 0, 6, 0, 0,
    2, 7, 0, 0, 0, 0, 0, 4, 9,
    8, 0, 0, 0, 0, 0, 0, 0, 1,
    0, 0, 0, 9, 0, 8, 0, 0, 0,
    3, 0, 0, 0, 0, 0, 0, 0, 5,
    0, 0, 0, 3, 0, 7, 0, 0, 0,
    1, 0, 0, 0, 0, 0, 0, 0, 4,
    4, 3, 0, 0, 0, 0, 0, 7, 8,
    0, 0, 2, 0, 1, 0, 5, 0, 0
  ],
  [
    3, 0, 0, 8, 0, 2, 0, 0, 1,
    0, 0, 7, 0, 0, 0, 6, 0, 0,
    0, 9, 0, 0, 0, 0, 0, 4, 0,
    8, 0, 0, 0, 6, 0, 0, 0, 5,
    0, 0, 0, 4, 0, 9, 0, 0, 0,
    7, 0, 0, 0, 3, 0, 0, 0, 9,
    0, 7, 0, 0, 0, 0, 0, 3, 0,
    0, 0, 2, 0, 0, 0, 7, 0, 0,
    5, 0, 0, 2, 0, 1, 0, 0, 4
  ]
]

const selectTable = document.querySelector('.selectTable')
numberTables.forEach((numberTable, index) => {
  selectTable.innerHTML += `<option>${index}</option>`
})

const selectNumber = document.querySelector('.selectNumber')
Array.from(document.querySelectorAll('table td')).forEach(td => {
  td.innerHTML = selectNumber.innerHTML
})

document.querySelector('.start').addEventListener('click', e => {
  /*
  const numberTable = Array.from(document.querySelector('table').querySelectorAll('select')).map(select => {
    if (select.selectedIndex === 0) {
      return 0
    } else {
      return select.options[select.selectedIndex].text - 0
    }
  })
  */
  const numberTable = numberTables[selectTable.selectedIndex]
  const game = new NumberPlace(numberTable)
  game.solve()
  console.dir(game)
  document.querySelector('.result').innerHTML = game.output()
})

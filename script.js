// Selecting the html elements
const seven = document.querySelector('.seven')
const buttons = document.querySelectorAll('.btn')

count = 7

// Adding event listener to the buttons
buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    let currentBtn = e.currentTarget.classList

    if (currentBtn.contains('add') && count < 100) {
      count++
    } else if (currentBtn.contains('lower') && count < 0 ) {
      count--
      if (count === 45) {
        count = 43
      } else if (count === 36) {
        count = 33
      }
    } 
    seven.textContent = count
  })
})

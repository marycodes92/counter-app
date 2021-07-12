// Selecting the html elements
const seven = document.querySelector('.seven')
const buttons = document.querySelectorAll('.btn')

count = 7

// Adding event listener to the buttons
buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    let currentBtn = e.currentTarget.classList

    if (currentBtn.contains('add')) {
      count++
    } else if (currentBtn.contains('lower')) {
      count--
    } else {
      count = 0
    }
    // Adding range to the counter
    if (count <= 0 && currentBtn.contains('lower')) {
      count = 0
    }
    if (count == 45 && currentBtn.contains('lower')) {
      count = 0
    }
    seven.textContent = count
  })
})

const ulList = document.createElement('ul')
const liItem = document.createElement('li')
liItem.textContent = 'cześć'

document.body.appendChild(ulList)
ulList.appendChild(liItem)

const testItem = document.querySelector('.test-add')
const paragraph = document.createElement('p')
paragraph.textContent = 'test'
testItem.appendChild(paragraph)
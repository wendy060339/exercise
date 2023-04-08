// 目的：換頁時，導覽列按鈕變色
// 撰寫邏輯：當點選的e.target包含action，該元件的class加上active變色，並讓瀏覽器不要重整
// 但點選下個按鍵，原本按鍵因為不會重整，因此所有按鍵都被加上active，不確定一開始寫法是否正確或哪裡需要修正


// const navList = document.querySelector('#nav-list')

// navList.addEventListener('click', function onClicked(e) {
//   e.preventDefault()

//   if (e.target.matches('.btn')) {
//     e.target.classList.add('active')
//     console.log(e.target.classList)
//   } else {
//     e.target.classList.remove('active')
//   }
// })

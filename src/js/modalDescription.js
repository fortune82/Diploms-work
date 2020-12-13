//------------------------Модальное окно с описанием при клике на карточку часов в разеле "Сезон 2020/21"
// window.onload = () => { // При загрузке страницы  запускается функция
//     clockImage.forEach((e) => {

//         e.onclick = () => {

//             const fetchClock = async () => {
//                 const url3 = `http://127.0.0.1:3007/catalog`
//                 const response3 = await fetch(url3);
//                 const result3 = await response3.json()
//                 result3.forEach((elem) => {

//                     let x = e.getAttribute('data-clock') // получаем значенние атрибута 
//                     if (x == elem.model) {
//                         console.log(elem.model)
//                         modalClockDescriptionDescription.innerHTML = `${elem.description}`;
//                         modalClockDescriptionCharacteristic.innerHTML = `${elem.charakteristik}`;
//                         modalClockDescriptionPrice.innerHTML = `${elem.price} грн.`;
//                         modalClockDescriptionImg.innerHTML = `<img src="${elem.image}" alt="" data-clock = "${elem.model}">`
//                         modalClockDescription.style.display = 'block';
//                     }
//                 })
//             }
//             fetchClock()
//         }

//     })
// }


// let filterChooseClock = document.querySelector(".filterChooseClock"); // боковая паенль выбора (сортировка, фильтрация) часов на странице Catalog
// let backFilter = document.querySelector(".backFilter"); // боковая паенль выбора (сортировка, фильтрация) часов на странице Catalog
// let menuFilterChooseClock = document.querySelector(".menuFilterChooseClock"); // боковая паенль выбора (сортировка, фильтрация) часов на странице Catalog
// // ------------------боковая паенль выбора (сортировка, фильтрация) часов на странице Catalog

// menuFilterChooseClock.addEventListener("click", () => {
//     menuFilterChooseClock.classList.toggle('active');
//     filterChooseClock.classList.toggle('show');
// })

// backFilter.addEventListener("click", () => {
//     menuFilterChooseClock.classList.remove('active');
//     filterChooseClock.classList.remove('show');
// })
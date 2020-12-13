// // ----------------------------------Поиск товара-------------------
// let search = document.querySelector(".lastLi");
// let searchHidden = document.querySelector('.searchHidden');

// search.addEventListener('click', () => {
//     searchHidden.classList.toggle('searchInput'); //Выводим поле ввода для поиска (переключаем класс для отображения скрытой строки)
//     let searchInput = document.querySelector('.searchInput'); // получаем в js поле ввода с классом 'searchInput'
//     searchInput.setAttribute('list', 'searchHiddens'); //для визульного отображения поиска (если есть совпадения) добавляем аттрибуты
//     let newDoc = document.createElement('datalist');
//     newDoc.setAttribute('id', 'searchHiddens'); // Присваиваем 
//     searchInput.insertAdjacentElement('afterend', newDoc); // Добавляем сразу за input наш новый созданный эллемент

//     const fetchData = async () => {
//         const url2 = `http://127.0.0.1:3007/catalog`;
//         const response = await fetch(url2);
//         const searchClock = await response.json();

//         searchClock.forEach((elem) => {
//             newDoc.innerHTML += `<option value="${elem.model}">` // Добавляем все наши модели в html (в dataList)
//         })
//     }
//     fetchData()
//     // if (searchHidden.classList.contains('searchInput') == false) {
//     //     searchInput.removeAttribute('list', 'searchHiddens')
//     // }

//     searchInput.addEventListener("keyup", (e) => { //после того, как нажали кнопку 
//         let modelValue = searchInput.value; // Получаем значение вводимое пользователем в поисковую строку

//         if (e.keyCode === 13) { // Если нажата кнопка Enter 
//             // создаем окно с описанием часов

//             const fetchClock = async () => {
//                 const url3 = `http://127.0.0.1:3007/catalog`
//                 const response3 = await fetch(url3);
//                 const result3 = await response3.json()
//                 result3.forEach((elem) => { // перебираем все наявные в файле json объекты с часами
//                     if (elem.model == modelValue) { // и сравниваем значение всех ключей model полученых из базы с введенным пользователем названием часов, которые он ищет (если при переборе массива значений с ключом model находим совпадение значения кдюча model с введенным пользователем назанием, тогда строим модальное окно с описанием)
//                         modalClockDescriptionDescription.innerHTML = `${elem.description}`;
//                         modalClockDescriptionCharacteristic.innerHTML = `${elem.charakteristik}`;
//                         modalClockDescriptionImg.innerHTML = `<img src="${elem.image}" alt="" data-clock = "${elem.model}">`
//                         modalClockDescription.style.display = 'block';
//                     }
//                 })
//             }
//             fetchClock()
//         }
//     })
// })
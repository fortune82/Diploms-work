let search = document.querySelector(".lastLi");
let searchHidden = document.querySelector('.searchHidden');
let seasonClock = document.querySelectorAll('.season__clock-description p'); // получаем все карточки с товаром
let seasonClockBlock = document.querySelectorAll('.season__clock-model'); // получаем блок с товаром "Сезон 2020/21"
let clockSlider = document.querySelector('.season__clock-description2');
let seasonClockDescription = document.querySelector('.season__clock-description');
let buttonNewClock = document.querySelector('.newItems button'); // Кнопка для подгрузки карточек с часами
let newItemsClock = document.querySelector('.newItems__clock');
let headerContactsAutorization = document.querySelector('.header__contacts-autorization'); //кнопка войти/регистрация
let autorization = document.querySelector(".modal"); // модальное окно авторизации
// let exitAutorization = document.querySelectorAll(".exit"); // кнопка выхода из модального окна авторизации
let inputPassword = document.querySelectorAll('#autorization input'); // для перебора всех input модального окна (при закрытии модального окна будем очищать все input)
let mailingButton = document.querySelector(".mailingButton"); //кнопка в скрытом модальном окне подписаться на рассылку
let mailingModal = document.querySelector(".mailingModal"); // блок модальнога окна рассылки
let descriptionMailingButton = document.querySelector(".description__mailing-button"); // кнопка подписаться на рассылку 
let backMailingModal = document.querySelector(".backMailingModal"); // прослойка в модальном окне рассылки сделаннная для того, чтоб можно закрывать это окно путем нажатия на любую, кроме самого окна, область.
let formRegistraition = document.querySelector(".formRegistraition")
let btnChoose = document.querySelector('.choose button');
let [...chooseInp] = document.querySelectorAll('.choose input[type="checkbox"]'); // Все Input в поле "Выбор по категориям"
let sortChooseButtonMin = document.querySelector('.sortMin');
let sortChooseButtonMax = document.querySelector('.sortMax');
let slide = document.querySelectorAll(".slide"); // класс для картинки из карусели сезон 2020/21
let showing = document.querySelectorAll(".showing"); //класс для картинки из карусели сезон 2020/21
let clockImage = document.querySelectorAll(".clock img"); //картинки
let modalClockDescription = document.querySelector(".modalClockDescription"); // модальное окно для описание часов
let modalClockDescriptionDescription = document.querySelector(".modalClockDescription__description"); //блок для динамической подгрузки описания часов в модальном окне
let modalClockDescriptionCharacteristic = document.querySelector(".modalClockDescription__characteristic"); //блок для динамической подгрузки характеристики часов в модальном окне
let modalClockDescriptionImg = document.querySelector('.modalClockDescription__img'); // мини изображение для модального окна с описанием часов
let modalClockDescriptionPrice = document.querySelector(".modalClockDescription__price"); // блок для динамической подгрузки цены
let passw = document.querySelector(".passw");
let priceClock = document.getElementById('priceClock'); // переменная для фильтрации по цене
let valueRangeOut = document.querySelector('.valueRangeOut'); // блок вывода вводимой цены
let brendsBtn = document.querySelector(".brendsBtn"); // Кнопка выбора бренда
let brends = document.querySelector(".brends"); // список с брендами
let resetChoose = document.querySelector(".resetChoose"); // кнопка сброса фильтров
let miniMenu = document.querySelector(".mini-menu"); //кнопка для скрытия меню верхнего
let menu = document.querySelector(".menu"); // список верхнего меню
let backMenu = document.querySelector(".back"); // кнопка вехода из меню (при медиа запросе)
let menuLink = document.querySelector(".menu li a"); // ссылки меню в модальном окне (при меди запросе)
let filterChooseClock = document.querySelector(".filterChooseClock"); // боковая паенль выбора (сортировка, фильтрация) часов на странице Catalog
let backFilter = document.querySelector(".backFilter"); // боковая паенль выбора (сортировка, фильтрация) часов на странице Catalog
let menuFilterChooseClock = document.querySelector(".menuFilterChooseClock"); // боковая паенль выбора (сортировка, фильтрация) часов на странице Catalog



// ---------------------верхнее меню----------------------------

miniMenu.addEventListener("click", () => {
    miniMenu.classList.toggle('active');
    menu.classList.toggle('show');
})

backMenu.addEventListener("click", () => {
    miniMenu.classList.remove('active');
    menu.classList.remove('show');
})




// ----------------------------------Поиск товара-------------------
search.addEventListener('click', () => {
    searchHidden.classList.toggle('searchInput'); //Выводим поле ввода для поиска (переключаем класс для отображения скрытой строки)
    let searchInput = document.querySelector('.searchInput'); // получаем в js поле ввода с классом 'searchInput'
    searchInput.setAttribute('list', 'searchHiddens'); //для визульного отображения поиска (если есть совпадения) добавляем аттрибуты
    let newDoc = document.createElement('datalist');
    newDoc.setAttribute('id', 'searchHiddens'); // Присваиваем 
    searchInput.insertAdjacentElement('afterend', newDoc); // Добавляем сразу за input наш новый созданный эллемент

    const fetchData = async () => {
        const url2 = `http://127.0.0.1:3007/catalog`;
        const response = await fetch(url2);
        const searchClock = await response.json();

        searchClock.forEach((elem) => {
            newDoc.innerHTML += `<option value="${elem.model}">` // Добавляем все наши модели в html (в dataList)
        })
    }
    fetchData()
    // if (searchHidden.classList.contains('searchInput') == false) {
    //     searchInput.removeAttribute('list', 'searchHiddens')
    // }

    searchInput.addEventListener("keyup", (e) => { //после того, как нажали кнопку 
        let modelValue = searchInput.value; // Получаем значение вводимое пользователем в поисковую строку

        if (e.keyCode === 13) { // Если нажата кнопка Enter 
            // создаем окно с описанием часов

            const fetchClock = async () => {
                const url3 = `http://127.0.0.1:3007/catalog`
                const response3 = await fetch(url3);
                const result3 = await response3.json()
                result3.forEach((elem) => { // перебираем все наявные в файле json объекты с часами
                    if (elem.model == modelValue) { // и сравниваем значение всех ключей model полученых из базы с введенным пользователем названием часов, которые он ищет (если при переборе массива значений с ключом model находим совпадение значения кдюча model с введенным пользователем назанием, тогда строим модальное окно с описанием)
                        modalClockDescriptionDescription.innerHTML = `${elem.description}`;
                        modalClockDescriptionCharacteristic.innerHTML = `${elem.charakteristik}`;
                        modalClockDescriptionPrice.innerHTML = `${elem.price} грн.`;
                        modalClockDescriptionImg.innerHTML = `<img src = "${elem.image}" alt = "" data-clock = "${elem.model}" >`
                        modalClockDescription.style.display = 'block';
                    }
                })
            }
            fetchClock()
        }
    })
})




// ------------------------Регистрация------------------------------
headerContactsAutorization.onclick = () => {
    autorization.style.display = 'block';
}

// -------------------Кнопка закрытия модальных окон----------------------
exitAutorization.forEach((e) => {
    e.addEventListener('click', () => {
        autorization.style.display = 'none';
        modalClockDescription.style.display = 'none';
    })
});

//---------------Подписка на рассылку-----------------------------
descriptionMailingButton.onclick = () => {
    mailingModal.style.display = 'block';
}
// -------------Удаление модального окна подписки на рассылку ------------------------
backMailingModal.addEventListener('click', () => {
    mailingModal.style.display = 'none';
})

// // --------------валидация почты-------------------
// function validateEmail(passw) {
//     var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(String(email).toLowerCase());
// }


//    ------------------- карусель-------------------------

setInterval(() => {
    setTimeout(() => {
        slide.forEach((el) => {
            el.style.display = 'none';

        });
        showing.forEach((e) => {
            e.style.display = 'block';
        })
    }, 1);

    setTimeout(() => {
        showing.forEach((e) => {
            e.style.display = 'none';
        });
        slide.forEach((el) => {
            el.style.display = 'block';
        })

    }, 3000);
}, 6000);

// -----------------------------------------------------


window.onload = () => { // При загрузке страницы  запускается функция


    //---------------Запрос на серевер и вызгрузка  товара в секцию "Новые поступления"-------------------------

    const fetchData2 = async () => { //async  - функция всегда возвращает Promise (специальный объект, который содержит своё состояние. Вначале pending («ожидание»), затем – одно из: fulfilled («выполнено успешно») или rejected («выполнено с ошибкой»)). 
        const url2 = `http://127.0.0.1:3007/catalog` // создаем переменную, в которую передаем url для отправки запроса (см. ниже метод fetch())
        const response2 = await fetch(url2) // Создаем переменую в которую передаем наши сетевые запросы на сервер (Mackoon) (для скачивания содержимого по адресу url). Метод fetch()делает сетевые запросы и получает информацию с сервера Оператор await используется для ожидания окончания Promise 
        const clock2 = await response2.json() // Создаем переменную в которую передаем полученный ответ в формате json  (декодирует ответ в формате JSON)
        // ------------------Выводим весь массив часов

        let downloadAllClock = function () {
            clock2.forEach(function (elem) {
                newItemsClock.innerHTML += ` 
                <div class="season__clock-description" data-price="${elem.price}">
                <div class="clock">
                <img src="${elem.image}" alt="clock" data-clock = "${elem.model}" >
                </div>
                <p>${elem.model}</p>
                <p>${elem.price} грн.</p>
                </div>`
            })
        }

        downloadAllClock();


        // --------------------------модальное окно вывода карточки товара с описанием -------------------------

        clockImage.forEach((e) => {
            e.onclick = () => {
                clock2.forEach((elem) => {
                    let x = e.getAttribute('data-clock') // получаем значенние атрибута 
                    if (x == elem.model) {
                        console.log(elem.model)
                        modalClockDescriptionDescription.innerHTML = `${elem.description}`;
                        modalClockDescriptionCharacteristic.innerHTML = `${elem.charakteristik}`;
                        modalClockDescriptionPrice.innerHTML = `${elem.price} грн.`;
                        modalClockDescriptionImg.innerHTML = `<img src="${elem.image}" alt="" data-clock = "${elem.model}">`
                        modalClockDescription.style.display = 'block';
                    }
                })
            }
        })




        // ---------------------------------------------------

        // Выводим значение (value) цены на экран
        priceClock.addEventListener('input', function () {
            valueRangeOut.innerHTML = priceClock.value;
        })
        // --------------------------

        // ---------Выпадающий список с брендами часов в поле "Выбор по категориям"
        brendsBtn.addEventListener("click", () => {
            brends.classList.toggle("brendsHidden")
        })

        // // ------------------Проводим фильтрацию в зависимости от выбранной категории
        // let allFilter = new Set();
        // btnChoose.addEventListener('click', () => {
        //     console.log('меня нажали')

        //     console.log(allFilter)
        //     newItemsClock.innerHTML = ""; // очищаем страницу вывода, чтоб не накапливались карточки с часами
        //     sortChooseButtonMax.style.backgroundColor = 'transparent'; // убираем стили с кнопок сортировка товара, если они включены
        //     sortChooseButtonMax.style.color = '#fff';
        //     sortChooseButtonMin.style.backgroundColor = 'transparent';
        //     sortChooseButtonMin.style.color = '#fff';

        //     chooseInp.forEach(function (elem) {
        //         if (elem.checked) {

        //             // ------------------фильтр по полу-------------------

        //             let manClock = elem.id; // получаем id выбранного checkboxa, чтоб его подставить для фильтрамвыводимых товаров
        //             let clockChoose = clock2.filter(function (e) {
        //                 return e.id === manClock // сравниваем и возвращаем только совпадения выбраного (отмеченного) checkboxa и id массива clock
        //             })

        //             // ------------фильтр по бренду-----------------------

        //             let brendClockChoose = elem.id; // получаем id выбранного checkboxa c часами, чтоб его подставить для фильтра выводимых товаров
        //             let clockChoose2 = clock2.filter(function (e) {
        //                 return e.brend === brendClockChoose // сравниваем и возвращаем только совпадения выбраного (отмеченного) checkboxa и id массива clock
        //             })

        //             // -----------------------------фильтрация по цене------------------------
        //             let priceInp = +priceClock.value; // получаем значение цены
        //             let clockChoosePrice = [] //создаем пустой массив, куда будут попадать все часы, цены которых не превышает заданной пользователем
        //             clockChoosePrice = clock2.filter(function (e) { // clock2 это переменная в которую передаем полученный ответ в формате json  
        //                 return e.price < priceInp // сравниваем и возвращаем только часы с ценой ниже границы введенной пользователем
        //             })


        //             clockChoose.forEach((e) => {
        //                 allFilter.add(e)
        //             })

        //             clockChoosePrice.forEach((e) => {
        //                 allFilter.add(e)
        //             })
        //             clockChoose2.forEach((e) => {
        //                 allFilter.add(e)
        //             })

        //             console.log(allFilter)


        //             allFilter.forEach((e) => {
        //                 newItemsClock.innerHTML += ` 
        //                 <div class="season__clock-description" data-price = "${e.price}">
        //                 <div class="clock">
        //                 <img src="${e.image}" alt="clock" data-clock = "${e.model}">
        //                 </div>
        //                 <p>${e.model}</p>
        //                 <p>${e.price} грн.</p>
        //                 </div>  
        //                 `
        //             })
        //         }
        //     })
        //     allFilter.clear();

        // })



        // for (i = 0; i < clockChoose.length; i++) {
        //     newItemsClock.innerHTML = "" // очищаем поле вывода чтоб из-за цикла не повторялись выводимые часы
        //     console.log(clockChoose[i].id)
        //     for (k = 0; k < clockChoosePrice.length; k++) {
        //         console.log(clockChoosePrice[k].id)
        //         if (clockChoose[i].id === clockChoosePrice[k].id) {
        //             // console.log(clockChoose[i].id)
        //             newItemsClock.innerHTML += ` 
        //             <div class="season__clock-description" data-price = "${clockChoosePrice[k].price}">
        //             <div class="clock">
        //             <img src="${clockChoosePrice[k].image}" alt="clock" data-clock = "${clockChoosePrice[k].model}">
        //             </div>
        //             <p>${clockChoosePrice[k].model}</p>
        //             <p>${clockChoosePrice[k].price} грн.</p>
        //             </div>  
        //             `
        //         }
        //     }
        // }


        // ------------------Проводим фильтрацию в зависимости от выбранной категории
        btnChoose.onclick = () => {
            newItemsClock.innerHTML = ""; // очищаем страницу вывода, чтоб не накапливались карточки с часами
            sortChooseButtonMax.style.backgroundColor = 'transparent'; // убираем стили с кнопок сортировка товара, если они включены
            sortChooseButtonMax.style.color = '#fff';
            sortChooseButtonMin.style.backgroundColor = 'transparent';
            sortChooseButtonMin.style.color = '#fff';

            menuFilterChooseClock.classList.remove('active'); //Закрытие меню выбора (фильтра и сортировка) товара (модального окна под мобильные устройства)
            filterChooseClock.classList.remove('show'); //Закрытие меню выбора (фильтра и сортировка) товара (модального окна под мобильные устройства)

            chooseInp.forEach(function (elem) {
                if (elem.checked) {
                    let manClock = elem.id; // получаем id выбранного checkboxa, чтоб его подставить для фильтрамвыводимых товаров

                    let clockChoose = clock2.filter(function (e) {
                        return e.id === manClock // сравниваем и возвращаем только совпадения выбраного (отмеченного) checkboxa и id массива clock
                    })

                    //перебираем массив с выбранной категорией часов и выводим их в html
                    clockChoose.forEach((e) => {
                        newItemsClock.innerHTML += ` 
                    <div class="season__clock-description" data-price = "${e.price}">
                    <div class="clock">
                    <img src="${e.image}" alt="clock" data-clock = "${e.model}">
                    </div>
                    <p>${e.model}</p>
                    <p>${e.price} грн.</p>
                    </div>  
                    `
                    })

                }
            })

            // -------------------------------Фильтрация по брендам-------------------------

            chooseInp.forEach(function (elem) {
                if (elem.checked) {
                    let brendClockChoose = elem.id; // получаем id выбранного checkboxa c часами, чтоб его подставить для фильтра выводимых товаров

                    let clockChoose = clock2.filter(function (e) {
                        return e.brend === brendClockChoose // сравниваем и возвращаем только совпадения выбраного (отмеченного) checkboxa и id массива clock
                    })

                    //перебираем массив с выбранной категорией часов и выводим их в html
                    clockChoose.forEach((e) => {
                        newItemsClock.innerHTML += ` 
                    <div class="season__clock-description" data-price = "${e.price}">
                    <div class="clock">
                    <img src="${e.image}" alt="clock" data-clock = "${e.model}">
                    </div>
                    <p>${e.model}</p>
                    <p>${e.price} грн.</p>
                    </div>  
                    `
                    })

                }
            })



            // -----------------------------фильтрация по цене------------------------
            let priceInp = +priceClock.value; // получаем значение цены
            let clockChoosePrice = [] //создаем пустой массив, куда будут попадать все часы, цены которых не превышает заданной пользователем
            clockChoosePrice = clock2.filter(function (e) { // clock2 это переменная в которую передаем полученный ответ в формате json  
                return e.price < priceInp // сравниваем и возвращаем только часы с ценой ниже границы введенной пользователем
            })

            //перебираем массив clockChoose и выводим в html блоки, которые соответсвуют нашим условиям (часы с ценой ниже границы введенной пользователем)
            clockChoosePrice.forEach((e) => {
                newItemsClock.innerHTML += ` 
                <div class="season__clock-description" data-price = "${e.price}">
                <div class="clock">
                <img src="${e.image}" alt="clock" data-clock = "${e.model}">
                </div>
                <p>${e.model}</p>
                <p>${e.price} грн.</p>
                </div>  
                `
            })



            // for (i = 0; i < clockChoose.length; i++) {
            //     newItemsClock.innerHTML = "" // очищаем поле вывода чтоб из-за цикла не повторялись выводимые часы
            //     console.log(clockChoose[i].id)
            //     for (k = 0; k < clockChoosePrice.length; k++) {
            //         console.log(clockChoosePrice[k].id)
            //         if (clockChoose[i].id === clockChoosePrice[k].id) {
            //             // console.log(clockChoose[i].id)
            //             newItemsClock.innerHTML += ` 
            //             <div class="season__clock-description" data-price = "${clockChoosePrice[k].price}">
            //             <div class="clock">
            //             <img src="${clockChoosePrice[k].image}" alt="clock" data-clock = "${clockChoosePrice[k].model}">
            //             </div>
            //             <p>${clockChoosePrice[k].model}</p>
            //             <p>${clockChoosePrice[k].price} грн.</p>
            //             </div>  
            //             `
            //         }
            //     }
            // }
        }


        // -------------------Сортировка по цене---------------------

        //При нажатии кнопки сортировки по возрастанию вызываем функцию, где вызываем функцию sortList, 
        // куда передаем дата атрибут с нашей ценой('data-price')
        sortChooseButtonMin.onclick = function () {
            sortList('data-price');
            sortChooseButtonMin.style.backgroundColor = '#ffff';
            sortChooseButtonMin.style.color = '#000';
            sortChooseButtonMax.style.backgroundColor = 'transparent';
            sortChooseButtonMax.style.color = '#fff';
        }

        function sortList(sortType) { //sortType это 'data-price'
            for (let i = 0; i < newItemsClock.children.length - 1; i++) { // перебираем все наши карточки, где i - это наша первая карточка
                for (let j = i; j < newItemsClock.children.length; j++) { // j - это карточка, которая идет следом за первой карточкой. Это делается для того, чтоб сделать сравнение цены между этими карточками, которая записана в атрибут 'data-price'
                    if (+newItemsClock.children[i].getAttribute(sortType) > +newItemsClock.children[j].getAttribute(sortType)) { // сравниваем наши цены. знак "+" ставим потому, что изначально мы получаем цену в виде строки и нам ее надо перевести в число.
                        let replacedNode = newItemsClock.replaceChild(newItemsClock.children[j], newItemsClock.children[i]); //метод .replaceChild() объекта newItemsClock позволяет заменить один дочерний узел указанного узла другим, т.е. newItemsClock.children[j] заменить вместо (вставить на его место) newItemsClock.children[i], а в  переменную replacedNode мы записываем карточку, которую мы удалили (на чье место подставили newItemsClock.children[j]).
                        insertAfter(replacedNode, newItemsClock.children[i]); //создаем функцию, которая будет добавлять элемент в  список дочерних элементов родителя.
                    }
                }
            }
        }

        // -------------------сортировка по убыванию----------------------
        sortChooseButtonMax.onclick = function () {
            sortListDesc('data-price');
            // sortChooseButtonMin.style.backgroundColor = '#ffff';
            sortChooseButtonMax.style.backgroundColor = '#ffff';
            sortChooseButtonMax.style.color = '#000';
            sortChooseButtonMin.style.backgroundColor = 'transparent';
            sortChooseButtonMin.style.color = '#fff';
        }

        function sortListDesc(sortType) {
            for (let i = 0; i < newItemsClock.children.length - 1; i++) {
                for (let j = i; j < newItemsClock.children.length; j++) {
                    if (+newItemsClock.children[i].getAttribute(sortType) < +newItemsClock.children[j].getAttribute(sortType)) {
                        let replacedNode = newItemsClock.replaceChild(newItemsClock.children[j], newItemsClock.children[i]);
                        insertAfter(replacedNode, newItemsClock.children[i]);
                    }
                }
            }
        }
        // функция, которая  добавляет элемент в  список дочерних элементов родителя после указанного элемента.
        // Метод insertBefore() добавляет узел (elem) в список дочерних элементов указанного родителя перед указанным узлом (refElem). 
        // parentNode родитель текущего элемента
        function insertAfter(elem, refElem) {
            return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
        }

        // ------------------------кнопка сброса -----------------------
        resetChoose.onclick = () => {
            chooseInp.forEach((e) => {
                if (e.checked) {

                    e.checked = false
                }
            })
            newItemsClock.innerHTML = ""
            downloadAllClock(); // Выводим все карточки с часами
        }
        // -----------------------------------------------------------------


        // ------------------боковая паенль выбора (сортировка, фильтрация) часов на странице Catalog
        menuFilterChooseClock.addEventListener("click", () => {
            menuFilterChooseClock.classList.toggle('active');
            filterChooseClock.classList.toggle('show');
        })

        backFilter.addEventListener("click", () => {
            menuFilterChooseClock.classList.remove('active');
            filterChooseClock.classList.remove('show');
        })

    }
    fetchData2()



    // --------------------Кнопка редактирования личных данных------------------
    let personalDataButton = document.querySelector(".personalData__button"); // кнопка редактирования личной информации
    let formPersonal = document.querySelectorAll(".formPersonal input") // Получаем все поля контактной информации для для их редактирования
    let personalSaveDataButton = document.querySelector(".personalSaveData__button") // кнопка сохранения личной информации


    personalDataButton.addEventListener("click", () => {
        formPersonal.forEach((e) => {
            e.removeAttribute("disabled");
            e.style.color = "red"
            e.style.border = "1px solid grey"
        })
        personalSaveDataButton.style.display = "block"
    })

    personalSaveDataButton.addEventListener("click", () => {
        formPersonal.forEach((e) => {
            e.setAttribute("disabled", "disabled");
            e.style.color = "black"
            e.style.border = "none"
        })
        personalSaveDataButton.style.display = "none"
    })

}



// ----------------------Дополнительный запрос на сервис для загрузки часов----------
buttonNewClock.onclick = () => {
    buttonNewClock.classList.add('onButton'); // добавляем класс для того, чтоб потом запретить повторное нажатие кнопки
    const fetchData = async () => { //async  - функция всегда возвращает Promise (специальный объект, который содержит своё состояние. Вначале pending («ожидание»), затем – одно из: fulfilled («выполнено успешно») или rejected («выполнено с ошибкой»)). 
        const url = `http://127.0.0.1:3007/catalog` // создаем переменную, в которую передаем url для отправки запроса (см. ниже метод fetch())
        const response = await fetch(url) // Создаем переменую в которую передаем наши сетевые запросы на сервер (Mackoon) (для скачивания содержимого по адресу url). Метод fetch()делает сетевые запросы и получает информацию с сервера Оператор await используется для ожидания окончания Promise 
        const result = await response.json() // Создаем переменную в которую передаем полученный ответ в формате json  (декодирует ответ в формате JSON)
        // newItemsClock.remove(); // удаляем блок, чтоб на его место записать новый

        let newelem = document.createElement('div') //Создаем елемент 'div' (Это наш будущая типичная карточка)
        newelem.classList.add('newItems__clock') // Присваиваем класс новому блоку
        clockSlider.insertAdjacentElement('beforebegin', newelem) // метод, который добавляет новые блоки 
        result.map((el) => { // Перебираем файл json в котором написаны нашы блоки (слайды). Написано все это в Mackoon 
            let elem = document.createElement('div') //Создаем елемент 'div' (Это наш будущая типичная карточка)
            elem.classList.add('season__clock-description') // Присваиваем класс новому блоку
            elem.innerHTML = ` 
                <div class="clock">
                <img src="${el.image}" alt="clock" data-clock = "${el.model}">
                </div>
                <p>${el.model}</p>
                <p>${el.price}</p>`
            newItemsClock.insertAdjacentElement('beforeend', elem) // метод, который добавляет новые блоки 
            // newelem.append(elem); // добавляем карточки внутрь  newelem
        })
        newItemsClock = document.querySelector('.newItems__clock'); // создаем заново переменную, чтоб в дальнейшем ее убрать (это делается для того, чтоб в DOM не суммировались (не накапливалались) блоки с классом newItems__clock, а перезатирались )
    }
    fetchData()
    if (buttonNewClock.classList.contains('onButton')) {
        buttonNewClock.disabled = true; //блокируем повторное нажатие кнопки,чтоб не выводить повторно уже выведенное
    }
}
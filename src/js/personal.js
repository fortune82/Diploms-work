// // --------------------Кнопка редактирования личных данных------------------
// let personalDataButton = document.querySelector(".personalData__button"); // кнопка редактирования личной информации
// let formPersonal = document.querySelectorAll(".formPersonal input") // Получаем все поля контактной информации для для их редактирования
// let personalSaveDataButton = document.querySelector(".personalSaveData__button") // кнопка сохранения личной информации

// console.log("ddddddddddddddddddd")
// let newButtonSave = document.createElement("button");
// personalDataButton.onclick = () => {
//     formPersonal.forEach((e) => {
//         e.removeAttribute("disabled");
//         e.style.color = "red"
//         e.style.border = "1px solid grey"
//     })
//     personalSaveDataButton.style.display = "block"
// }

// personalSaveDataButton.addEventListener("click", () => {
//     formPersonal.forEach((e) => {
//         e.setAttribute("disabled", "disabled");
//         e.style.color = "black"
//         e.style.border = "none"
//     })
// })
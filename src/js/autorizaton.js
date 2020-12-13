let password = document.querySelector("#password"); // поле ввода пароля
let email = document.querySelector("#email"); // поле ввода почты
let enterButton = document.querySelector(".enterButton"); // кнопка отправки формы
let pasw = document.querySelector(".pasw");
let exitAutorization = document.querySelectorAll(".exit"); // кнопка выхода из модального окна авторизации


// -------------------Кнопка закрытия модальных окон----------------------
exitAutorization.forEach((e) => {
    e.addEventListener('click', () => {
        autorization.style.display = 'none';
        modalClockDescription.style.display = 'none';
        pasw.innerHTML = 'Пароль' // Возвращаем надпись в исходное состояние. Если этого не сделать, тогда после ввода неправильного пароля будет висеть надпись "Пароль не правильный. Попробуйте ещё".
        pasw.style.color = 'grey';
        password.value = ""
        email.value = ""
    })
});


const fetchLogin = async () => {
    const url = `http://localhost:3007/password&login`;
    const response = await fetch(url);
    const result = await response.json();

    enterButton.addEventListener("click", function login() {

        // -------------------Получаем вводимый пароль-----------------
        let passwordValue = password.value;
        password.addEventListener("input", () => {
            passwordValue = password.value;
        })
        // -------------------Получаем вводимый email-----------------
        let emailValue = email.value;
        email.addEventListener("input", () => {
            emailValue = email.value;

        })

        // // --------------валидация почты-------------------
        // function validateEmail(emailValue) {
        //     var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        //     return re.test(String(email).toLowerCase());
        // }


        result.forEach((elem) => {
            if (passwordValue === elem.password && emailValue === elem.email) {
                // alert('угадал')
                // document.location.href = "err404.html"; //Это работает в Mozila, но не работает в Chrome
                // А это работает везде
                setTimeout(function () {
                    document.location.href = "personal.html";
                }, 20);
                autorization.style.display = 'none';
                console.log(location);
                pasw.innerHTML = 'Пароль' // Возвращаем надпись в исходное состояние. Если этого не сделать, тогда после ввода неправильного пароля будет висеть надпись "Пароль не правильный. Попробуйте ещё".
                pasw.style.color = 'grey';
                pasw.style.fontWeight = 'normal';
                password.value = ""
                email.value = ""

            } else if (passwordValue !== elem.password || emailValue !== elem.email) {
                pasw.innerHTML = 'Пароль или email не правильный. Попробуйте ещё';
                pasw.style.color = 'red'
                pasw.style.fontWeight = 'bold'
                // password.value = ""
                // login()
            }
        })
    })
}
fetchLogin()
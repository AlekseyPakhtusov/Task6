let menuItem = document.getElementsByClassName("menu-item"),
    menuClass = document.querySelector(".menu");

    // Восстановить порядок в меню, добавить пятый пункт

//поменять местами 2-ой и 3-ий элементы
menuClass.insertBefore(menuItem[2], menuClass.childNodes[2]);

//Добавить Пятый пункт
let menuItem5 = document.createElement("li");
menuItem5.classList.add("menu-item");
menuItem5.textContent = "Пятый пункт";
menuClass.appendChild(menuItem5);

// Заменить картинку заднего фона на другую из папки img
var body = document.getElementsByTagName('body')[0];
body.style.background = 'url(img/apple_true.jpg) center no-repeat';

//Поменять заголовок, добавить слово "подлинную" ( Получится - "Мы продаем только подлинную технику Apple")
let title = document.getElementById("title").textContent = "Мы продаем только подлинную технику Apple";

// Удалить рекламу со страницы
document.getElementsByClassName("adv")[0].remove();

// Спросить у пользователя отношение к технике apple и записать ответ в блок на странице с id "prompt"
document.getElementById("prompt").textContent = prompt("Ваше отношение к технике apple?","");
// Объявление функции для вывода сообщения в консоль
function showMessage() {
    console.log("Я учу JavaScript!");
}
 // Вызов функции после её определения.
showMessage();

// Галерея переключения изображений
let currentIndex = 0; // Определяем переменную currentIndex для отслеживания текущего изображения.
const images = document.querySelectorAll('.gallery img'); // Получаем список всех изображений в галерее с помощью document.querySelectorAll.

// Показываем текущее изображение, скрываем остальные
function showCurrentImage() { // Функция showCurrentImage обновляет отображение галереи, показывая текущее изображение и скрывая остальные.
    images.forEach((img, index) => { // Используем метод forEach, чтобы пройтись по всем изображениям и установить стиль display в зависимости от того, соответствует ли индекс текущему.
        img.style.display = (index === currentIndex) ? 'block' : 'none'; // Изначально отображаем первое изображение.
    });
}

//  Функции nextImage и prevImage: переход к следующему изображению
function nextImage() { // nextImage увеличивает currentIndex и вызывает showCurrentImage для отображения следующего изображения.
    currentIndex = (currentIndex + 1) % images.length; 
    showCurrentImage(); // Вызываем showCurrentImage сразу после определения всех функций, чтобы изначально отобразить первое изображение в галерее.
}

// Переход к предыдущему изображению
function previousImage() { // previousImage уменьшает currentIndex и вызывает showCurrentImage для отображения предыдущего изображения.
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showCurrentImage(); // Вызываем showCurrentImage сразу после определения всех функций, чтобы изначально отобразить первое изображение в галерее.
}












// Вариант 4
// let currentIndex = 0;
// const images = document.querySelectorAll('.gallery img');

// function showCurrentImage() {
//     for (let i = 0; i < images.length; i++) {
//         images[i].style.display = (i === currentIndex) ? 'block' : 'none';
//     }
// }

// function nextImage() {
//     currentIndex = (currentIndex + 1) % images.length;
//     showCurrentImage();
// }

// function prevImage() {
//     currentIndex = (currentIndex - 1 + images.length) % images.length;
//     showCurrentImage();
// }

// Изначально отображаем первое изображение
// showCurrentImage();

// Вариант 2
// let currentIndex = 0;
// const images = document.querySelectorAll('.gallery img');

// function updateGallery() {
//     images.forEach((img, index) => {
//         img.style.display = index === currentIndex ? 'block' : 'none';
//     });
// }

// function nextImage() {
//     currentIndex = (currentIndex + 1) % images.length;
//     updateGallery();
// }

// function previousImage() {
//     currentIndex = (currentIndex - 1 + images.length) % images.length;
//     updateGallery();
// }

// Изначально отображаем первое изображение
// updateGallery();


// Вариант 3
// let currentIndex = 0;
// const images = document.querySelectorAll('.gallery img');

// function showImage(index) {
//     images.forEach((img, i) => {
//         img.classList.toggle('active', i === index);
//     });
// }

// function nextImage() {
//     currentIndex = (currentIndex + 1) % images.length;
//     showImage(currentIndex);
// }

// function previousImage() {
//     currentIndex = (currentIndex - 1 + images.length) % images.length;
//     showImage(currentIndex);
// }
// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage

//     let btnTask1 = document.getElementById('btnTask1');
//     btnTask1.addEventListener('click', function () {
//         let userName = document.task1.userName.value;
//         let userAge = document.task1.userAge.value;
//         localStorage.setItem('user', JSON.stringify({name: userName, age: userAge}));
//     });

document.task1.onsubmit = function () {
    let userName = document.task1.userName.value;
    let userAge = document.task1.userAge.value;
    localStorage.setItem('user', JSON.stringify({name: userName, age: userAge}));
};





// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.
document.task2.onsubmit = function () {
    let model = document.task2.model.value;
    let type = document.task2.type.value;
    let volume = document.task2.volume.value;
    let car = {model, type, volume};
    let cars = JSON.parse(localStorage.getItem('cars')) || [];
    cars.push(car);
    localStorage.setItem('cars', JSON.stringify(cars));
};
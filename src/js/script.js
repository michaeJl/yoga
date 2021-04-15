window.addEventListener('DOMContentLoaded',function(){

'use strict';
    // tTabs
    // timer  
    // modalwindow
    // sendform
    // slider
    // calc

    let tabs =  require('./parts/tabs'),
        timer = require('./parts/timer'), 
        modal = require('./parts/modal'),
        sendform = require('./parts/sendform'),
        slider = require('./parts/slider'),
        calc =  require('./parts/calc');

    tabs();
    timer();
    modal();
    sendform();
    slider();
    calc();
});

// let age = document.getElementById('age');

// function showUser(surname, name) {
//   
// 	alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
// }
// // showUser.call(age,'lox','lox'); // параметры передаются только строкой
// // showUser.apply(age,['vlas','telin']); //параметры передаются в массиве

// let a = showUser.bind(age.value);
// a('лоооо','лла');

    // form
//     let message = {
//         loading: 'Загрузка',
//         success: 'Спасибо! Скоро мы с Вами свяжемся!',
//         failure: 'Что-то пошло не так...'
//     };

//     let form = document.querySelector('.main-form'),
//         input = form.getElementsByTagName('input'),
//         statusMessage = document.createElement('div');

//     statusMessage.classList.add('status');

//     form.addEventListener('submit',function(event){
//         event.preventDefault();
//         form.appendChild(statusMessage);

//         let request = new XMLHttpRequest();
//         request.open('POST', 'server.php');
//         //request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded'); php
//         request.setRequestHeader('Content-type','application/json; charset=utf-8');

//         let formData = new FormData(form);
//         let obj = {};
//         formData.forEach(function(value,key){
//             obj[key] = value;
//         });

//         let json = JSON.stringify(obj);

//         request.send(json);

//         request.addEventListener('readystatechange', function(){
//             if (request.readyState < 4) {
//                 statusMessage.innerHTML = message.loading;
//             } else if (request.readyState === 4 && request.status == 200){
//                 statusMessage.innerHTML = message.success;
//             } else {
//                 statusMessage.innerHTML = message.failure;
//             }

//                 for(let i =0; i<input.length;i++){
//                     input[i].value = '';
//                 }
//         });
//     });

//     // contact-form

//     let contactform = document.querySelector('#form'),
//         input1 = contactform.querySelectorAll('input');

//         contactform.addEventListener('submit', function(event){
//             event.preventDefault();
//             contactform.appendChild(statusMessage);

//             let request1 = new XMLHttpRequest();
//             request1.open('POST', 'server.php');
//             //request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded'); php
//             request1.setRequestHeader('Content-type','application/json; charset=utf-8');

//             let formData1 = new FormData(contactform);
//             let obj1 = {};
//             formData1.forEach(function(value,key){
//                 obj1[key] = value;
//             });
//             let json1 = JSON.stringify(obj1);
//             request1.send(json1);

//             request1.addEventListener('readystatechange',function(){
//                 if (request1.readyState < 4 ){
//                     statusMessage.innerHTML = message.loading;
//                 } else if (request1.readyState === 4 && request1.status == 200){
//                     statusMessage.innerHTML = message.success;
//                 } else {
//                     statusMessage.innerHTML = message.failure;
//                 }
//             });

//             for(let i=0;i<input1.length;i++){
//                 input1[i].value = '';
//             }
//         });

// });
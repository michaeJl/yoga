/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/parts/calc.js":
/*!******************************!*\
  !*** ./src/js/parts/calc.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function calc(){
    let  persons = document.querySelectorAll('.counter-block-input')[0],
        restDays = document.querySelectorAll('.counter-block-input')[1],
        place = document.getElementById('select'),
        totalValue = document.getElementById('total'),
        personsSum = 0,
        daysSum = 0,
        total = 0;
    
        totalValue.innerHTML = 0;

        persons.addEventListener('change', function(){
            personsSum = +this.value;
            total = (daysSum + personsSum)*4000;
            
            if (restDays.value == ''  || this.value == ''){
                totalValue.innerHTML = 0;
            } else { totalValue.innerHTML = total;}
        });

        restDays.addEventListener('change', function(){
            daysSum = +this.value;
            total = (daysSum + personsSum)*4000;
           

            if (persons.value == ''  || this.value == ''){
                totalValue.innerHTML = 0;
            } else { totalValue.innerHTML = total;}
        });

   
    place.addEventListener('change',function(){
        if(persons.value == '' || restDays.value == ''){
            totalValue.innerHTML = 0;
        }
        else {
            let a = total;
            totalValue.innerHTML = a * this.options[this.selectedIndex].value;
        }
    });
}

module.exports = calc;


/***/ }),

/***/ "./src/js/parts/modal.js":
/*!*******************************!*\
  !*** ./src/js/parts/modal.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function modal(){
    let more = document.querySelector('.more'),
    overlay = document.querySelector('.overlay'),
    close = document.querySelector('.popup-close');

more.addEventListener('click', function(){
    overlay.style.display = 'block';
    this.classList.add('more-splash'); //анмация
    document.body.style.overflow = 'hidden'; // неподвижный задний фон
});

close.addEventListener('click',function(){
    overlay.style.display = 'none';
    more.classList.remove('more-splash');
    document.body.style.overflow = '';
});

}
module.exports = modal;

/***/ }),

/***/ "./src/js/parts/sendform.js":
/*!**********************************!*\
  !*** ./src/js/parts/sendform.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function senddform(){
    let message = {
        loading: 'Загрузка',
        success: 'Спасибо! Скоро мы с Вами свяжемся!',
        failure: 'Что-то пошло не так...'
    };
    
    let form = document.querySelector('.main-form'),
        //input = form.getElementsByTagName('input'),
        statusMessage = document.createElement('div'),
        contactform = document.querySelector('#form');
        //input1 = contactform.querySelectorAll('input');
    
        statusMessage.classList.add('status');
    
    function sendForm(name){
        let input = name.querySelectorAll('input');
        name.addEventListener('submit',function(event){
            event.preventDefault();
            name.appendChild(statusMessage);
    
            function postData(){
                return new Promise((resolve, reject) => {
                    let request = new XMLHttpRequest();
                    request.open('POST', 'server.php');
                    //request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded'); php
                    request.setRequestHeader('Content-type','application/json; charset=utf-8');
                    let formData = new FormData(name);
                    let obj = {};
                    formData.forEach(function(value,key){
                        obj[key] = value;
                    });
                    let json = JSON.stringify(obj);
                    request.send(json);
                    
                    request.addEventListener('readystatechange', function(){
                        if (request.readyState < 4) { resolve(); console.log("1");
                            // statusMessage.innerHTML = message.loading;
                        } else if (request.readyState === 4 && request.status == 200){ resolve(); console.log("2");
                           //  statusMessage.innerHTML = message.success;
                        } else { reject();console.log("3");
                            //  statusMessage.innerHTML = message.failure;
                        }
                    });
                   
                });
            }
    
            function clearInput(){
                for(let i =0; i<input.length;i++){
                    input[i].value = '';
                }
            }
    
            postData()
            .then(()=>{statusMessage.innerHTML = message.loading;})
            .then(()=>{statusMessage.innerHTML = message.success;})
            .catch(()=>{statusMessage.innerHTML = message.failure;})
            .finally(clearInput);
            //.then(clearInput);
        });
    }
    
    sendForm(form);
    sendForm(contactform);    

}

module.exports = senddform;

/***/ }),

/***/ "./src/js/parts/slider.js":
/*!********************************!*\
  !*** ./src/js/parts/slider.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function slider(){
    let slideIndex = 1, // параметр текущего слайда
    slides = document.querySelectorAll('.slider-item'),
    prev = document.querySelector('.prev'),
    next = document.querySelector('.next'),
    dotsWrap = document.querySelector('.slider-dots'),
    dots = document.querySelectorAll('.dot');


showSlides(slideIndex);
function showSlides(n){

    if (n > slides.length){
        slideIndex = 1;
    }
    if (n < 1){
        slideIndex = slides.length;
    }

    slides.forEach((item)=> item.style.display = 'none');
    dots.forEach((item)=> item.classList.remove('dot-active'));

    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].classList.add('dot-active');
}

function plus(n){
    showSlides(slideIndex += n);
}
function currentSlide(n){
    showSlides(slideIndex = n);
}

prev.addEventListener('click',function(){
    plus(-1);
});
next.addEventListener('click',function(){
    plus(1);
});

dotsWrap.addEventListener('click',function(event){
    for( let i =0; i < dots.length + 1;i++){
       if( event.target.classList.contains('dot') && event.target == dots[i-1]){
           currentSlide(i);
       }
    }
});
}

module.exports = slider;

/***/ }),

/***/ "./src/js/parts/tabs.js":
/*!******************************!*\
  !*** ./src/js/parts/tabs.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function tabs(){
    let tab = document.querySelectorAll('.info-header-tab'),
    info = document.querySelector('.info-header'),
    tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a){
        for(let i = a; i < tabContent.length;i++){
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);

    function showTabContent(b){
        if(tabContent[b].classList.contains('hide')){
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

   info.addEventListener('click',function(event){
    let target = event.target;
    if(target && target.classList.contains('info-header-tab')){
        for(let i = 0; i<tab.length;i++){
            if(target == tab[i]){
                hideTabContent(0);
                showTabContent(i);
                break; 
            }
        }
    }
   });
}

module.exports = tabs;

/***/ }),

/***/ "./src/js/parts/timer.js":
/*!*******************************!*\
  !*** ./src/js/parts/timer.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function timer(){
    
   let deadline = '2019-12-29';
   
   function gettime(endtime){
       let t = Date.parse(endtime) - Date.parse(new Date()),
           s = Math.floor((t/1000)% 60),
           m = Math.floor((t/1000/60)%60),
           h = Math.floor((t/(1000 * 60 * 60)));

           return {
               'total': t,
                'hours': h,
                'min': m,
                'sec': s
           };
   }
    function setClock(id,endtime){
        let timer =document.getElementById(id),
            h = timer.querySelector('.hours'),
            m = timer.querySelector('.minutes'),
            s = timer.querySelector('.seconds');
            setInterval = setInterval(update,1000);

            function update(){
            let tt = gettime(endtime);

                function zero(value){
                    if(value <= 9){
                       return '0' + value;
                    } return value;
                }    

                h.textContent = zero(tt.hours - 3);
                // if (h.textContent.length == 1){
                //     h.textContent = '0' + tt.hours;
                // } else { h.textContent = tt.hours;}

                m.textContent = zero(tt.min);
                // if (m.textContent.length == 1){
                //     m.textContent = '0' + tt.min;
                // } else { m.textContent = tt.min;}
                
                s.textContent = zero(tt.sec);
                // if (s.textContent.length == 1){
                //     s.textContent = '0' + tt.sec;
                // } else { s.textContent = tt.sec;}
            
                if(tt.total <= 0){
                    clearInterval(setInterval);
                    s.textContent = '00';
                    m.textContent = '00';
                    h.textContent = '00';
                }
        }
    }
    setClock('timer',deadline);
}

module.exports  = timer;


/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

window.addEventListener('DOMContentLoaded',function(){

'use strict';
    // tTabs
    // timer  
    // modalwindow
    // sendform
    // slider
    // calc

    let tabs =  __webpack_require__(/*! ./parts/tabs */ "./src/js/parts/tabs.js"),
        timer = __webpack_require__(/*! ./parts/timer */ "./src/js/parts/timer.js"), 
        modal = __webpack_require__(/*! ./parts/modal */ "./src/js/parts/modal.js"),
        sendform = __webpack_require__(/*! ./parts/sendform */ "./src/js/parts/sendform.js"),
        slider = __webpack_require__(/*! ./parts/slider */ "./src/js/parts/slider.js"),
        calc =  __webpack_require__(/*! ./parts/calc */ "./src/js/parts/calc.js");

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

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map
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
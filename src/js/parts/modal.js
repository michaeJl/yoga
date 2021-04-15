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
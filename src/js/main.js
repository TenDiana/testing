$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items:1,
        loop:true,
        center:true,
    });
});



let more = document.getElementsByClassName('news__btn');


for (let i = 0; i < more.length; i++){
    more[i].addEventListener('click', function () {
        this.classList.toggle('active');
        let content = this.nextElementSibling;
        if(content.style.maxHeight){
            content.style.maxHeight = null;
        }else{
            content.style.maxHeight = content.scrollHeight + 'px'
        }
    })
}



let btn = document.getElementsByClassName('offer__btn');


for (let i = 0; i < btn.length; i++){
    btn[i].addEventListener('click', function () {
        this.classList.toggle('active');
        let content = this.nextElementSibling;
        if(content.style.maxHeight){
            content.style.maxHeight = null;
        }else{
            content.style.maxHeight = content.scrollHeight + 'px'
        }
    })
}

document.querySelector('#search').oninput = function(){
    let val = this.value.trim();
    let searchItem = document.querySelectorAll('.search li');
    if (val !== ''){
        searchItem.forEach(function (elem) {
            if(elem.innerText.search(val) === -1){
                elem.classList.add('hide');
            }else {
                elem.classList.remove('hide');
            }
        });
    }else {
        searchItem.forEach(function (elem) {
            elem.classList.remove('hide');

        })
    }
};


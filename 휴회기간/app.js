// function alertmaker(state){
// document.querySelector('.alert-box').style.display =state;
// }

// function input (a){
//     document.querySelector('.alert-box > div').innerHTML = a;
// }

// document.getElementById('close').addEventListener('click', () =>document.getElementById('alert').style.display = 'none')
// document.getElementById('close').addEventListener('click', () =>document.getElementById('alert').style.display = 'none')

$('.navbar-toggler').on('click', () => $('.list-group').toggleClass('show-overflow'));


$('.openModal').on('click', () => $('.black-bg').addClass('show-opacity'));

$('#close').on('click', () => $('.black-bg').removeClass('show-opacity'));

function checkInputIsNull (e){
    let email = $('.form-control').eq('0').val();
    let password = $('.form-control').eq('1').val();
    if(email ==='' || !(/\S+@+\S+\.\S+/.test(email))){
        alert('Input your email!');
        e.preventDefault();
        console.log(email);
    }
    else if(password ==='' || /[A-Z]/.test(password)){
        alert('Input your password!');
        e.preventDefault();

    }

}

function passwordCheck(){
    let password = $('.form-control').eq('1');
    if(password.val().length < 7){
        password.on('input', ()=>$('.form-text').eq('1').removeClass('none'));
    }
    else{
        password.on('input', ()=>$('.form-text').eq('1').addClass('none'));
    }
}

let count = 0;

function darkToggler(){
    if(count%2 === 0){
        $('.badge').html('Light');
        count++;
    }
    else{
        $('.badge').html('Dark');
        count++;
    }
    $('body').toggleClass('dark');

}
function scrollEndChecker (){
    let scrollAmount = $('.lorem').scrollTop();
    let actualHeight = $('.lorem').prop('scrollHeight');
    let height = $('.lorem').prop('clientHeight');

    if((actualHeight-scrollAmount-height) < 0.1){
        alert('다 읽었군요?');
    }
    console.log(scrollAmount, actualHeight, height);
}


$('form').on('submit', checkInputIsNull);
$('.form-control').eq('1').on('input',passwordCheck);

$('.badge').on('click', darkToggler);

$(window).on('scroll',  function () {
    if ($(window).scrollTop() > 100){
    $('.navbar-brand').css('font-size', '20px');
    }
    else{
    $('.navbar-brand').css('font-size', '30px');
    }
}
);
$('.lorem').on('scroll', scrollEndChecker);

let timer = 5;
function timerOfFreeGift (){
    timer -= 1;
    $('.alert-danger').html(timer + "초 이내 구매 시 사은품 증정!");
    if (timer <1){
        clearInterval(freeGiftTimer);
        $('.alert-danger').addClass('none');
    }
    console.log(timer);
}

let freeGiftTimer = setInterval(timerOfFreeGift, 1000);



let carouselNum = 0;
function carouselNextButton (){
    carouselNum++;
    let num = -100 * carouselNum;
    $('html').css('--num', `translateX(${num}vw)`);
}
function carouselBeforeButton (){
    carouselNum--;
    let num = -100 * carouselNum;
    $('html').css('--num', `translateX(${num}vw)`);

}


$('.slide-2').on('click', () => {
$('.slide-container').css('transform', 'translateX(-100vw)');
carouselNum++
}
);

$('.slide-1').on('click', () =>{
$('.slide-container').css('transform', 'translateX(0vw)');
carouselNum = 0;
}
);
$('.slide-3').on('click', ()=> {
$('.slide-container').css('transform', 'translateX(-200vw)');
carouselNum++;
}
);

$('.next-button').on('click', carouselNextButton);
$('.before-button').on('click', carouselBeforeButton);



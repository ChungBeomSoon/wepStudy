// function alertmaker(state){
// document.querySelector('.alert-box').style.display =state;
// }

// function input (a){
//     document.querySelector('.alert-box > div').innerHTML = a;
// }

// document.getElementById('close').addEventListener('click', () =>document.getElementById('alert').style.display = 'none')
// document.getElementById('close').addEventListener('click', () =>document.getElementById('alert').style.display = 'none')


// $('.navbar-toggler').on('click', () => $('.list-group').toggleClass('show-overflow'));


$('.openModal').on('click', () => $('.black-bg').addClass('show-opacity'));
$('#close').on('click', () => $('.black-bg').removeClass('show-opacity'));
//modal창에 animation 주기


let validText = {
    checkInputIsNull: function (e){
        const EMAIL = $('.form-control').eq('0').val();
        const PASSWORD = $('.form-control').eq('1').val();
        if(EMAIL ==='' || !(/\S+@+\S+\.\S+/.test(EMAIL))){
            alert('Input your email!');
            e.preventDefault();
            console.log(EMAIL);
        }
        else if(PASSWORD ==='' || /[A-Z]/.test(PASSWORD)){
            alert('Input your password!');
            e.preventDefault();
    
        }
    
    },
    passwordCheck : function (){
        const PASSWORD = $('.form-control').eq('1');
        if(PASSWORD.val().length < 7){
            PASSWORD.on('input', ()=>$('.form-text').eq('1').removeClass('none'));
        }
        else{
            PASSWORD.on('input', ()=>$('.form-text').eq('1').addClass('none'));
        }
    }
}

let darkMode = {
    count : 0,
    Toggler: function(){
        if(count%2 === 0){
            $('.badge').html('Light');
            count++;
        }
        else{
            $('.badge').html('Dark');
            count--;
        }
        $('body').toggleClass('dark');
    }
}


function scrollEndChecker (){
    const SCROLL_AMOUNT = $('.lorem').scrollTop();
    const ACTUAL_HEIGHT = $('.lorem').prop('scrollHeight');
    const HEIGHT = $('.lorem').prop('clientHeight');

    if((ACTUAL_HEIGHT - SCROLL_AMOUNT - HEIGHT) < 0.1){
        alert('다 읽었군요?');
    }
    console.log(SCROLL_AMOUNT, ACTUAL_HEIGHT, HEIGHT);
}


$('form').on('submit', validText.checkInputIsNull);
$('.form-control').eq('1').on('input',validText.passwordCheck);
//modal창에서 제출된 정보 유효성 검사

$('.badge').on('click', darkMode.Toggler);
//dark모드

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

let count = 5;
    function freeGiftOfTimer(){
        count--;
        $('.alert-danger').html(count + "초 이내 구매 시 사은품 증정!");
        if (count <1){
            clearInterval(TIMER);
            $('.alert-danger').addClass('none');
        }
    }  
    const TIMER = setInterval(freeGiftOfTimer, 1000);
    
    
    
    
    
let carouselNum = 0;
function carouselNextButton (){
    if (0<carouselNum<2){
        carouselNum++;
        let num = -100 * carouselNum;
        $('html').css('--num', `translateX(${num}vw)`);       
    }
}
function carouselBeforeButton (){
    if (-1<carouselNum<2){
        carouselNum--;
        let num = -100 * carouselNum;
        $('html').css('--num', `translateX(${num}vw)`);
    }
    
}



$('.slide-1').on('click', () =>{
    carouselNum = 0;
    let num = carouselNum * -100;
    
    $('html').css('--num', `translateX(${num}vw)`);
}
);
$('.slide-2').on('click', () => {
    carouselNum = 1;
    let num = carouselNum * -100;
    $('html').css('--num', `translateX(${num}vw)`);
}
);

$('.slide-3').on('click', ()=> {
    carouselNum = 2;
    let num = carouselNum * -100;
    $('html').css('--num', `translateX(${num}vw)`);
}
);

$('.next-button').on('click', carouselNextButton);
$('.before-button').on('click', carouselBeforeButton);



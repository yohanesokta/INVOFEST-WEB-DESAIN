
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function masuk() {
    dom = document.getElementById('col-login');
    dom.classList.add('col-login-on');
}

function goDaftar(){
    document.getElementById('col-login').classList.remove('col-login-on');
    document.getElementById('col-sign').classList.add('col-login-on');
}
function goLogin(){
    document.getElementById('col-sign').classList.remove('col-login-on');
    document.getElementById('col-login').classList.add('col-login-on');
}

function closeLogin(){
    document.getElementById('col-login').classList.remove('col-login-on');
}
function daftar(){
    document.getElementById('col-sign').classList.add('col-login-on')
}
function closeSign(){
    document.getElementById('col-sign').classList.remove('col-login-on');
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.remove('left')
        }else{
            entry.target.classList.add('left')
        }
    })
})

const leftScroll  = document.querySelectorAll('.left-scroll')
leftScroll.forEach((el)=> observer.observe(el))

function goPertanian(){
    window.location.href = "./Pertanian";
}
function goOther(){
    window.location.href = './other'
}
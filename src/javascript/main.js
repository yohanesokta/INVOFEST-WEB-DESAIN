
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

function closeLogin(){
    document.getElementById('col-login').classList.remove('col-login-on');
}
function daftar(){
    document.getElementById('col-sign').classList.add('col-login-on')
}
function closeSign(){
    document.getElementById('col-sign').classList.remove('col-login-on');
}
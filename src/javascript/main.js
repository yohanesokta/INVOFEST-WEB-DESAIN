document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

on = {
    'login': 'no',
    'sign' : 'no'
}

function masuk() {
    dom = document.getElementById('col-login');
    if (on.login == 'no'  && on.sign == 'no'){
        console.log('login')
        dom.classList.add('col-login-on')
    }else{
        console.log('false')
    }
    
}
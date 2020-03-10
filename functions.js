let navbar = document.querySelector('#normal-nav');

window.onscroll = function() {
    if (window.pageYOffset > 10) {
        navbar.style.backgroundColor = 'black';
        navbar.style.opacity = '0.9';
        
    } else {
        navbar.style.backgroundColor = 'transparent';

        

    }
};
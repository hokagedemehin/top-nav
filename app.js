const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

navToggle.addEventListener('click', () => {
    // console.log(links.classList.contains('links'))

    // method 1 using if statements
    // if(links.classList.contains('show-links')){
    //     links.classList.remove('show-links');
    // }
    // else {
    //     links.classList.add('show-links')
    // }

    // method 2 using toggle class
    links.classList.toggle('show-links')

});
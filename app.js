const backToTopBtn = document.querySelector('#backToTopBtn');
const rootElement = document.documentElement;

backToTopBtn.addEventListener('click', function(e){
    rootElement.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})
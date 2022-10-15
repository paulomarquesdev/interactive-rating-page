function appHeight() {
        const doc = document.documentElement
        doc.style.setProperty('--vh', (window.innerHeight*.01) + 'px');
    }
  
window.addEventListener('resize', appHeight);
appHeight();
  

const buttonSubmit = document.querySelector('.button-submit')

buttonSubmit.addEventListener('click', () => {
    buttonSubmit.classList.toggle('button-submit--checked')
})

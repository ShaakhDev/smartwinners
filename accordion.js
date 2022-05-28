
const accordionItem = [...document.querySelectorAll('.accordion-item')];


accordionItem.forEach(item => {
    item.addEventListener('click', () => {
        item.children[1].classList.toggle('open');
        item.children[0].children[1].classList.toggle('open');
    })
})
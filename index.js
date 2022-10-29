const brands = document.querySelectorAll('.brand');
const boxs = document.querySelectorAll('.box'); 
const brandAbout = document.querySelector('.text-container')
const menu = document.querySelector('nav .menu')

    menu.addEventListener('click', () => { 
        menu.classList.toggle('active')  ;
    })  
    document.querySelector('.container').addEventListener('click',() => {
        menu.classList.remove('active')  ;
    })
brands.forEach(brand => {
    brand.addEventListener('click', () => {
        brands.forEach(brand => {
            brand.classList.remove('active');
        })
        brand.classList.add('active');
        console.log(brand.children[3].href);
        brandAbout.innerHTML = ` <p>${brand.children[2].innerHTML} </p>
        <span><a href="${brand.children[3].href}">Read More</a></span>`;
    })
})

    boxs.forEach(box => {
        box.addEventListener('click' ,function(){
            boxs.forEach(box => {
                box.classList.remove('active')
            })
             box.classList.add('active')
        })
       
    })

    document.querySelector('nav ul .down span').addEventListener('click',() => {
     let li =  document.querySelector('nav ul .down');
     li.classList.toggle('active')
    })
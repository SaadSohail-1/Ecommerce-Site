// navbar hamburger
const hamburger = document.querySelectorAll('.hamburger li')[1];
hamburger.addEventListener('click',()=>{
    navbar.style.right = 0;    
})
const cross = document.querySelector('.cross');
cross.addEventListener('click',()=>{
    navbar.style.right = '-300px';
})

//image gallery in product tab
const mainImg = document.querySelector('#mainImg');
let smallPicsArr = Array.from(document.querySelectorAll('.small-img'))

smallPicsArr.forEach(img=>{
    img.addEventListener('click',(event)=>{
        mainImg.src = event.target.src
    })
});

document.querySelectorAll('.item-card').forEach(item=>{
    item.addEventListener('click',()=>{
        window.location.href= 'product.html';
    })
});
const list1 = document.querySelectorAll('ol')

for (const items of list1){
    items.addEventListener('click', (e) => {
        e.target.style.textDecoration = 'line-through'
    })
}

const list2 = document.querySelectorAll('ul')

for (const item of list2) {
    item.addEventListener('click', (e) => {
        e.target.style.opacity = 0
    })
}

const images = document.querySelectorAll('img')

for (const img of images) {
    img.addEventListener('click', (e) => {
        e.target.style.width = '0px'
    })
}

const destroy = document.querySelector('#destroy-all')

const nukeThem = function () {

    for (const items of list1) {    
        items.style.textDecoration = 'line-through';    
    }
    
    for (const item of list2) {
        item.style.opacity = 0;
    }
    
    for (const img of images) {
        img.style.width = '0px';
    }
}

destroy.addEventListener('click', nukeThem)
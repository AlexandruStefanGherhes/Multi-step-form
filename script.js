const pages = document.querySelectorAll('.page')
const numbers = document.querySelectorAll('.number')
const prevBtn = document.querySelector('.prev')
const nextBtn = document.querySelector('.next')

let pageIndex = 1;
showNumbers()
nextBtn.addEventListener('click',pageUp)
prevBtn.addEventListener('click', pageDown)


function showNumbers(){
    for(let i=0;i<pages.length;i++){
        numbers[i].style.backgroundColor = 'transparent'
    }
    numbers[pageIndex-1].style.backgroundColor = 'red'
}


function pageUp(){
    if(pageIndex < pages.length){
        pageIndex++
        hideAllPages()
        displayButtons()
        console.log(pageIndex)
        showNumbers()
    }
}

function pageDown(){
    if(pageIndex > 1){
        pageIndex--
        hideAllPages()
        displayButtons()
        console.log(pageIndex)
        showNumbers()
    }
}

function hideAllPages(){
    for(let page of pages){
        page.style.display = 'none'
    }
    pages[pageIndex-1].style.display = 'block'
}


function displayButtons(){
    prevBtn.style.display = pageIndex === 1 ? 'none' : 'block'
    nextBtn.style.display = pageIndex === pages.length ? 'none' : 'block'
}
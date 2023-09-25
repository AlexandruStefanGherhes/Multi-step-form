const pages = document.querySelectorAll('.page')
const numbers = document.querySelectorAll('.number')
const prevBtn = document.querySelector('.prev')
const nextBtn = document.querySelector('.next')
const toggle = document.querySelector('.slider')
const bonus = document.querySelectorAll('.bonus')
const membership = document.querySelectorAll('.membership')
const plans = document.querySelectorAll('.third-page-btn')
const selection = document.querySelectorAll('.second-page-btn')
const plansCheckbox = document.querySelectorAll('.select-plan')
const inputs = document.querySelectorAll('input[type=text]')
const form = document.querySelector('form')


let pageIndex = 1;
showNumbers()
nextBtn.addEventListener('click',pageUp)
prevBtn.addEventListener('click', pageDown)


// toggle input
toggle.addEventListener('click', toggleMembership)

// hide yearly bonus
function work(){
    for(let each of bonus){
        each.classList.add('hide')
    }
}

// highlight selection
selection.forEach((button) =>{
button.addEventListener('click',()=>{
    for(let i=0; i<selection.length; i++){
        selection[i].classList.remove('focus')
    }
    button.classList.add('focus')
})
})

// highlight plans
plans.forEach((plan,index) =>{
    plan.addEventListener('click',()=>{
    for(let i=0;i<selection.length;i++){
        plans[i].classList.remove('focus')
    }
    plansCheckbox.forEach(plan=>{
        plan.checked = false
        })
        plan.classList.add('focus')
        plansCheckbox[index].checked = true
        })
})

// add membership details
const monthly = ['+1$/mo','+2$/mo','+3$/mo']
const yearly = ['+10$/yr','+20$/yr','+30$/yr']
function membershipShow(text){
    for(i=0;i < membership.length;i++){
        membership[i].innerHTML = `${text[i]}`
    }
}

let clicked = false
toggleMembership()
function toggleMembership(){
    clicked = !clicked
    if(clicked){
        document.querySelector('.yearly').style.color = 'hsl(231, 11%, 63%)'
        document.querySelector('.monthly').style.color = 'hsl(213, 96%, 18%)'
        for(let each of bonus){
            each.classList.add('hide')
        }
        membershipShow(yearly)
    }else{
        document.querySelector('.monthly').style.color = 'hsl(231, 11%, 63%)'
        document.querySelector('.yearly').style.color = 'hsl(213, 96%, 18%)'
        for(let each of bonus){
            each.classList.remove('hide')
        }
        membershipShow(monthly)
    }
}

// hightlight step number
function showNumbers(){
    for(let i=0;i<pages.length;i++){
        numbers[i].style.backgroundColor = 'transparent'
        numbers[i].style.color = 'white'
        numbers[i].style.border = '1px solid white'
    }
    numbers[pageIndex-1].style.backgroundColor = 'hsl(228, 100%, 84%)'
    numbers[pageIndex-1].style.color = 'black'
    numbers[pageIndex-1].style.border = 'none'
}


// flip thru pages
function pageUp(){
    if(pageIndex < pages.length){
        pageIndex++
        hideAllPages()
        displayButtons()
        // console.log(pageIndex)
        showNumbers()
        result()
        showSubmit()
    }
}

function pageDown(){
    if(pageIndex > 1){
        pageIndex--
        hideAllPages()
        displayButtons()
        console.log(pageIndex)
        showNumbers()
        showSubmit()
    }
}

// show submit btn
function showSubmit(){
    if(pageIndex === pages.length){
        nextBtn.style.display = 'none'
        document.querySelector('.submit').style.display = 'block'
    }else{
        nextBtn.style.display = 'block'
        document.querySelector('.submit').style.display = 'none'
    }
}

// hide all pages
function hideAllPages(){
    for(let page of pages){
        page.style.display = 'none'
    }
    pages[pageIndex-1].style.display = 'block'
}

// show/hide buttons
function displayButtons(){
    prevBtn.style.display = pageIndex === 1 ? 'none' : 'block'
    nextBtn.style.display = pageIndex === pages.length ? 'none' : 'block'
}

// display result

function result(){
    const plan = document.querySelector('.selected-plan')
    const planPrice = document.querySelector('.category-price')
    const online = document.querySelector('.online')
    const onlinePrice = document.querySelector('.online-price')
    const storage = document.querySelector('.storage')
    const storagePrice = document.querySelector('.storage-price')
    const totalPlan = document.querySelector('.total-plan')
    const totalPrice = document.querySelector('.total-price')
    selection.forEach(each =>{
        each.addEventListener('click',()=>{
            if(each.classList.contains('focus')){
                const title = each.querySelector('.plan-data').textContent
                const price = each.querySelector('.plan-price').textContent
                if(clicked){
                    plan.innerHTML = title + `(Yearly)`
                    planPrice.innerHTML = `${price}`
                }else{
                    plan.innerHTML = title + '(Monthly)'
                    planPrice.innerHTML = `${price}`
                }
                clicked=!clicked
            }
        })
    })
}
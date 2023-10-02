const slides = document.querySelectorAll('.slide')
const steps = document.querySelectorAll('.number')
const nextBtn = document.querySelector('.next')
const prevBtn = document.querySelector('.prev')
const confirmBtn = document.querySelector('.confirm')
// console.log(steps[3])

let pageIndex = 1;
// showNumbers()
nextBtn.addEventListener('click',pageUp)
prevBtn.addEventListener('click', pageDown)
confirmBtn.addEventListener('click',()=>{
    document.querySelector('.buttons').style.display = 'none'
    pageUp()
})



// // toggle input
// toggle.addEventListener('click', toggleMembership)

// // hide yearly bonus
// function work(){
//     for(let each of bonus){
//         each.classList.add('hide')
//     }
// }

// // highlight selection
// selection.forEach((button) =>{
// button.addEventListener('click',()=>{
//     for(let i=0; i<selection.length; i++){
//         selection[i].classList.remove('focus')
//     }
//     button.classList.add('focus')
// })
// })

// // highlight plans
// plans.forEach((plan,index) =>{
//     plan.addEventListener('click',()=>{
//     for(let i=0;i<selection.length;i++){
//         plans[i].classList.remove('focus')
//     }
//     plansCheckbox.forEach(plan=>{
//         plan.checked = false
//         })
//         plan.classList.add('focus')
//         plansCheckbox[index].checked = true
//         })
// })

// // add membership details
// const monthly = ['+1$/mo','+2$/mo','+3$/mo']
// const yearly = ['+10$/yr','+20$/yr','+30$/yr']
// function membershipShow(text){
//     for(i=0;i < membership.length;i++){
//         membership[i].innerHTML = `${text[i]}`
//     }
// }

// let clicked = false
// toggleMembership()
// function toggleMembership(){
//     clicked = !clicked
//     if(clicked){
//         document.querySelector('.yearly').style.color = 'hsl(231, 11%, 63%)'
//         document.querySelector('.monthly').style.color = 'hsl(213, 96%, 18%)'
//         for(let each of bonus){
//             each.classList.add('hide')
//         }
//         membershipShow(yearly)
//     }else{
//         document.querySelector('.monthly').style.color = 'hsl(231, 11%, 63%)'
//         document.querySelector('.yearly').style.color = 'hsl(213, 96%, 18%)'
//         for(let each of bonus){
//             each.classList.remove('hide')
//         }
//         membershipShow(monthly)
//     }
// }

// // hightlight step number
function showNumbers(){
    for(let i=0;i<slides.length-1;i++){
        steps[i].style.backgroundColor = 'transparent';
        steps[i].style.color = 'white';
        steps[i].style.border = '1px solid white';
    }
    // console.log(i)
    steps[pageIndex-1].style.backgroundColor = 'hsl(228, 100%, 84%)';
    steps[pageIndex-1].style.color = 'black';
    steps[pageIndex-1].style.border = 'none';
}


// flip thru pages
function pageUp(){
    if(pageIndex < slides.length){
        pageIndex++
        hideAllPages()
        displayButtons()
        showNumbers()
        // result()
        showSubmit()
    }
}

function pageDown(){
    if(pageIndex > 1){
        pageIndex--
        hideAllPages()
        displayButtons()
        showNumbers()
        // console.log(pageIndex)
        showSubmit()
    }
}

// show submit btn
function showSubmit(){
    if(pageIndex === slides.length -1){
        nextBtn.style.display = 'none'
        document.querySelector('.confirm').style.display = 'block'
    }else{
        nextBtn.style.display = 'block'
        document.querySelector('.confirm').style.display = 'none'
    }
}

// // hide all pages
function hideAllPages(){
    for(let slide of slides){
        slide.style.display = 'none'
    // }
    slides[pageIndex-1].style.display = 'block'
}
}

// show/hide buttons
function displayButtons(){
    prevBtn.style.display = pageIndex === 1 ? 'none' : 'block'
    nextBtn.style.display = pageIndex === slides.length ? 'none' : 'block'
}

// // display result


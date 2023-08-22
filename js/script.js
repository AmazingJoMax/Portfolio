
const buttons = document.querySelectorAll('.btn')
const picCards = document.querySelectorAll('.pic-card')
const overlays = document.querySelectorAll('.overlay')
const bars = document.querySelector('.bars')
const cb = document.querySelector('.toggle')
const menu = document.querySelector('.menu')
const winBox = document.getElementById('window-box')

function toggle(){
    if(cb.checked == false){
        menu.classList.remove('open')
        menu.classList.add('close')
        bars.classList.remove('bars-rot')
    }else {
        menu.classList.remove('close')
        menu.classList.add('open')
        bars.classList.add('bars-rot')
    }
}
        
(function(){

    buttons.forEach((button)=>{
        button.addEventListener('click', (e) =>{
            e.preventDefault()
            const filter = e.target.dataset.filter

            picCards.forEach((item) => {
                if(filter === 'all'){
                        item.style.display = 'block'
                }else{
                    if(item.classList.contains(filter)){
                        item.style.display='block'
                    }else{
                        item.style.display = 'none'
                    }
                }
            })

        })
    }) 
})()


function closeWindow(){
    winBox.classList.add('window-close')
    winBox.classList.remove('window-open')
}

function openWindow(){
    winBox.classList.remove('window-close')
    winBox.classList.add('window-open')
}




AOS.init()

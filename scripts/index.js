function clickMenu() {

    if(itensMenu.style.display == 'block') {
       
        itensMenu.style.display = 'none'

    }else {
       
        itensMenu.style.display = 'block'
    }

}

function mudancaDeTamanho() {
        
    if (window.innerWidth >= 768) {
        itensMenu.style.display = 'block'
    }else {
        itensMenu.style.display = 'none'
    }
}
let allblocks = document.querySelector('.allblocks')

for(var i = 0; i < 323;i++) {
    let newblock = document.createElement('div')
    newblock.classList.add('block')
    allblocks.appendChild(newblock)
}

let b = document.querySelectorAll('.block')
let clean = document.querySelector('#clean')
let colors = document.querySelector('#color')
let cleanall = document.querySelector('#cleanall')
let border = document.querySelector('#border')
let op = document.querySelectorAll('option')

for(var i = 0; i < op.length;i++) {
    op[i].style.color = 'white'
    op[i].style.fontWeight = 'bold'
    op[i].style.backgroundColor = op[i].value
}

for(var i in b) {
    let lastBorder;
    let lastBg;
    b[i].onmouseover = function() {
        if(!clean.checked) {
            lastBorder = this.style.border
            lastBg = this.style.backgroundColor
            this.style.background = `radial-gradient(transparent ,${colors.value})`
            if(border.checked) {this.style.border = `1px dashed ${colors.value}`}
    
        }  
    } 
    b[i].onmouseleave = function() {
        if(!clean.checked) {
        this.style.border = lastBorder
        this.style.background = lastBg
        }
    }
    b[i].onclick = function() {
        if(clean.checked) {
            this.style.backgroundColor = 'white'
            lastBg = this.style.backgroundColor
        }
        else {
            this.style.backgroundColor = colors.value
            lastBg = this.style.backgroundColor
        }
    }
}

cleanall.onclick = function() {
    for(var i in b) {
        b[i].style.backgroundColor = 'white'
    }
}

border.onchange = function() {
    if(border.checked) {
        for(var i in b) {
            b[i].style.border = '1px solid black'
            b[i].style.height = '20px'
            b[i].style.width = '20px'
        }   
    }
    else {
        for(var i in b) {
            b[i].style.border = 'none'
            b[i].style.height = '22px'
            b[i].style.width = '22px'
        }
    }
}
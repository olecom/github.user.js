// ==UserScript==
// @name            github green color
// @author          olecom
// @namespace       github
// @description     github green color
// @match           https://github.com/*
// @version         0.1
// ==/UserScript==

var i, j, c

console.log('github green')

j = document.querySelector('.legend')
if(j){
    c = ['',
"#d6e685",//>FFEE4A
"#8cc665",//>FFC501
"#44a340",//>FE9600
"#1e6823",//>03001C
]
    for(i = 1; i < j.children.length; ++i){
        j.children[i].style.backgroundColor = c[i]
    }
}

j = document.querySelectorAll('.day[fill="#FFEE4A"]')
for(i = 0; i < j.length; ++i){
    j[i].setAttribute('fill', '#d6e685')
}

j = document.querySelectorAll('.day[fill="#FFC501"]')
for(i = 0; i < j.length; ++i){
    j[i].setAttribute('fill', '#8cc665')
}

j = document.querySelectorAll('.day[fill="#FE9600"]')
for(i = 0; i < j.length; ++i){
    j[i].setAttribute('fill', '#44a340')
}

j = document.querySelectorAll('.day[fill="#03001C"]')
for(i = 0; i < j.length; ++i){
    j[i].setAttribute('fill', '#1e6823')
}

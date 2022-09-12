// Menubox Script

const menubox = document.querySelector('.menu-box')
const middleNav = document.querySelector('.middle-nav')

menubox.addEventListener('click', () => {
    menubox.classList.toggle('active')
    middleNav.classList.toggle('active')
})


// Navigation Json Communication

fetch('http://localhost:3000/logo')
.then((resp) => resp.json())
.then((data) =>{
    let data1 = ""

    data.map((value) => {
        data1 = `
        <img onclick="logo()" src="${value.image}" id="logo">
        `
        document.querySelector('.left-nav').innerHTML = data1
    })
}).catch((Error) =>{
    console.log(Error)
})

fetch('http://localhost:3000/middle-nav')
.then((resp) => resp.json())
.then((data) => {
    let data2 = ""

    data.map((value) =>{
        data2 = `
        <ul>
        <li>${value.name1}</li>
        <li>${value.name2}</li>
        <li>${value.name3}</li>
        <li>${value.name4}</li>
        <li id="last-li">${value.name5}</li>
        </ul>
        `
        document.querySelector('.middle-nav').innerHTML = data2
    })
})

fetch('http://localhost:3000/right-images')
.then((resp) => resp.json())
.then((data) => {
    let data1 = ""

    data.map((value) =>{
        data1 = `
        <img src="${value.image1}" id="theme">
        <img src="${value.image2}" id="user">
        `
        document.querySelector('.right-images').innerHTML = data1
    })
})

fetch('http://localhost:3000/welcoming-text')
.then((resp) => resp.json())
.then((data) => {
    let data1 = ""

    data.map((value) =>{
        data1 = `
        <h1><span>${value.title1}</span> ${value.title2} <br> ${value.title3} <br> ${value.title4} <span>${value.title5}</span></h1>
        `
        document.querySelector('#welcoming-text').innerHTML = data1
    })
})


// let logo = document.querySelector('#logo').addEventListener('click', () => {
//     console.log('correct')
// })

function logo(){
    window.scrollTo(0, 0)
}
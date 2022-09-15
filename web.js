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

    const theme = document.querySelector('#theme')
    const body = document.querySelector('body')

    theme.addEventListener('click', ()=>{
        body.classList.toggle('dark')
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


fetch('http://localhost:3000/intro')
.then((resp) => resp.json())
.then((data) => {
    let data1 = ""

    data.map((value) => {
        data1 +=`
        <div class="intro"> <h2>${value.intro_first} <span>${value.intro_span}</span> ${value.intro_last}</h2> </div>
        `

        document.querySelector('.intro-container').innerHTML = data1
    })
})




fetch('http://localhost:3000/Mammals')
.then((resp) => resp.json())
.then((data) => {
    let data1 = ""

    data.map((value) => {
        data1 += `
        <div class="animals-container">
        <img src="${value.image}" alt="">

        <div class="info">
            <div class="info-text">
            <br><h2>${value.name}</h2><br>
            <p><span>Animal type</span> : ${value.animal_type}</p>
            <p><span>Active time</span> : ${value.active_time}</p>
            <P><span>Min-length</span> : ${value.length_min}</P>
            <P><span>Max-length</span> : ${value.length_max}</P>
            <p><span>Min-weight</span> : ${value.weight_min}</p>
            <p><span>Max-weight</span> : ${value.weight_max}</p>
            <p><span>Lifesapn</span> : ${value.life_span}</p>
            <p><span>Habitat</span> : ${value.habitat}</p>
            <p><span>Diet</span> : ${value.diet}</p>
            <p><span>Geo-range</span> : ${value.geo_range}</p>
            </div>
        </div>
    </div>
        `

        document.querySelector('.mammals-big-box').innerHTML = data1
    })
})

// rebtiles start

fetch('http://localhost:3000/Rebtiles')
.then((resp) => resp.json())
.then((data) => {
    let data1 = ""

    data.map((value) => {
        data1 += `
        <div class="animals-container">
        <img src="${value.image}" alt="">

        <div class="info">
            <div class="info-text">
            <br><h2>${value.name}</h2><br>
            <p><span>Animal type</span> : ${value.animal_type}</p>
            <p><span>Active time</span> : ${value.active_time}</p>
            <P><span>Min-length</span> : ${value.length_min}</P>
            <P><span>Max-length</span> : ${value.length_max}</P>
            <p><span>Min-weight</span> : ${value.weight_min}</p>
            <p><span>Max-weight</span> : ${value.weight_max}</p>
            <p><span>Lifesapn</span> : ${value.life_span}</p>
            <p><span>Habitat</span> : ${value.habitat}</p>
            <p><span>Diet</span> : ${value.diet}</p>
            <p><span>Geo-range</span> : ${value.geo_range}</p>
            </div>
        </div>
    </div>
        `

        document.querySelector('.Rebtiles-big-box').innerHTML = data1
    })
})
// rebtiles end

// Birds start
fetch('http://localhost:3000/Birds')
.then((resp) => resp.json())
.then((data) => {
    let data1 = ""

    data.map((value) => {
        data1 += `
        <div class="animals-container">
        <img src="${value.image}" alt="">

        <div class="info">
            <div class="info-text">
            <br><h2>${value.name}</h2><br>
            <p><span>Animal type</span> : ${value.animal_type}</p>
            <p><span>Active time</span> : ${value.active_time}</p>
            <P><span>Min-length</span> : ${value.length_min}</P>
            <P><span>Max-length</span> : ${value.length_max}</P>
            <p><span>Min-weight</span> : ${value.weight_min}</p>
            <p><span>Max-weight</span> : ${value.weight_max}</p>
            <p><span>Lifesapn</span> : ${value.life_span}</p>
            <p><span>Habitat</span> : ${value.habitat}</p>
            <p><span>Diet</span> : ${value.diet}</p>
            <p><span>Geo-range</span> : ${value.geo_range}</p>
            </div>
        </div>
    </div>
        `

        document.querySelector('.birds-big-box').innerHTML = data1
    })
})
// Birds end

fetch('http://localhost:3000/form_box')
.then((resp) => resp.json())
.then((data) => {
    let data1 = ""

    data.map((value) => {

        data1 = `
        <div class="right-form">
        <div class="join-box">
            <div class="comment-intro">
                <h1>${value.header}</h1><br>
                <p>${value.intro} <br> ${value.intro2}</p><br><br>
                <div class="phone">
                    <img src="${value.image1}" alt="">
                    <p>${value.phone}</p>
                </div>
                <div class="mail">
                    <img src="${value.image2}" alt="">
                    <p>${value.my_email}</p>
                </div>
            </div>
            <img src="${value.manImage}" alt="">
        </div>
    </div>
    <div class="left-form">
        <div class="inputs">
            <label for="">${value.fullName}</label>
            <div class="input-box">
                <input type="text" placeholder="${value.name_palceholder}" required>
            </div>          
        </div>
        <div class="inputs">
            <label for="">${value.Phone_number}</label>
            <div class="input-box">
                <input type="number" placeholder="${value.phone_placeholder}" required>
            </div>
        </div>
        <div class="inputs">
            <label for="">${value.email}</label>
            <div class="input-box">
                <input type="email" placeholder="${value.email_placeholder}" required>
            </div>
        </div>
        <div id="comment-section">
            <textarea type="comment" placeholder="${value.comment_placeholder}"></textarea>
        </div>
        <div id="submit-area">
            <button id="submit" type="submit" >${value.submit}</button>
        </div>
    </div>
        `
        document.querySelector('.form-box').innerHTML = data1
    })
})
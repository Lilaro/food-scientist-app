const topicsURL = 'http://localhost:3000/topics/'
const usersURL = 'http://localhost:3000/users/'
const topicContainer = document.querySelector(".container")
const userBox = document.querySelector(".userBox")
const lessonBox = document.querySelector(".lessonBox")
let userForm = document.querySelector(".userForm")
let updateButton = document.querySelector(".updateButton")
let deleteButton = document.querySelector(".deleteButton")


function getTopics() {
    fetch(topicsURL)
    .then(resp => resp.json())
    .then(topicObjs => {
        topicContainer.innerHTML = "" 
        topicObjs.data.forEach(topic => {
            renderTopics(topic)
        })
    })   
}

topicContainer.addEventListener("click", (event) => {
    
    console.log(event)
    console.log(event.target)
    // debugger
    if (event.target.className === "card") {
        const topicID = event.target.dataset.id
        // debugger
    fetch(`http://localhost:3000/topics/${topicID}`)
    .then(resp => resp.json())
    .then(topic => {
        console.log(topic.data.id)
        lessonBox.innerHTML = ""
        lessonBox.innerHTML += `
        <p>${topic.data.attributes.lesson})</p>
        <button class="lessonComplete">Lesson Complete</button>
        `
    })
    }
})


userBox.addEventListener("submit", (event) => {
    event.preventDefault()
    console.log(event)
    console.log(event.target)
    debugger
    if (event.target.className === "userForm") {
        event.preventDefault()
        console.log('')
        const config = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                'username': event.target.username.value,
                'email': event.target.email.value
            })
        }

        fetch(usersURL, config)
        .then(resp => resp.json())
        .then((user) => { 
            userBox.innerHTML = ""
            renderUserInfo(user)
        })
    }

    else if (event.target.classList === "deleteButton"){
        console.log(event.target)
        console.log('clicked deleteButton')
        debugger
    }
    
})

userBox.addEventListener("click", (event) => {
    console.log(event.target)
    if (event.target.className === "deleteButton") {
        event.preventDefault()
        fetch(usersURL + `${event.target.dataset.id}`, {
            method: 'DELETE'
        })
        .then(res => {
            console.log('that shit is deleted')
            window.location.reload()
          })
    }
})



function renderTopics(topic) {  
    topicContainer.innerHTML += `
        <div data-id=${topic.id} class="card">
        <img src=${topic.attributes.photo} width="200" height="121">
        <h4>${topic.attributes.name}</h4> 
        </div>
        `
}
// userBox.append(createdForm)
// doctument.createElement(createdForm)
// createdForm.innerText/html =`bleh`
function renderUserInfo(user) {
    userBox.innerHTML += `
        <h3>Hi ${user.data.attributes.username}!</h3>
        <h5>Your Badges</h5>
        <div class="badgeContainer"></div>
        <form class="userUpdateForm">
            Change Username:<br>
            <input type="text" name="username" value=""> 
            <br>
            <button data-id=${user.data.id} class="updateButton"> Change Username </button>
            <br>
            </form>
            <button data-id=${user.data.id} class="deleteButton"> Delete Me </button>
            `   
        let userUpdateForm = document.querySelector(".userUpdateForm")  
}
// TRY THIS AFTER ACHIEVEMENTS ARE A THING
    // function renderBadges(user) {
    // let badgeContainer = document.querySelector(".badgeContainer")
    // user.achievements.forEach((achievement => {
    //    badgeContainer.innerHTML += `
    //    <img src=${achievement.topic.photo}>`
    //  }))
    // }

getTopics()
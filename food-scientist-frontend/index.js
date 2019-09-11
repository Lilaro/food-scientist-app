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
    // debugger
    if (event.target.className === "card") {
        const topicID = event.target.dataset.id
        // debugger
    fetch(`http://localhost:3000/topics/${topicID}`)
    .then(resp => resp.json())
    .then(topic => {
        lessonBox.innerHTML = ""
        lessonBox.innerHTML += `
        <h4>${topic.data.attributes.name}</h4>
        <p>${topic.data.attributes.lesson})</p>
        <button data-id="${topic.data.id}" class="lessonComplete">Lesson Complete</button>
        `
    })
    }
})

lessonBox.addEventListener("click", (event) => {
    debugger
    if (event.target.className === "lessonComplete") {
        event.preventDefault()
        fetch(`http://localhost:3000/achievements`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'topic_id': event.target.dataset.id,
                'user_id': userBox.children[4].dataset.id
            })
        })
        .then(resp => resp.json())
        .then((achievement) => {
            console.log(achievement)
            debugger
        })
    }
})

userBox.addEventListener("submit", (event) => {
    event.preventDefault()
    // debugger
    if (event.target.className === "userForm") {
        event.preventDefault()
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
            console.log(user)
            userBox.innerHTML = ""
            renderUserInfo(user)
        })
    }

    // else if (event.target.classList === "updateButton"){
    
    //     debugger
    // }
    
})

userBox.addEventListener("click", (event) => {
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
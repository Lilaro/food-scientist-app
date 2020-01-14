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
    if (event.target.className === "card") {
        const topicID = event.target.dataset.id
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

getTopics()

lessonBox.addEventListener("click", (event) => {
    if (event.target.className === "lessonComplete") {
        event.preventDefault()
        let badgeContainer = document.querySelector(".badgeContainer")
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
            badgeContainer.innerHTML += `
            <img src="https://cdn.pixabay.com/photo/2016/10/29/20/26/award-1781445__340.png" width="32" height="40">
            `
        })
    }
})

userBox.addEventListener("submit", (event) => {
    event.preventDefault()
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
    } else if (event.target.className === "userUpdateForm")
        event.preventDefault()
        console.log('update form clicked')
        fetch(usersURL + `${event.target.dataset.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                'username': event.target.username.value,
                'email': event.target.email.value
            })
        }).then(resp => resp.json())
          .then((user) => {
            //   renderUserInfo(user)
            console.log(event.target.username.value)
            event.target.reset()
            
          })
    
})

userBox.addEventListener("click", (event) => {
    if (event.target.className === "deleteButton") {
        event.preventDefault()
        fetch(usersURL + `${event.target.dataset.id}`, {
            method: 'DELETE'
        })
        .then(res => {
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
// document.createElement(createdForm)
// createdForm.innerText/html =`bleh`
function renderUserInfo(user) {
    userBox.innerHTML += `
        <h3>Hi ${user.data.attributes.username}!</h3>
        <h5>Your Badges</h5>
        <div class="badgeContainer"></div>
        <form data-id=${user.data.id} class="userUpdateForm">
            Change Username:<br>
                    <input type="text" name="username" value="">
                    <br>
            Change Email:<br>
                    <input type="text" name="email" value="">
                  <br>
            <button data-id=${user.data.id} class="updateButton"> Update </button>
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

const topicsURL = 'http://localhost:3000/topics'
const usersURL = 'http://localhost:3000/users'
const topicContainer = document.querySelector(".container")
const userBox = document.querySelector(".userBox")
const lessonBox = document.querySelector(".lessonBox")
const userForm = document.querySelector(".userForm")


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
        <button class="lessonComplete">Lesson Complete</button>`
    })
    }
})


userForm.addEventListener("submit", (event) => {
    event.preventDefault()
    console.log(event)
    console.log(event.target)

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
})




function renderTopics(topic) {
    // topicImg = document.querySelector("img")
    // topicHeader = document.querySelector("h4")   
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
        <h4>Hi ${user.data.attributes.username}!</h4>
        <h5>Your Badges</h5>
        <form class="userUpdateForm">
            Change Username:<br>
            <input type="text" name="username" value="">
            <br>
            Change Email:<br>
            <input type="text" name="email" value="">
            <br>
            <br>
            <input class="updateButton" type="submit" name="submit">
            <br>
            </form>
        ` 
        let userUpdateForm = document.querySelector(".userUpdateForm")
}
// TRY AFTER ACHIEVEMENTS ARE A THING
    // function renderBadges(user) {
    // let badgeContainer = document.querySelector(".badgeContainer")
    // user.achievements.forEach((achievement => {
    //    badgeContainer.innerHTML += `
    //    <img src=${achievement.topic.photo}>`
    //  }))
    // }

getTopics()
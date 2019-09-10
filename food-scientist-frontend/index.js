const topicsURL = 'http://localhost:3000/topics'
const usersURL = 'http://localhost:3000/users'
const topicContainer = document.querySelector(".container")


function getTopics() {
    fetch(topicsURL)
    .then(resp => resp.json())
    .then(topicObjs => {
        console.log(topicObjs)
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
    })
    }
})


function renderTopics(topic) {
    // topicImg = document.querySelector("img")
    // topicHeader = document.querySelector("h4")
    console.log(topic.photo)   
    topicContainer.innerHTML += `
        <div data-id=${topic.id} class="card">
        <img src=${topic.attributes.photo} width="200" height="121">
        <h4>${topic.attributes.name}</h4> 
        </div>
        `
}

getTopics()
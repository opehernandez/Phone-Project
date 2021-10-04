const messagesData = [
  {
    message: {
      time:'12:31PM',
      photo: 'avatar.jfif',
      sender: "Mark Jhonson" || "Unknown",
      number: "682-964-6249",
      body: "Hello there, wanted to say thanks for the info"
    }
  },
  {
    message: {
      time:'1:26AM',
      photo: 'avatar.jfif',
      sender: "Carlos Martinez",
      number: "682-484-2483",
      body: "Got the quote ready, call me asap"
    }
  }
]

function getTime() {
    let date = new Date();
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let mer;
    hours === 0 ? mer = "AM" : hours > 12 ? mer = "PM" : mer = "AM";
    hours === 0 ? hours = 12 : hours > 12 ? hours = hours - 12 : hours = hours;
    hours > 12 ? hours = hours - 12 : hours = hours
    minutes < 10 ? minutes = `0${minutes}` : minutes = minutes
    document.getElementById("top-clock").innerText = `${hours}:${minutes}${mer}`;
    document.getElementById("middle-clock").innerText = `${hours}:${minutes}`;
  }
  setInterval(getTime, 1000)
  //Screen Selectors----------------------------->
  let homeScreen = document.querySelector('.home-screen')
  let homeButton = document.querySelector('.home-button')
  let messageIcon = document.getElementById('messages')
  let messagesScreen = document.querySelector('.messages-screen')

  //global variables---------------------------->
  let firstStart = true;
  let currentScreen
  let previousScreen
  let populated = false
  
  function phoneFlow() {
    if(firstStart) {
      homeScreen.style = `display: flex`
      firstStart = false
      currentScreen = homeScreen

      messageIcon.addEventListener('click', () => {
        currentScreen.style = `display: none`
        messagesScreen.style = `display: block`
        populateMessages(messagesData)
        previousScreen = currentScreen
        currentScreen = messagesScreen
      })
    }

    homeButton.addEventListener('click', () => {
      if(currentScreen === homeScreen) {return}
      homeScreen.style = `display: flex`
      currentScreen.style = `display: none`
      currentScreen = homeScreen
    })

  }

  function populateMessages(data) {
    if(populated){return}
    let messages = document.querySelector(".messages-body")
    data.forEach(element => {
      let messageThread = document.createElement('div')
      messageThread.classList.add('messages-thread')
      let photo = document.createElement('img')
      photo.classList.add('photo')
      photo.src = element.message.photo
      let info = document.createElement('div')
      info.classList.add('mInfo')
      let time = document.createElement('div')
      time.classList.add('mTime')
      time.textContent = element.message.time
      let name = document.createElement('div')
      name.classList.add('mName')
      name.textContent = element.message.sender
      let body = document.createElement('div')
      body.classList.add('mBody')
      body.textContent = element.message.body
      let phone = document.createElement('div')
      phone.classList.add('mPhone')
      phone.textContent = element.message.number
      info.append(name, phone, body)
      messageThread.append(photo, info, time)
      messages.appendChild(messageThread)

      messageThread.addEventListener('click', (event) => {
        console.log(event.currentTarget)
      })
      
      populated = true
    })
  }
  
  phoneFlow()
  
  

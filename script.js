document.querySelector('#show-users').addEventListener('click', () => {
  fetch("https://randomuser.me/api?results=5").then((response) => {
    response.json().then((json) => {
      for (user of json.results) {
        // const userDiv = document.createElement('div')
        // userDiv.classList.add('user')
        
        const userName = document.createElement('h4')
        userName.innerText = user.name.first
        userName.classList.add('user-name')
        document.querySelector('#users').append(userName)
        
        const userEmail = document.createElement('p')
        userEmail.innerText = user.email
        userEmail.classList.add('user-email')
        document.querySelector('#users').append(userEmail)
  
        const userImg = document.createElement('img')
        userImg.src = user.picture.medium
        userImg.classList.add('user-image')
        document.querySelector('#users').append(userImg)
  
        // document.querySelector('#users').append(userDiv)
      }
    })
  })
})



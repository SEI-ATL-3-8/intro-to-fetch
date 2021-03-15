document.querySelector('#show-users').addEventListener('click', () => {
  fetch("https://randomuser.me/api?results=5").then((response) => {
    response.json().then((json) => {
      for (user of json.results) {
        const userDiv = document.createElement('div')
        userDiv.classList.add('user')
        
        const userName = document.createElement('h4')
        userName.innerText = user.name.first
        userName.classList.add('user-name')
        userDiv.append(userName)
  
        const userImg = document.createElement('img')
        userImg.src = user.picture.medium
        userImg.classList.add('user-image')
        userDiv.append(userImg)
  
        const userEmail = document.createElement('p')
        userEmail.innerText = user.email
        userImg.classList.add('user-email')
        userDiv.append(userEmail)
  
        document.querySelector('#users').append(userDiv)
      }
    })
  })
})



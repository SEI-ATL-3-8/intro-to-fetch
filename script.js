const createUser = (userObj) => {
  const userDiv = document.createElement('div')
  userDiv.classList.add('user')
  
  const userName = document.createElement('h4')
  userName.innerText = user.name.first
  userName.classList.add('user-name')
  userDiv.append(userName)
  
  const userEmail = document.createElement('p')
  userEmail.innerText = user.email
  userEmail.classList.add('user-email')
  userDiv.append(userEmail)
  
  const userImg = document.createElement('img')
  userImg.src = user.picture.medium
  userImg.classList.add('user-image')
  userDiv.append(userImg)

  document.querySelector('#users').append(userDiv)
}

const fetchAndCreate = () => {
  const count = document.querySelector('#users-count').value || 5

  fetch(`https://randomuser.me/api?results=${count}`).then((response) => {
    response.json().then((json) => {
      for (user of json.results) {
        createUser(user)
      }
    })
  })
}

document.querySelector('#show-users').addEventListener('click', () => {
  document.querySelector('#users').textContent = ''
  fetchAndCreate()
})

fetchAndCreate()



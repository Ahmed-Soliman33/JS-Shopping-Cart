const loginBtn = document.getElementById('loginBtn')
const userName = document.getElementById('userName')
const userEmail = document.getElementById('email')
const userPassword = document.getElementById('password')



loginBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (userName.value != '' && userEmail.value != '' && userPassword != '') {
        localStorage.setItem('userName' , userName.value )
        localStorage.setItem('userEmail' , userEmail.value )
        localStorage.setItem('userPassword' , userPassword.value )
        userName.value = ''
        userEmail.value = ''
        userPassword.value = ''
        setTimeout(()=> {
            window.location.assign('./JS-Shopping-Cart/HomePage.html')
        } , 1000 )
    }
    else {
        alert("Please Complete Data!")
    }
  });






























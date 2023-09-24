const formElement= document.getElementById("form");
const NameInput =document.getElementById("name")
const EmailInput =document.getElementById("email")
const PasswordInput =document.getElementById("password")
const confPasswordInput =document.getElementById("confPassword")
const errorMsg = document.getElementById("errormsg")

formElement.addEventListener("submit",(event)=>{
    event.preventDefault();
    if(NameInput.value && EmailInput.value && PasswordInput.value && confPasswordInput.value){
      if(PasswordInput.value == confPasswordInput.value){
        localStorage.setItem('name',NameInput.value);
        localStorage.setItem('email',EmailInput.value);
        localStorage.setItem('password',PasswordInput.value);
        // Generate a 16-byte random array
        const randomArray = new Uint8Array(16);
        window.crypto.getRandomValues(randomArray);
        // Convert the array to a hexadecimal string
       const randomString = Array.from(randomArray, byte => byte.toString(16).padStart(2, '0')).join('');
       localStorage.setItem('Token',randomString);
       errorMsg.innerText="Sign up Sucessfully !";
       errorMsg.style.color="green"
       if(localStorage.getItem("Token")){
        document.location="http://127.0.0.1:5500/profile.html";
       }
      }else{
        errorMsg.innerText="";
        errorMsg.innerText="Password are Not Matching!"
      }
    
    }
    else{
        errorMsg.innerText="";
        errorMsg.innerText="All fields are mandatory !"
    }
 

})
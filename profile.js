const bodyDiv = document.querySelector("#body");

const cardDiv = document.createElement("div");
cardDiv.className = "card1";
cardDiv.innerHTML = `<h2>Profile</h2>
        <img src="./assete/boy.png" alt="img">
        <div class="profile">
        <p>Full Name : ${localStorage.getItem("name")}</p>
        <p>Email : ${localStorage.getItem("email")}</p>
        <p>Token : ${localStorage.getItem("Token")}</p>
        <p>Password : ${localStorage.getItem("password")}</p>
        </div>
         <button id="btn">Log out</button>`;
bodyDiv.append(cardDiv);
console.log(cardDiv);
const btn = document.getElementById('btn');
 btn.addEventListener("click",()=>{
    localStorage.clear();
    document.location="http://127.0.0.1:5500/index.html"
 })

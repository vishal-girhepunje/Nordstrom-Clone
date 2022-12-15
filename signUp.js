let f_name = document.getElementById('f_name');
let l_name = document.getElementById('l_name');
let pswd = document.getElementById('pswd');
let btn = document.getElementById('button');
let email = sessionStorage.getItem("email");
document.getElementById("email").textContent=email;


btn.addEventListener('click', ()=>{
    //saveIt();
    sessionStorage.removeItem("email")
});
function saveIt(){
    let array = JSON.parse(localStorage.getItem("data")) || [];

    if(f_name.value!=="" && l_name.value!=="" && pswd.value!==""){
        let obj = {
            FirstName : f_name.value,
            LastName : l_name.value,
            Password : pswd.value
        };
        array.push(obj)
        localStorage.setItem("data", JSON.stringify(array));
        alert("Signed Up Successfully!")
        window.location.href="./signUp.html"
        
    }else if(f_name.value =="" && l_name.value =="" && pswd.value ==""){
        alert("Please fill details")
    }
}
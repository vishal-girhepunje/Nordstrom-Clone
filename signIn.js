let button = document.getElementById("button");
let input = document.getElementById("input");



button.addEventListener("click", ()=>{
    //prevent();
    sessionStorage.setItem("email", JSON.stringify(input.value));
    window.location.href = "./signUp.html"
});

function prevent(){
    if(input == null || input == ""){
        alert("Enter email address!")
        window.location.href = "./signIn.html"
           
    }else if(input.value!== null || input.value !== ""){
        
        window.location.replace = "./signUp.html" 
    }
}
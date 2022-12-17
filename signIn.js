let button = document.getElementById("button");
let input = document.getElementById("input");



button.addEventListener("click", ()=>{
    prevent();
        
});

function prevent(){
    if(input.value !== null || input.value !== ""){
        sessionStorage.setItem("email", JSON.stringify(input.value));
        window.location.href = "signUp.html";
        input.value="";       
    }else if(input== null || input == ""){
        alert("Enter email address!")      
    }
};
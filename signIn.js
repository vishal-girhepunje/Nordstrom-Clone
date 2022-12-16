let button = document.getElementById("button");
let input = document.getElementById("input");



button.addEventListener("click", ()=>{
    prevent();
    sessionStorage.setItem("email", JSON.stringify(input.value));    
});

function prevent(){
    if(input.value !== null || input.value !== ""){
        console.log(input.value)
        window.location.href = "signUp.html";
        input.value="";       
    }else{
        alert("Enter email address!")      
    }
};
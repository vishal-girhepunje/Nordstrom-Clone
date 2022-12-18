let Name = document.getElementById('f_name');
let Email = document.getElementById('e-mail');
let password = document.getElementById('password');
let signIn = document.getElementById('signIn');
let signUp = document.getElementById('signUp');
document.getElementById("e-mail").value= JSON.parse(sessionStorage.getItem("email")) ;
let newuserbysign={}

signIn.addEventListener('click', ()=>{
    sessionStorage.removeItem("email")
    saveIt()
});

function saveIt(){
    if(Email.value==='admin' && password.value==='admin'){
        alert("Welcome! ADMIN");
        window.open('admin.html', '_blank');
        Email.value="";
        password.value=""
        return
    };

    let array = JSON.parse(localStorage.getItem("data")) || [];
     
    for(let i=0;i<array.length;i++){
        if(array[i].Email==Email.value){
            if(array[i].Password==password.value){
                alert(`Welcome ${array[i].Email} `)
                window.location.href="new_arrivals.html"
                return
            }else{
                alert("Wrong Password!")
                return
            }
        }else{
            continue
        }
    }   
    alert("Not Registered Sign up first");
};

signUp.addEventListener('click', ()=>{
    let array = JSON.parse(localStorage.getItem("data")) || [];

    newuserbysign.Name = Name.value; 
    newuserbysign.Email=Email.value;
    newuserbysign.Password=password.value;

    array.push(newuserbysign);

    localStorage.setItem("data",JSON.stringify(array));
    alert("You have been registered")
    window.location.href="new_arrivals.html"
});


let box=document.querySelector(".thirdmain")
let mover=setInterval(displayer,3000)
let imagearr=["home_images/movingimage1.png","home_images/movingimage2.png"]
let i=0

function displayer(){
    document.querySelector(".thirdmain").innerHTML=""
    let image=document.createElement("img")
    image.setAttribute("src",imagearr[i])
    i++
    if(i==2){
        i=0
    }
    box.append(image)

}
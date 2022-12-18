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
let sliderarrimg=[]
for(let j=0;j<7;j++){
    sliderarrimg
    .push(`home_images/slider${j+1}.jpeg`)
}
let vv=0
console.log(sliderarrimg)

let imagebox=document.querySelector("#slideimg")
let textbox=document.querySelector("#slidetext")
let sliderarrtext=["Simply Sexy <br> See and be seen in effortlessly chic style","'Tis the Season to Impress <br> Your OOTN: metallics, minis and major shine from SOMETHING NEW, Lulus and more.","Luxe Gifts: David Yurman <br> Delight them with fine jewelry featuring David Yurman's signature cable pattern.","Gift Black This Holiday <br> Use your spending power and commit 15% of your holiday shopping to Black-owned brands.","Put UGG Under the Tree <br> Win the holidays with the cozy gifts everyone wants most.","Altogether Cozy <br> Festive pajamas for the whole family.","Turn Up the Temp <br> Weatherproof your wardrobe with these cozy essentials."]
let sliderr=setInterval(movingslider,3000)
imagebox.src=sliderarrimg[0]

textbox.innerHTML=sliderarrtext[0]
document.querySelector("#prev").addEventListener("click",function(){
    if(vv<=0){
        return
    }else{
        vv--
        movingslider()
        console.log(vv)
    }
})
document.querySelector("#next").addEventListener("click",function(){
    if(vv>=6){
        return
    }else{
        vv++
        movingslider()
        console.log(vv)
    }
})
function movingslider(){
    
    
    vv++
    if(vv>=6){
        vv=0
    }
    imagebox.src=sliderarrimg[vv]
    textbox.innerHTML=""
    textbox.innerHTML=sliderarrtext[vv]
    
    
}
let topbtn=document.getElementById("top")
topbtn.addEventListener("click",function(){
    window.scrollTo(0,0)
})

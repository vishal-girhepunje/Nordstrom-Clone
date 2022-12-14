let flag1
let size = document.querySelector("#size")
size.addEventListener("click", () => {
    if (flag1 == false) {
        document.querySelector(".empty").innerHTML = "";
        document.querySelector(".empty1").innerHTML = "";
        flag1 = true;
    }
 
    else {
        let menshoes = document.createElement("div")
        menshoes.setAttribute("class", "empty")
        let h3_men_shoes = document.createElement("h3")
        h3_men_shoes.innerText = "Men : Shoes"
        menshoes.append(h3_men_shoes)
    
        let mensclothing = document.createElement("div")
        mensclothing.setAttribute("class", "empty1")
        let h3_mens_clothing = document.createElement("h3")
        h3_mens_clothing.innerText = "Men : Clothing"
        mensclothing.append(h3_mens_clothing)
    
    
    
        size.append(menshoes, mensclothing)
        flag1 = false
    }
    
});

let color = document.querySelector("#color")
color.addEventListener("click", () => { 
    console.log("clicked")
})

let brand = document.querySelector("#brand")
brand.addEventListener("click", () => { 
    console.log("clicked")
})

let material = document.querySelector("#material")
material.addEventListener("click", () => { 
    console.log("clicked")
})

let occassion = document.querySelector("#occassion")
occassion.addEventListener("click", () => { 
    console.log("clicked")
})

let price = document.querySelector("#price")
price.addEventListener("click", () => { 
    console.log("clicked")
})
let sale = document.querySelector("#sale")
sale.addEventListener("click", () => { 
    console.log("clicked")
})
let style = document.querySelector("#style")
style.addEventListener("click", () => { 
    console.log("clicked")
})
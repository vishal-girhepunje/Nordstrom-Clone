let count = 0;
let size = document.getElementById("size_size")
size.addEventListener("click", () => {
    if (count % 2 == 1) { 
        document.querySelector("#size").innerHTML = "" 
        count++
    }
  else { 
    let menshoes = document.createElement("div")
    menshoes.setAttribute("class", "empty")
    let h3_men_shoes = document.createElement("h3")
    h3_men_shoes.innerText = "Men : Shoes"
    menshoes.append(h3_men_shoes)
    
    let mensclothing = document.createElement("div")
    mensclothing.setAttribute("class", "empty")
    let h3_mens_clothing = document.createElement("h3")
    h3_mens_clothing.innerText = "Men : Clothing"
    mensclothing.append(h3_mens_clothing)
        
    let mens_dress_shirt = document.createElement("div")
    mens_dress_shirt.setAttribute("class", "empty")
    let h3_mens_dress_shirt = document.createElement("h3")
    h3_mens_dress_shirt.innerText = "Men : Dress Shirt"
        mens_dress_shirt.append(h3_mens_dress_shirt)
        
        let menspants = document.createElement("div")
        menspants.setAttribute("class", "empty")
        let h3_mens_pants = document.createElement("h3")
        h3_mens_pants.innerText = "Men : Pants"
        menspants.append(h3_mens_pants)
        
        let menssuits = document.createElement("div")
        menssuits.setAttribute("class", "empty")
        let h3_mens_suits = document.createElement("h3")
        h3_mens_suits.innerText = "Men : Suits"
        menssuits.append(h3_mens_suits)
        
        document.querySelector("#size").append(menshoes, mensclothing,mens_dress_shirt,menspants,menssuits)   
        count++
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

let price = document.querySelector("#price_")
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
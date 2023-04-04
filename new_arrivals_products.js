let url = "https://long-plum-chicken-fez.cyclic.app/api/all"
let stack = []
let no_ofitems=localStorage.getItem("itemsno") || 0
let bag =JSON.parse(localStorage.getItem("bag"))||[]
 
fetch(url)
    .then((res) => res.json())
    .then((data) => {
        stack = data;
        displayProducts(data)
    })

furniture = () => { 
    let url = "https://long-plum-chicken-fez.cyclic.app/api/furniture/"
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
        stack = data;
        displayProducts(data)
    }) 
    document.querySelector("#all_new>span:nth-child(4)").style.borderBottom = "5px solid black";
    document.querySelector("#all_new>span:nth-child(1)").style.borderBottom = "none";
    document.querySelector("#all_new>span:nth-child(2)").style.borderBottom = "none";
    document.querySelector("#all_new>span:nth-child(3)").style.borderBottom = "none";
    document.querySelector("#all_new>span:nth-child(5)").style.borderBottom = "none";
}

women = () => { 
    let url = "https://long-plum-chicken-fez.cyclic.app/api/women/"
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
        stack = data;
        displayProducts(data)
    }) 
    document.querySelector("#all_new>span:nth-child(3)").style.borderBottom = "5px solid black";
    document.querySelector("#all_new>span:nth-child(1)").style.borderBottom = "none";
    document.querySelector("#all_new>span:nth-child(2)").style.borderBottom = "none";
    document.querySelector("#all_new>span:nth-child(4)").style.borderBottom = "none";
    document.querySelector("#all_new>span:nth-child(5)").style.borderBottom = "none";
}
men = () => { 
    let url = "https://long-plum-chicken-fez.cyclic.app/api/men/"
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
        stack = data;
        displayProducts(data)
    }) 
    document.querySelector("#all_new>span:nth-child(1)").style.borderBottom = "none";
    document.querySelector("#all_new>span:nth-child(5)").style.borderBottom = "none";
    document.querySelector("#all_new>span:nth-child(3)").style.borderBottom = "none";
    document.querySelector("#all_new>span:nth-child(4)").style.borderBottom = "none";
    document.querySelector("#all_new>span:nth-child(2)").style.borderBottom = "5px solid black";  
}

kid = () => { 
    let url = "https://long-plum-chicken-fez.cyclic.app/api/kid/"
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
        stack = data;
        displayProducts(data)
    }) 
    document.querySelector("#all_new>span:nth-child(1)").style.borderBottom = "none";
    document.querySelector("#all_new>span:nth-child(2)").style.borderBottom = "none";
    document.querySelector("#all_new>span:nth-child(3)").style.borderBottom = "none";
    document.querySelector("#all_new>span:nth-child(4)").style.borderBottom = "none";
    document.querySelector("#all_new>span:nth-child(5)").style.borderBottom = "5px solid black";  
}

all_products = () => {
    
    let url = "https://long-plum-chicken-fez.cyclic.app/api/all"
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            stack = data;
            displayProducts(data)
        });
    document.querySelector("#all_new>span:nth-child(5)").style.borderBottom = "none";
    document.querySelector("#all_new>span:nth-child(2)").style.borderBottom = "none";
    document.querySelector("#all_new>span:nth-child(3)").style.borderBottom = "none";
    document.querySelector("#all_new>span:nth-child(4)").style.borderBottom = "none";
    document.querySelector("#all_new>span:nth-child(1)").style.borderBottom = "5px solid black";   

}





displayProducts = (data) => { 
    let x = data.length;
    document.querySelector("#all_products").innerHTML = "";
    data.forEach(element => {
      
        if (element.prod_img != undefined && element.pro_brand != undefined && element.curr_price != undefined && element.product_name != undefined)
        {
                let div = document.createElement("div");
                let img = document.createElement("img")
                img.setAttribute("src", element.prod_img)
                 
                  let brand = document.createElement("h2")
                  brand.innerText= element.pro_brand
                 
                  let string = document.createElement("p")
                  string.innerText= "Arrives Before Christmas"
                  string.setAttribute("id", "string")
                  
                  let strong = document.createElement("strong")
                  let price = document.createElement("p")
                 
                  price.innerText ="Current Price "+ element.curr_price;
                  price.style.color = "red";
                  strong.append(price)
          
                  let currentprice = document.createElement("p")
                  currentprice.setAttribute("id","price")
                  currentprice.innerText ="INR "+element.pro_price
                 
          
          
                  let description = document.createElement("p")
                  description.setAttribute("id","desc")
                  description.innerText = element.product_name;
          
                  let button = document.createElement("button")
                  let icon = document.createElement("i")
                  icon.setAttribute("class", "fa-solid fa-bag-shopping")
                    button.innerText = "Add To Bag "
                button.addEventListener("click", () => { 
                bag.push(element);
                localStorage.setItem("bag", JSON.stringify(bag));
                no_ofitems++
                localStorage.setItem("itemsno",no_ofitems)
                document.querySelector("#numOfItemInCart span").innerText=no_ofitems
                alert("Item Added to Cart")

             })
                  button.append(icon)
          
                  
                  div.append(img,string, brand,description, currentprice,strong, button)
                  
            document.querySelector("#all_products").append(div)
        }
       
        
    });
    document.querySelector("#loading_").innerText = x + " items";
   
}
// 88888888*******************************Sort Functionality**********************************

sortFunctionality = () => { 
    let selected = document.querySelector("select").value
    if (selected == "low_to_high") { 
    stack.map((element) => {
         
        element.pro_price = Math.floor(Math.random() * (8000 - 800) + 800)
        element.curr_price =  element.pro_price 
           return element
        })
        stack.sort((a, b) => {return a.pro_price - b.pro_price});
        displayProducts(stack)  
        
    }
   else  if (selected == "high_to_low") { 
    stack.map((element) => {
         
        element.pro_price = Math.floor(Math.random() * (8000 - 800) + 800)
        element.curr_price =  element.pro_price 
           return element
        })
        stack.sort((a, b) => {return b.pro_price - a.pro_price});
        displayProducts(stack)   
}
}

// 88888888888888888888888888888888888888888888888888888





//************************Moved Everything from new arrival.js**************************** */ 
let sount = 0;
let size = document.getElementById("size_size")
size.addEventListener("click", () => {
    if (sount % 2 == 1) { 
        document.querySelector("#size").innerHTML = "" 
        sount++
    }
  else { 
    let menshoes = document.createElement("div")
    menshoes.setAttribute("class", "empty")
    let h3_men_shoes = document.createElement("h3")
    h3_men_shoes.innerText = "vuori"
        menshoes.append(h3_men_shoes)
        menshoes.addEventListener("click", () => {
            let x = stack.filter((element) => element.pro_brand == "vuori")
            displayProducts(x)
        })
    
    let mensclothing = document.createElement("div")
    mensclothing.setAttribute("class", "empty")
    let h3_mens_clothing = document.createElement("h3")
    h3_mens_clothing.innerText = "Zella"
        mensclothing.append(h3_mens_clothing);
        mensclothing.addEventListener("click", () => {
            let x = stack.filter((element) => element.pro_brand == "Zella")
            displayProducts(x)
        })
        
    let mens_dress_shirt = document.createElement("div")
    mens_dress_shirt.setAttribute("class", "empty")
    let h3_mens_dress_shirt = document.createElement("h3")
    h3_mens_dress_shirt.innerText = "Zella Girl"
        mens_dress_shirt.append(h3_mens_dress_shirt)
        mens_dress_shirt.addEventListener("click", () => {
            let x = stack.filter((element) => element.pro_brand == "Zella Girl")
            displayProducts(x)
        })
        
        let menspants = document.createElement("div")
        menspants.setAttribute("class", "empty")
        let h3_mens_pants = document.createElement("h3")
        h3_mens_pants.innerText = "Stokke"
        menspants.append(h3_mens_pants)
        menspants.addEventListener("click", () => {
            let x = stack.filter((element) => element.pro_brand == "Stokke")
            displayProducts(x)
        })
        
        let menssuits = document.createElement("div")
        menssuits.setAttribute("class", "empty")
        let h3_mens_suits = document.createElement("h3")
        h3_mens_suits.innerText = "Nordstrom"
        menssuits.append(h3_mens_suits)
        menssuits.addEventListener("click", () => {
            let x = stack.filter((element) => element.pro_brand == "Nordstrom")
            displayProducts(x)
        })
        
        document.querySelector("#size").append(menshoes, mensclothing,mens_dress_shirt,menspants,menssuits)   
        sount++
  }
});
  

// let color = document.querySelector("#color")
// color.addEventListener("click", () => {
//     console.log("clicked")
// })

// let brand = document.querySelector("#brand")
// brand.addEventListener("click", () => {
//     console.log("clicked")
// })

// let material = document.querySelector("#material")
// material.addEventListener("click", () => {
//     console.log("clicked")
// })

// let occassion = document.querySelector("#occassion")
// occassion.addEventListener("click", () => {
//     console.log("clicked")
// })

// let price = document.querySelector("#price_")
// price.addEventListener("click", () => {
//     console.log("clicked")
// })
// let sale = document.querySelector("#sale")
// sale.addEventListener("click", () => {
//     console.log("clicked")
// })
// let style = document.querySelector("#style")
// style.addEventListener("click", () => {
//     console.log("clicked")
// })

// 88888888888888************SEARCH FUNCTIONALITY**************************
function searchall() { 
    
    let x = document.querySelector("input").value;
  
   
    let filtered = stack.filter((element) => element.product_name!=undefined && element.product_name.toLowerCase().includes(x.toLowerCase())|| element.pro_brand!=undefined && element.pro_brand.toLowerCase().includes(x.toLowerCase())|| element.pro_price!=undefined && element.pro_price.toString().includes(x) || element.pro_color!=undefined && element.pro_color.toLowerCase().includes(x.toLowerCase()) || element.pro_material!=undefined && element.pro_material.toLowerCase().includes(x.toLowerCase()) || element.pro_occassion!=undefined && element.pro_occassion.toLowerCase().includes(x.toLowerCase()) || element.pro_style!=undefined && element.pro_style.toLowerCase().includes(x.toLowerCase()) || element.pro_size!=undefined && element.pro_size.toLowerCase().includes(x.toLowerCase()) );
    
    displayProducts(filtered)
};


let url = "https://long-plum-chicken-fez.cyclic.app/api/all"
 let stack = []
fetch(url)
    .then((res) => res.json())
    .then((data) => {
        stack = data;
        displayProducts(data)
    })

furniture = () => { 
    let url = "https://long-plum-chicken-fez.cyclic.app/api/men/"
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
    let url = "https://long-plum-chicken-fez.cyclic.app/api/furniture/"
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






displayProducts = (data) => { 
    let x = data.length;
    document.querySelector("#all_products").innerHTML = "";
    data.forEach(element => {
      
        if (element.prod_img != undefined && element.pro_brand != undefined && element.curr_price != undefined && element.product_name != undefined)
        {
                let div = document.createElement("div");
                let img = document.createElement("img")
                img.setAttribute("src", element.prod_img)
                  // let product_image = element.avatar
                  let brand = document.createElement("h2")
                  brand.innerText= element.pro_brand
                  // let brand = element.brand
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
                  button.innerText= "Add To Bag "
                  button.append(icon)
          
                  
                  div.append(img,string, brand,description, currentprice,strong, button)
                  
            document.querySelector("#all_products").append(div)
        }
       
        
    });
    document.querySelector("#loading_").innerText = x + " items";
   
}

sortFunctionality = () => { 
    let selected = document.querySelector("select").value
    if (selected == "low_to_high") { 
    //     let sortedUrl = "https://long-plum-chicken-fez.cyclic.app/api/all?_sort=pro_price"
    //     fetch(sortedUrl)
    // .then((res) => res.json())
    //         .then((data) => { document.querySelector("#all_products").innerHTML = ""; displayProducts(data) })
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

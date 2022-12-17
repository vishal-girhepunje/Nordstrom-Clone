
let cartItems = JSON.parse(localStorage.getItem("cartItems")) || []
let sum = 0
let x = cartItems.forEach((element)=> sum+=element.pro_price)
let priceArr = JSON.parse(localStorage.getItem("totalPrice")) || {}



displayCartItems = (data) => { 
    let x = data.length;
    document.querySelector("#cart_items").innerHTML = "";
    data.forEach(element => {
      
        if (element.prod_img != undefined && element.pro_brand != undefined && element.curr_price != undefined && element.product_name != undefined)
        {
                let div = document.createElement("div");
                let img = document.createElement("img")
                img.setAttribute("src", element.prod_img)
                 
                  let brand = document.createElement("h2")
                  brand.innerText= element.pro_brand
                 
                  let currentprice = document.createElement("p")
                  currentprice.setAttribute("id","price")
                  currentprice.innerText ="INR "+element.pro_price
                 
          
          
                  let description = document.createElement("p")
                  description.setAttribute("id","desc")
                  description.innerText = element.product_name;
          
            let remove = document.createElement("p")
           
            remove.innerText = "Remove"
            remove.setAttribute("id", "remove")
            remove.addEventListener("click", removeElements)
            
                  div.append(img, brand,description, currentprice,remove)
                  
            document.querySelector("#cart_items").append(div)
        }
        
        document.querySelector("#total_price").innerText = "INR " + sum;
        priceArr[1] = sum;
        localStorage.setItem("totalPrice", JSON.stringify(priceArr))
        
    });
    // document.querySelector("#loading_").innerText = x + " items";
   
}
removeElements = () => { 
    
}

displayCartItems(cartItems)

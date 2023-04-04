
let cartItems = JSON.parse(localStorage.getItem("bag")) || []
let no_ofitems=localStorage.getItem("itemsno") || 0

document.querySelector("#numOfItemInCart span").innerText=no_ofitems






displayCartItems = (data) => { 
    let sum=0
    let x = data.length;
    document.querySelector("#cart_items").innerHTML = "";
    for(let i=0;i<data.length;i++){
        if (data[i].prod_img != undefined && data[i].pro_brand != undefined && data[i].curr_price != undefined && data[i].product_name != undefined)
        {
                let div = document.createElement("div");
                let img = document.createElement("img")
                img.setAttribute("src", data[i].prod_img)
                 
                  let brand = document.createElement("h2")
                  brand.innerText= data[i].pro_brand
                 
                  let currentprice = document.createElement("p")
                  currentprice.setAttribute("id","price")
                  currentprice.innerText ="INR "+data[i].pro_price
                  sum+=data[i].pro_price
                 
          
          
                  let description = document.createElement("p")
                  description.setAttribute("id","desc")
                  description.innerText = data[i].product_name;
          
            let remove = document.createElement("p")
           
            remove.innerText = "Remove"
            remove.setAttribute("id", "remove")
            remove.addEventListener("click", function(){
                cartItems.splice(i,1)
                no_ofitems--
                localStorage.setItem("itemsno",no_ofitems)
                document.querySelector("#numOfItemInCart span").innerText=no_ofitems
                localStorage.removeItem("bag")
                localStorage.setItem("bag",JSON.stringify(cartItems))
                displayCartItems(cartItems)
                
            })
            
            div.append(img, brand,description, currentprice,remove)
                  
            document.querySelector("#cart_items").append(div)
        }
        
        document.querySelector("#total_price").innerText = "INR " + sum
        localStorage.setItem("totalPrice",sum)
    }
    // document.querySelector("#loading_").innerText = x + " items";
   
}


displayCartItems(cartItems)

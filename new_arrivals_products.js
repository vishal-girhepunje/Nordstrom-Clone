let url = "https://long-plum-chicken-fez.cyclic.app/api/all"
 
fetch(url)
    .then((res) => res.json())
    .then((data) => { document.querySelector("#all_products").innerHTML = ""; displayProducts(data)})

displayProducts = (data) => { 
    let x = data.length;
    data.forEach(element => {
        let div = document.createElement("div")

       
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
       
        price.innerText = element.curr_price;
        price.style.color = "red";
        strong.append(price)

        let currentprice = document.createElement("p")
        currentprice.setAttribute("id","price")
        currentprice.innerText = element.pro_price
       


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
    });
    document.querySelector("#loading_").innerText = x + " items";
}

sortFunctionality = () => { 
    let selected = document.querySelector("select").value
    if (selected == "low_to_high") { 
        let sortedUrl = "https://long-plum-chicken-fez.cyclic.app/api/all?_sort=pro_price"
        fetch(sortedUrl)
    .then((res) => res.json())
            .then((data) => { document.querySelector("#all_products").innerHTML=""; displayProducts(data)})
    }
   
}

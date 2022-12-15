let url = "https://639aa068d5141501973a46bb.mockapi.io/products"
 
fetch(url)
    .then((res) => res.json())
    .then((data) => { displayProducts(data) })
    



displayProducts = (data) => { 
    data.forEach(element => {
        let div = document.createElement("div")
        let img = document.createElement("img")
        img.setAttribute("src", element.image)
        // let product_image = element.avatar
        let h2 = document.createElement("h2")
        h2.innerText= element.brand
        // let brand = element.brand
        let string = "Arrives before Christmas"
        let price = document.createElement("p")
        price.innerText = element.price
        let button = document.createElement("button")
        button.innerText= "Add To Cart"

        div.append(img, h2, string, price, button)
        
        document.querySelector("#all_products").append(div)
    });
}

let id=localStorage.getItem('id') || 661;
async function sendData(objdata) {
    try {
        let res = await fetch(`https://long-plum-chicken-fez.cyclic.app/api/all/`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(objdata)
        });
        if (res.ok) {
            let data = await res.json();
            return data;
        } else {
            return alert(`server responded with a ${res.status} error.`)
        }
    } catch (error) {
        return 'error';
    }
}
let button = document.getElementById('button');
button.addEventListener('click', () => {
    let product_name = document.getElementById('productName').value;
    let pro_brand = document.getElementById('productBrand').value;
    let pro_price = document.getElementById('productPrice').value;
    let prod_img = document.getElementById('productImage').value;
    
    pro_price=`INR ${pro_price}`;
    let obj={
        prod_img,
        pro_brand,
        product_name,
        pro_price,
        id
    }
    localStorage.setItem('recentadd',JSON.stringify(obj));
    console.log(obj);
    sendData(obj);
    id++;
   
    localStorage.setItem('id',id)

    var recent=JSON.parse(localStorage.getItem("recentadd"));
let sample=document.getElementById('sample');
console.log(recent.pro_brand);
if(recent){
    sample.innerHTML=`
<h2>${recent.pro_brand}</h2>
<h2>${recent.product_name}</h2>
    <img src="${recent.prod_img}" alt="${recent.product_name}">
    <h2>${recent.pro_price}</h2>
`;
}
})

var recent=JSON.parse(localStorage.getItem("recentadd"));
if(recent){
    sample.innerHTML=`
<h2>${recent.pro_brand}</h2>
<h2>${recent.product_name}</h2>
    <img src="${recent.prod_img}" alt="${recent.product_name}">
    <h2>${recent.pro_price}</h2>
`;
}



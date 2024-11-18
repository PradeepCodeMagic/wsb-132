
// cat-work
let catUl = document.querySelector(".left ul");

let displayCat = async () => {
    let Api = await fetch("https://dummyjson.com/products/categories")
    try {
        let data = await Api.json()
        catUl.innerHTML = "";

        data.forEach((v) => {
           
            catUl.innerHTML += `
                  <li onclick="singleCat( '${v.url}' )" > ${v.name} </li>
        `
        })
    }
    catch (error) {
        console.log("this is your error", error)
    }
}

displayCat()

// product-work
let innerMain=document.querySelector(".innerMain")

let showProduct = (catUrl) => {

   let api;
    if(catUrl==undefined){
        api="https://dummyjson.com/products?limit=200"
    }
    else{
        api=catUrl
    }

    fetch(api)
        .then((ress) => { 
             return ress.json()
        })
        .then((finalRess)=>{
            let FullDAta=finalRess.products;
            innerMain.innerHTML=""
            FullDAta.forEach((v)=>{
                
                innerMain.innerHTML +=`
                     <div class="box">
                        <img src=${v.thumbnail} alt="">

                        <h3> ${v.title}</h3>
                        <h4> Prices : $ ${v.price} </h4>
                        <button onclick='getId("${v.id}")' > 
                            <a href="productDetailpage.html" > Save ${v.id} </a>
                         </button>
                    </div>
                `
            })

        })
        .catch((error) => {
            console.log(error)
        })
}
showProduct()


// singleCat
let singleCat=(catUrl)=>{
    showProduct(catUrl)
}

let getId=(itemId)=>{
    localStorage.setItem("ecommId" , JSON.stringify(itemId) )
}


// let ws={
//     namess:"pradeep",
//     age:"25",
//     locationss:"rj-19"
// }

// let {namess,age,locationss} =ws



// console.log(namess,age,locationss)
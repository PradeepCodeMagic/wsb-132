
// cat-work
    let catUl=document.querySelector(".left ul");

    let displayCat= async ()=>{
    let Api=await  fetch("https://dummyjson.com/products/categories")
    try{
       let data=await Api.json()
       catUl.innerHTML="";
       
       data.forEach((v)=>{
       
        catUl.innerHTML +=`
                  <li> ${v.name} </li>
        `
       })
    }
    catch(error){
        console.log("this is your error",error )
    }
}

displayCat()


// let ws={
//     namess:"pradeep",
//     age:"25",
//     locationss:"rj-19"
// }

// let {namess,age,locationss} =ws



// console.log(namess,age,locationss)
let item = document.getElementById('grib')
let xhr = new XMLHttpRequest
let url = 'https://my-json-server.typicode.com/RodryOsyp/MarketPlace/'
xhr.open("GET", url + "/products")
xhr.responseType = 'json'
xhr.send()

xhr.onload = function(){
    let products = xhr.response
        item.innerHTML = `
    `
      item.innerHTML = ` 
      <div class="item">
        <h2>${products[0].name}</h2>
        <h2>description:${products[0].description}</h2>
        <img width="250px" src =  '${products[0].photo_url}'>
        <h2>price:${products[0].price}</h2>
      </div>

      <div class="item">
      <h2>${products[1].name}</h2>
      <h2>description:${products[1].description}</h2>
      <img width="250px" src =  '${products[1].photo_url}'>
      <h2>price:${products[1].price}</h2>
      </div>

      <div class="item">
      <h2>${products[2].name}</h2>
      <h2>description:${products[2].description}</h2>
      <img width="250px" src =  '${products[2].photo_url}'>
      <h2>price:${products[2].price}</h2>
      </div>
      `
}


    

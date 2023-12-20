const cards = document.querySelectorAll(".card");
const productDetailsContainer = document.querySelector('.product-details-container');
const productDetails = document.querySelector('.product-details');
const closeButton = document.querySelector('.close-btn');


//console.log(cards);
cards.forEach(element => element.addEventListener("click", function (e) {
    productDetailsContainer.style.display = (productDetailsContainer.style.display === 'none') ? 'block' : 'none';
    productDetails.style.display = (productDetails.style.display === 'none') ? 'block' : 'none';
    

    

    console.log(element.childNodes[1].outerHTML);
    console.log(element.childNodes);
    const img = element.childNodes[1]
    const title = element.childNodes[3].childNodes[3]
    const price = element.childNodes[3].childNodes[5]
    const quantity = element.childNodes[1]
    


    img.classList.add("product-img")
    title.classList.add("product-title")
    price.classList.add("product-price")
    quantity.classList.add("product-quantity")

    productDetails.innerHTML = img.outerHTML + title.outerHTML + price.outerHTML + quantity.outerHTML + `<div class="product-about">
    <h3>About this item</h3>
    <p>
      
          Artificial Snake Plant:22 Inch tall with black plastic
          pot (5.5" Diameter*4.3" Height), 12 lifelike leaves, 
          it can be placed and carried easily everywhere you desire.
          NO MAINTENANCE REQUIRED - no need trim and watering for people
          who have a busy schedule or but want to enjoy the overflowing 
          of greenery in office, conference hall as the tabletop plants .     </p> 
    
    <div class="product-note">
          <h4>Note:</h4>
          <p>
            Products with electrical plugs are designed for use in the US. 
            Outlets and voltage differ internationally and this product may require an 
           
          </p>
        </div>

    </div> 
    
    <button type="button" id="buynow" onclick="myFunction()">BUY NOW !</button> 
    
    <div id="quantity">
    <label for="quantitySelect">Quantity:</label>
    <select id="quantitySelect">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <!-- Add more options as needed -->
    </select>
  </div>`




}));

closeButton.addEventListener("click",function (e) {
    productDetailsContainer.style.display = (productDetailsContainer.style.display === 'none') ? 'block' : 'none';
    productDetails.style.display = (productDetails.style.display === 'none') ? 'block' : 'none';

})
productDetailsContainer.addEventListener("click",function (e) {
    productDetailsContainer.style.display = (productDetailsContainer.style.display === 'none') ? 'block' : 'none';
    productDetails.style.display = (productDetails.style.display === 'none') ? 'block' : 'none';
})


//toggleIframe
function toggleIframe() {
    var iframe = document.getElementById('pdfIframe');
    iframe.style.display = (iframe.style.display === 'none') ? 'block' : 'none';
}

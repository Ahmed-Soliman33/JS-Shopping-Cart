const welcomeUser = document.querySelector('.welcome-user')
const cartCounter = document.querySelector('.cart-counter')
const LogOutBtn1 = document.getElementById('LogOutBtn1')
const LogOutBtn2 = document.getElementById('LogOutBtn2')
const productsContainer = document.getElementById('productsContainer')
const userName = localStorage.getItem('userName')
const userEmail = localStorage.getItem('userEmail')
const userPassword = localStorage.getItem('userPassword')
import products from './Products.js';


// initializes the cart with default quantities (0) for each product.
const getDefaultCart = () => {
    let cart = {};
    for (let i = 1; i <= products.length; i++) {
        cart[i] = 0;
    }
    return cart;
}

// calculates and updates the cart counter
const counterHandel = () => {
    const itemsQuantity = JSON.parse(localStorage.getItem('itemsQuantity')) || getDefaultCart()
    console.log(itemsQuantity)

    var result = 0;
    for (let i = 1; i < products.length; i++) {
        result += itemsQuantity[i]
    }

    cartCounter.innerHTML = result
}
counterHandel()

welcomeUser.innerHTML = `Welcome ${userName} `

LogOutBtn1.addEventListener('click', () => {
    localStorage.clear();
    setTimeout(() => {
        window.location.assign('../index.html')
    }, 1000)
})
LogOutBtn2.addEventListener('click', () => {
    localStorage.clear();
    setTimeout(() => {
        window.location.assign('../index.html')
    }, 1000)
})

// Draw Cart Items
products.map((item) => {
    productsContainer.innerHTML +=
        `<div key='${item.id}' class="item">
    <img src="${item.imgUrl}" />
    <h3 class="item-title">${item.name}</h3>
    <p class="item-info">${item.description}</p>
    <p class="item-price">${item.price}$</p>
    <div class='w-100' ><button class="add-to-cart-button" data-id="${item.id}" >Add To Cart</button></div>
    </div>`

})

const buttons = document.querySelectorAll('.add-to-cart-button');
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        const id = e.target.dataset.id;
        addToCart(id);
    });
});

// adds a product to the cart, updates the cart quantities, and saves it in localStorage.
const addToCart = (id) => {
    var cart = JSON.parse(localStorage.getItem('itemsQuantity')) || getDefaultCart()
    let y = { ...cart, [id]: cart[id] + 1 }
    localStorage.setItem('itemsQuantity', JSON.stringify(y))
    counterHandel()
}
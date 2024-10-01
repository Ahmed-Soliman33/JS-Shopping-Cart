const welcomeUser = document.querySelector('.welcome-user')
const cartCounter = document.querySelector('.cart-counter')
const totalCart = document.querySelector('.total-cart')
const LogOutBtn1 = document.getElementById('LogOutBtn1')
const LogOutBtn2 = document.getElementById('LogOutBtn2')
const userName = localStorage.getItem('userName')
const productsContainer = document.getElementById('productsContainer')
import products from './Products.js';

// welcome user
welcomeUser.innerHTML = `Your Cart ${userName}`
let items = JSON.parse(localStorage.getItem('itemsQuantity'))


// return Numbers of user's items
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



/////////////////////////////////////////////////////
// Handle logOut Button
LogOutBtn1.addEventListener('click', () => {
    localStorage.clear();
    setTimeout(() => {
        window.location.assign('https://ahmed-soliman33.github.io/JS-Shopping-Cart/index.html')
    }, 1000)
})
LogOutBtn2.addEventListener('click', () => {
    localStorage.clear();
    setTimeout(() => {
        window.location.assign('https://ahmed-soliman33.github.io/JS-Shopping-Cart/index.html')
    }, 1000)
})
////////////////////////////////////////////////////

// Draw Cart Items
const drawCart = () => {
    products.map((e) => {
        if (items[e.id] > 0) {
            productsContainer.innerHTML += `
                <div key='${e.id}' class='CartItems-format CartItems-format-main'>
                    <img src='${e.imgUrl}' class='CartItems-product-icon' />
                    <p class='item-name '>${e.name}</p>
                    <p class='new_price' >${e.price}$</p>
                    <div class='CartItems-quantity ms-5'>${items[e.id]}</div>
                    <p class='total-price' >${e.price * items[e.id]}$</p>
                    <i class="fa-solid fa-xmark remove-item" data-id="${e.id}" ></i>
                </div>
                <hr />
        `
        }
    })
}
drawCart()


// Handle Total price
const totalCartHandle = () => {
    let result = [...document.querySelectorAll('.total-price')].reduce((previousValue, currentValue) => {
        return previousValue + parseFloat(currentValue.textContent);
    }, 0)
    
    totalCart.innerHTML = result ;
}
totalCartHandle()

// select Remove Buttons
const buttons = document.querySelectorAll('.remove-item')
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const id = e.target.dataset.id;
        console.log(id);
        removeHandle(id)
    });
});

// Handle Remove Buttons
const removeHandle = (id) => {
    var cart = JSON.parse(localStorage.getItem('itemsQuantity')) || getDefaultCart()
    if (cart[id] > 0) {
        var y = { ...cart, [id]: cart[id] - 1 }
    }
    localStorage.setItem('itemsQuantity', JSON.stringify(y))
    drawCart();
    counterHandel();
    window.location.reload()
}





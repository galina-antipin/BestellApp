let dishes = [
    {
        "category": "Pizza",
        "name": "Pizza Salami",
        "description": "mit Salami und Käse",
        "price": 6.50,
        "plusLogo": './img/plus-1727487_1280.png',
        "amount": [],
    },
    {
        "category": "Pizza",
        "name": "Pizza Fungi",
        "description": "mit Pilzen und Käse",
        "price": 6.50,
        "plusLogo": './img/plus-1727487_1280.png',
        "amount": [],
    },
    {
        "category": "Pizza",
        "name": "Pizza Margherita",
        "description": "mit Oregano und Käse",
        "price": 6.50,
        "plusLogo": './img/plus-1727487_1280.png',
        "amount": [],
    },
    {
        "category": "Pizza",
        "name": "Pizza Rucola",
        "description": "mit Rucola, Tomaten und Käse",
        "price": 6.50,
        "plusLogo": './img/plus-1727487_1280.png',
        "amount": [],
    },
    {
        "category": "Pizza",
        "name": "Pizza Formaggi",
        "description": "mit Gorgonzola und Käse",
        "price": 6.50,
        "plusLogo": './img/plus-1727487_1280.png',
        "amount": [],
    },
    {
        "category": "Salate",
        "name": "Salat Mediterran",
        "description": "mit frischen Oliven und Hirtenkäse",
        "price": 14.50,
        "plusLogo": './img/plus-1727487_1280.png',
        "amount": [],
    },
    {
        "category": "Salate",
        "name": "Salat Hähnchenstreifen",
        "description": "mit Hähnchenstreifen, Tomaten und Käse",
        "price": 14.50,
        "plusLogo": './img/plus-1727487_1280.png',
        "amount": [],
    },
    {
        "category": "Salate",
        "name": "Salat Mozzarella",
        "description": "mit gegrilltem Mozzarella und Rucola",
        "price": 14.50,
        "plusLogo": './img/plus-1727487_1280.png',
        "amount": [],
    },
    {
        "category": "Salate",
        "name": "Salat Kaukasus",
        "description": "mit Tomaten, Gurken, Oliven, Mais, Feta und Rucola",
        "price": 14.50,
        "plusLogo": './img/plus-1727487_1280.png',
        "amount": [],
    },
    {
        "category": "Salate",
        "name": "Salat Pomodoro",
        "description": "mit Tomaten und Zwiebeln",
        "price": 14.50,
        "plusLogo": './img/plus-1727487_1280.png',
        "amount": [],
    },
    {
        "category": "Pasta",
        "name": "Tortellini Waldpilz",
        "description": "mit Rucola, Waldpilzen, Spinatfüllung und Parmesan",
        "price": 14.90,
        "plusLogo": './img/plus-1727487_1280.png',
        "amount": [],
    },
    {
        "category": "Pasta",
        "name": "Spaghetti Carbonara",
        "description": "mit Schinkenwürfeln, Butter und Parmesan",
        "price": 14.90,
        "plusLogo": './img/plus-1727487_1280.png',
        "amount": [],
    },
    {
        "category": "Pasta",
        "name": "Spaghetti Bolognia",
        "description": "mit Hackfleisch, Tomaten-Sahnesouce und Parmesan",
        "price": 14.90,
        "plusLogo": './img/plus-1727487_1280.png',
        "amount": [],
    },
    {
        "category": "Pasta",
        "name": "Spaghetti Vegetaria",
        "description": "mit Porree, Tomaten-Sahnesouce und Parmesan",
        "price": 14.90,
        "plusLogo": './img/plus-1727487_1280.png',
        "amount": [],
    },
    {
        "category": "Pasta",
        "name": "Bandnudeln Scampi",
        "description": "mit Garnelen, Steinpilzen und Kirschtomaten",
        "price": 14.90,
        "plusLogo": './img/plus-1727487_1280.png',
        "amount": [],
    }
];


let basketDishes = [];
let basketAmount = [];
let basketPrice = [];


function render() {
    let pizzaDishes = document.getElementById('pizzaDishes');
    let salateDishes = document.getElementById('salateDishes');
    let pastaDishes = document.getElementById('pastaDishes');

    pizzaDishes.innerHTML = '';
    salateDishes.innerHTML = '';
    pastaDishes.innerHTML = '';

    for (let i = 0; i < dishes.length; i++) {
        const dish = dishes[i];
        if (dish.category.trim()  === "Pizza") {
            pizzaDishes.innerHTML += addHTML(i);
        } else if (dish.category.trim()  === "Salate") {
            salateDishes.innerHTML += addHTML(i);
        } else if (dish.category.trim() === "Pasta") {
            pastaDishes.innerHTML += addHTML(i);
        }
    }
}


function addHTML(i) {
    let dish = dishes[i];
    return `         
        <div class="dish-item">
            <div class="menu-section" id="myDishes${i}">
                <p class="name-style"><b>${dish['name']}</b></p> 
                <p class="description-style">${dish['description']}</p>
                <div class="add-button">
                    <p class="price-style"><b>${dish['price'].toFixed(2).replace('.', ',')} €</b></p>
                    <img onclick="addDishes(${i})" class="plus-img" src="${dish['plusLogo']}">
                </div>
            </div>
        </div>`;
}


function addDishes(i) {
    let dish = dishes[i]['name'];
    let dishPrice = dishes[i]['price'];
    let index = basketDishes.indexOf(dish);

    if (index !== -1) {
        basketAmount[index]++;
    } else {
        basketDishes.push(dish);
        basketPrice.push(dishPrice);
        basketAmount.push(1);
    }

    updateShoppingCart();
    calculateTotalPrice();
}


function updateShoppingCart() {
    let myBasket = document.getElementById('myShoppingCart');
    myBasket.innerHTML = '<div class="basket"><div class="my-basket-dishes"><span> Warenkorb</span></div></div>';

    for (let i = 0; i < basketDishes.length; i++) {
        myBasket.innerHTML += `<div class="basket" id="myShoppingCart${i}">     
                                    <div class="my-basket-dishes">
                                      <span><a id="counter-display${i}"><b>${basketAmount[i]}</b></a></span>
                                      <span> ${basketDishes[i]} </span> 
                                      <span><b> ${basketPrice[i].toFixed(2).replace('.', ',')} € </b></span>
                                      <button class="btn" onclick="minusDishes(${i})"> - </button>
                                      <button class="btn" onclick="plusDishes(${i})"> + </button>  
                                   </div>
                               </div>`;
    }

    if(basketDishes.length === 0){
        myBasket.innerHTML =  `<div class="basket" id="myShoppingCart">
                                    <h2>Warenkorb</h2>
                                    <img class="shopping-cart-img" src="./img/shopping-cart-close-round-1132-svgrepo-com.svg" alt="Warenkorb">
                                    <span> Dein Warenkorb ist leer</span>
                               </div>`; 

    }

    calculateTotalPrice();
    renderShoppingCart();
}


function plusDishes(i) {
    basketAmount[i]++;
    document.getElementById(`counter-display${i}`).innerHTML = basketAmount[i];
    calculateTotalPrice();
    renderShoppingCart()
}


function minusDishes(i) {
    basketAmount[i]--;
    document.getElementById(`counter-display${i}`).innerHTML = basketAmount[i];
    if (basketAmount[i] === 0) {
        basketDishes.splice(i, 1);
        basketPrice.splice(i, 1);
        basketAmount.splice(i, 1);
    }
    updateShoppingCart();
    calculateTotalPrice();
    renderShoppingCart()
}


function calculateTotalPrice() {
    let total = 0;
    for (let i = 0; i < basketDishes.length; i++) {
        total += basketPrice[i] * basketAmount[i];
    }
    totalPrice = total;
}


function renderShoppingCart() {
    let myTotalPrice = document.getElementById('total-price');
    if (basketDishes.length === 0) {
        myTotalPrice.innerHTML = '';
    } else {
        myTotalPrice.innerHTML = `Bestellen für: ${totalPrice.toFixed(2).replace('.', ',')} €`;
    }
}


function sendOrder() {
    alert('Ihre Bestellung ist unterwegs.');
    let myTotalPrice = document.getElementById('total-price');
    myTotalPrice.innerHTML = '';
    basketDishes = [];
    basketAmount = [];
    basketPrice = [];
    let myBasket = document.getElementById('myShoppingCart');
    myBasket.innerHTML = ` <div class="basket" id="myShoppingCart">
                               <h2>Warenkorb</h2>
                               <img class="shopping-cart-img" src="./img/shopping-cart-close-round-1132-svgrepo-com.svg" alt="Warenkorb">
                               <span> Dein Warenkorb ist leer</span>
                           </div>`; 
}

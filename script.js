// script.js
function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));

    document.getElementById(pageId).classList.add('active');

    const body = document.body;
    switch (pageId) {
        case 'home':
            body.style.backgroundImage = "url('images/food.jpg')";
            break;
        case 'about':
            body.style.backgroundImage = "url('images/food2.jpg')";
            break;
        case 'menu':
            body.style.backgroundImage = "url('images/food3.jpg')";
            break;
        case 'gallery':
            body.style.backgroundImage = "url('images/food4.jpg')";
            break;
        case 'team':
            body.style.backgroundImage = "url('images/food5.jpg')";
            break;
        case 'contact':
            body.style.backgroundImage = "url('images/food6.jpg')";
            break;
        case 'reservation':
            body.style.backgroundImage = "url('images/food7.jpg')";
            break;
    }
}

const menuData = {
    veg: [
        { name: "Paneer Tikka", image: "images/veg1.jpg", description: "Grilled cottage cheese with spices." },
        { name: "Vegetable Biryani", image: "images/veg2.jpg", description: "Spicy vegetable rice." },
        { name: "Paneer Butter Masala", image: "images/veg3.jpg", description: "Soft paneer cubes cooked in a rich and creamy tomato-based gravy.." },
        { name: "Aloo Gobi ", image: "images/veg4.jpg", description: "A North Indian dish." },
        { name: "Palak Paneer ", image: "images/veg5.jpg", description: "Cottage cheese cubes in a smooth spinach-based gravy." },
        { name: "Chole Bhature", image: "images/veg6.jpg", description: "Spicy chickpea curry." },
        { name: "Dal Makhani ", image: "images/veg7.jpg", description: "Slow-cooked black lentils." },
        { name: "Baingan Bharta", image: "images/veg8.jpg", description: "Roasted eggplant mashed." },
        { name: "Mixed Veg Curry", image: "images/veg9.jpg", description: " A combination of different vegetables." },
        { name: "Gobi Manchurian", image: "images/veg10.jpg", description: "Crispy fried cauliflower tossed in a spicy and tangy." }
    ],
    "non-veg": [
        { name: "Chicken Biryani", image: "images/nonveg1.jpg", description: "Spicy chicken with rice." },
        { name: "Butter Chicken", image: "images/nonveg2.jpg", description: "Creamy chicken curry." },
        { name: "Mutton Rogan Josh", image: "images/nonveg3.jpg", description: "A rich Kashmiri curry made with slow-cooked mutton." },
        { name: "Fish curry", image: "images/nonveg4.jpg", description: "Spicy and tangy fish." },
        { name: "Prawn Masala", image: "images/nonveg5.jpg", description: "spicy Juicy Prawns." },
        { name: "Chicken 65 ", image: "images/nonveg6.jpg", description: "Crispy, deep-fried spicy chicken ." },
        { name: "Tandoori Chicken", image: "images/nonveg7.jpg", description: "Yogurt-marinated chicken grilled in a tandoor." },
        { name: "Egg Curry", image: "images/nonveg8.jpg", description: "Hard-boiled eggs." },
        { name: "Crab Masala", image: "images/nonveg9.jpg", description: "Fresh crab ." },
        { name: "Lamb Kebabs", image: "images/nonveg10.jpg", description: " Minced lamb mixed with spices." },
        { name: "Pepper Chicken", image: "images/nonveg11.jpg", description: "Spicy and flavorful chicken ." },
        { name: "Grilled Salmon", image: "images/nonveg12.jpg", description: "Juicy salmon fillet ." }
    ],
    soups: [
        { name: "Tomato Soup", image: "images/soup1.jpg", description: "Classic tomato soup." },
        { name: "Sweet Corn Soup", image: "images/soup2.jpg", description: "Sweet and creamy corn soup." },
        { name: "Chicken Soup", image: "images/soup3.jpg", description: "A comforting soup with shredded chicken." },
        { name: "Mushroom Soup", image: "images/soup4.jpg", description: "A spicy and tangy Chinese soup ." },
        { name: "Hot and Sour Soup", image: "images/soup5.jpg", description: "An Italian soup." },
        { name: "Minestrone Soup ", image: "images/soup6.jpg", description: " A rich, caramelized onion soup ." },
        { name: "French Onion Soup", image: "images/soup7.jpg", description: "A spicy Indo-Chinese soup." },
        { name: "Manchow Soup", image: "images/soup8.jpg", description: " A smooth and creamy soup ." },
        { name: "Pumpkin Soup", image: "images/soup9.jpg", description: "Classic tomato soup." },
        { name: "Lentil Soup (Dal Soup)", image: "images/soup10.jpg", description: "A protein-packed soup." }
    ],
    starters: [
        { name: "Spring Rolls", image: "images/starter1.jpg", description: "Crispy vegetable spring rolls." },
        { name: "Chicken Wings", image: "images/starter2.jpg", description: "Spicy chicken wings." },
        { name: "Chicken Tikka", image: "images/starter3.jpg", description: "Marinated chicken pieces grilled to perfection with smoky flavors." },
        { name: "Hara Bhara Kabab", image: "images/starter4.jpg", description: "Healthy spinach and green peas patties with a crispy crust." },
        { name: "Tandoori Prawns", image: "images/starter5.jpg", description: "prawns marinated in tandoori masala and grilled." }
    ],
    icecreams: [
        { name: "Vanilla Ice Cream", image: "images/ice1.jpg", description: "Classic vanilla flavor." },
        { name: "Chocolate Ice Cream", image: "images/ice2.jpg", description: "Rich chocolate flavor." },
        { name: "Strawberry Ice Cream", image: "images/ice3.jpg", description: " Sweet and fruity ice cream made with fresh strawberries." },
        { name: "Butterscotch Ice Cream", image: "images/ice4.jpg", description: "Creamy ice cream with crunchy caramelized butterscotch bits." },
        { name: "Mango Ice Cream", image: "images/ice5.jpg", description: "A tropical delight made with ripe mangoes." }
    ],
    juices: [
        { name: "Orange Juice", image: "images/juice1.jpg", description: "Freshly squeezed orange juice." },
        { name: "Mango Juice", image: "images/juice2.jpg", description: "Sweet and tangy mango juice." },
        { name: "Watermelon Juice", image: "images/juice3.jpg", description: "A hydrating and refreshing juice." },
        { name: "Pineapple Juice", image: "images/juice4.jpg", description: " A tangy and sweet juice." },
        { name: "Pomegranate Juice", image: "images/juice5.jpg", description: "A rich, antioxidant-filled juice." }
    ]
};

function showCategory(category) {
    const menuItems = document.getElementById("menu-items");
    menuItems.innerHTML = menuData[category].map(item => `
        <div class="menu-item">
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <button onclick="placeOrder('${item.name}')">Place Order</button>
        </div>
    `).join("");
}

function placeOrder(itemName) {
    alert(`Order placed for ${itemName}`);
    document.getElementById("order-success").style.display = "block";
}

function closePopup() {
    document.getElementById("order-success").style.display = "none";
}

showPage('home');
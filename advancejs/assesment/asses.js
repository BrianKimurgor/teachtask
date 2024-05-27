/**
 * THE CART MANAGEMENT FEATURE - FINAL JAVASCRIPT ASSESSMENT
Create a Function to Add Products:
Description: Begin by creating a function named addProducts that will add a list of data object JSON to a global array. This function will be responsible for fetching product data from an API endpoint and populating it into your JavaScript application.
The data format can imitate the below JSON data each time you add an object of data to the global addedDataJSON

Steps:
Define the addProducts function.
Within the function, fetch data from the API endpoint asynchronously. You can use techniques like fetch() or axios to perform this task.
Once the data is fetched successfully, parse the JSON response.
Add the parsed data to a global array, which will serve as your product list.
Ensure error handling for any potential issues during data fetching or parsing.
Populate Data on the DOM:
Description: After successfully retrieving product data and storing it in the global array, the next step is to populate this data onto the HTML page. This involves dynamically creating HTML elements and injecting them into the DOM to display product details.
Steps:
Define a function, let's call it populateProducts, responsible for populating product data onto the DOM.
Inside this function, access the global array containing product data.
Iterate through each product object in the array.
For each product, dynamically create HTML elements (e.g., <div>, <img>, <h2>, <p>) representing product details.
Append these elements to the appropriate container in the HTML document, such as a product grid or list.
Create Functions for Cart Management:
Description: Implement functions to manage the shopping cart, including adding, deleting, increasing quantity, reducing quantity, and editing products in the cart.
Steps:
Add Product to Cart:
Define a function named addToCart that takes a product object as a parameter.
Within this function, add the product object to the cart array, which stores the items currently in the cart.
Update the cart UI to reflect the addition of the product, such as displaying the product in the cart preview or updating the cart total.
Delete Product from Cart:
Create a function called deleteProductFromCart that takes a product ID as a parameter.
Use array methods like filter() to remove the product with the specified ID from the cart array.
Update the cart UI to reflect the removal of the product.
Increase Product Quantity in Cart:
Implement a function named increaseProductQuantity that takes a product ID as a parameter.
Locate the product in the cart array and increment its quantity.
Update the cart UI to reflect the updated quantity.
Reduce Product Quantity in Cart:
Develop a function named reduceProductQuantity that accepts a product ID as input.
Find the product in the cart array and decrement its quantity.
Ensure appropriate handling for cases where the quantity becomes zero, potentially removing the product from the cart altogether.
Edit Product in Cart:
Create a function called editProductInCart that takes a product ID and new quantity as parameters.
Locate the product in the cart array and update its quantity with the new value.
Update the cart UI to reflect the changes made to the product.
 */




// const addedDataJSON  = [
//     {
//         "id": 1,
//         "imageUrl": "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
//         "title": "Summer Music Festival",
//         "price": 50,
//         "date": "August 20, 2021",
//         "location": "Central Park, New York City",
//         "company": "Music Festivals Inc."
//     },
//     {
//         "id": 2,
//         "imageUrl": "https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
//         "title": "Food and Wine Expo",
//         "price": 75,
//         "date": "September 25, 2021",
//         "location": "Moscone Center, San Francisco",
//         "company": "Food and Wine Events LLC"
//     },
//     {
//         "id": 3,
//         "imageUrl": "https://images.unsplash.com/photo-1618519764620-7403abdbdfe9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
//         "title": "Comic Con",
//         "price": 35,
//         "date": "October 15, 2021",
//         "location": "Los Angeles Convention Center",
//         "company": "Comic Con International"
//     },
//     {
//         "id": 4,
//         "imageUrl": "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXJ0JTIwYW5kJTIwZGVzaWduJTIwZmFpcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
//         "title": "Art and Design Fair",
//         "price": 20,
//         "date": "November 12, 2021",
//         "location": "Navy Pier, Chicago",
//         "company": "Art and Design Expo LLC"
//     },
//     {
//         "id": 5,
//         "imageUrl": "https://plus.unsplash.com/premium_photo-1661766479722-ddedc5dce339?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
//         "title": "Holiday Market",
//         "price": 5,
//         "date": "December 3, 2021",
//         "location": "Union Square, New York City",
//         "company": "Holiday Markets Inc."
//     },
//     {
//         "id": 6,
//         "imageUrl": "https://plus.unsplash.com/premium_photo-1661290419867-79072e8d5f00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29uY2VydCUyMHBhcmt8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
//         "title": "Concert in the Park",
//         "price": 20,
//         "date": "August 20, 2022",
//         "location": "Central Park, New York City",
//         "company": "Live Nation"
//     },
//     {
//         "id": 7,
//         "imageUrl": "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//         "title": "Food and Wine Festival",
//         "price": 50,
//         "date": "September 15-18, 2022",
//         "location": "Union Square, San Francisco",
//         "company": "Taste of San Francisco"
//     },
//     {
//         "id": 8,
//         "imageUrl": "https://plus.unsplash.com/premium_photo-1661602441396-67b89b6ac4d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
//         "title": "Summer Beach Party",
//         "price": 15,
//         "date": "July 3, 2022",
//         "location": "Venice Beach, Los Angeles",
//         "company": "LA Beach Parties"
//     },
//     {
//         "id": 9,
//         "imageUrl": "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
//         "title": "Angular Nation Expo",
//         "price": 35,
//         "date": "October 1-3, 2022",
//         "location": "Google Hall, San Fransico",
//         "company": "ArtExpo NY"
//     },
//     {
//         "id": 10,
//         "imageUrl": "https://images.unsplash.com/photo-1465310477141-6fb93167a273?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
//         "title": "Sports and Adventure Expo",
//         "price": 20,
//         "date": "May 20-22, 2022",
//         "location": "McCormick Place, Chicago",
//         "company": "Google"
//     }
//  ]



const addedDataJSON = [];

const addProducts = async (product) => {
    try {
        const response = await fetch();
        const data = await response.json();
        console.log('Fetched data:', data);
        addedDataJSON.push(...data);
        populateProducts(product);
    } catch (error) {
        console.log("Failed to load data:", error);
    }
};
addProducts();

const populateProducts = () => {
    const main = document.createElement('main');
    document.body.appendChild(main);
    addedDataJSON.forEach(product => {
        const div = document.createElement("div");
        const image = document.createElement('img');
        const title = document.createElement('h1');
        const price = document.createElement('p');
        const date = document.createElement('p');
        const location = document.createElement('p');
        const company = document.createElement('p');

        image.src = `${product.imageUrl}`;
        title.textContent = `${product.title}`;
        price.textContent = `${product.price}`;
        date.textContent = `${product.date}`;
        location.textContent = `${product.location}`;
        company.textContent = `${product.company}`;

        div.appendChild(image);
        div.appendChild(title);
        div.appendChild(price);
        div.appendChild(date);
        div.appendChild(location);
        div.appendChild(company);

        main.appendChild(div);
    });
};

const cart = [];

const addToCart = (product) => {
    cart.push(product);
};

const deleteProductFromCart = (productID) => {
    cart = cart.filter(item => item.id !== productID);
};

const increaseProductQuantity = (productID) => {
    const product = cart.find(item => item.id === productID);
    if (product) {
        product.quantity = (product.quantity || 0) + 1;
    }
};

const reduceProductQuantity = (productID) => {
    const product = cart.find(item => item.id === productID);
    if (product) {
        product.quantity = Math.max(0, (product.quantity || 0) - 1);
        if (product.quantity === 0) {
            deleteProductFromCart(productID);
        }
    }
};

const editProductInCart = (productID, newQuantity) => {
    const product = cart.find(item => item.id === productID);
    if (product) {
        product.quantity = newQuantity;
    }
};

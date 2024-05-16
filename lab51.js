// task 1


let productIdCounter = 1;

function createProduct(obj, callback) {
    obj.id = productIdCounter++;
    callback(obj);
}

function logProduct(product) {
    const productOutput = document.getElementById('productOutput');
    productOutput.textContent = JSON.stringify(product);
}

function logTotalPrice(product) {
    const priceOutput = document.getElementById('priceOutput');
    const totalPrice = product.price * product.quantity;
    priceOutput.textContent = totalPrice;
}

const product1 = {
    name: 'Телефон',
    price: 500,
    quantity: 2
};

const product2 = {
    name: 'Планшет',
    price: 300,
    quantity: 3
};

createProduct(product1, logProduct);
createProduct(product2, logTotalPrice);


//task 3


const medicines = {
    "Агалгін": new Date("2022-05-01"),
    "Ношпа": new Date("2025-07-02"),
    "Альфахолін": new Date("2024-12-21"),
    "Аспірин": new Date("2022-08-15"),
    "Аспаркам": new Date("2024-04-18"),
};

const today = new Date();

const medicineNames = Object.keys(medicines);

const validMedicines = medicineNames.filter(name => medicines[name] >= today);

validMedicines.sort((a, b) => medicines[a] - medicines[b]);

const resultContainer3 = document.getElementById("result-container3");

resultContainer3.innerHTML = validMedicines.join(", ");


//task 5


function applyDiscountAndAddID(fruits) {
    return fruits.map((fruit, index) => ({
        id: index + 1,
        name: fruit.name,
        price: fruit.price * 0.8
    }));
}

const fruits = [
    { name: "apple", price: 200 },
    { name: "orange", price: 300 },
    { name: "grapes", price: 750 },
];

const discountedFruits = applyDiscountAndAddID(fruits);

const resultContainer5 = document.getElementById("result-container5");

let resultHTML = "";
discountedFruits.forEach(fruit => {
    resultHTML += `ID: ${fruit.id}, Name: ${fruit.name}, Price: ${fruit.price.toFixed(2)}<br>`;
});

resultContainer5.innerHTML = resultHTML;


//task 7


class Client {
    #login;
    #email;

    constructor(login, email) {
        this.#login = login;
        this.#email = email;
    }

    get login() {
        return this.#login;
    }

    set login(value) {
        this.#login = value;
    }

    get email() {
        return this.#email;
    }

    set email(value) {
        this.#email = value;
    }
}

const client = new Client("user123", "user@example.com");

const resultContainer7 = document.getElementById("result-container7");
resultContainer7.innerHTML = `Login: ${client.login}, Email: ${client.email}`;

client.login = "newUser456";
client.email = "newuser@example.com";

resultContainer7.innerHTML += `<br>Updated Login: ${client.login}, Updated Email: ${client.email}`;


//task 9


const tweets = [
    { id: "000", likes: 5, tags: ["js", "nodejs"] },
    { id: "001", likes: 2, tags: ["html", "css"] },
    { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
    { id: "003", likes: 8, tags: ["css", "react"] },
    { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];

function countTags(tweets) {
    const tagCounts = {};
    
    tweets.forEach(tweet => {
        tweet.tags.forEach(tag => {
            if (tagCounts[tag]) {
                tagCounts[tag]++;
            } else {
                tagCounts[tag] = 1;
            }
        });
    });
    
    return tagCounts;
}

const tagCounts = countTags(tweets);

const resultContainer9 = document.getElementById("result-container9");
resultContainer9.innerHTML = JSON.stringify(tagCounts);


//task 10


function checkBrackets(str) {
    const stack = [];
    const bracketsPairs = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    for (const char of str) {
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        } else if (char === ')' || char === '}' || char === ']') {
            if (stack.length === 0 || stack[stack.length - 1] !== bracketsPairs[char]) {
                return false;
            }
            stack.pop();
        }
    }
    return stack.length === 0;
}

const someFn = "function test() { let x = [1, 2, {a: (b)}]; }";
const resultContainer10 = document.getElementById("result-container10");
const isValid = checkBrackets(someFn);
resultContainer10.innerHTML = isValid ? "True" : "False";

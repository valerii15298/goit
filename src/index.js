import svg1 from "./images/1.svg";
import svg2 from "./images/2.svg";
import svg3 from "./images/3.svg";

const CART_KEY = "CART_KEY";

const products = [svg1, svg2, svg3];

const initialIds = products.map((_svgSrc, id) => id.toString());


function renderProducts(productIds) {
    const wrapper = document.createElement("div");
    wrapper.classList.add("imagesWrapper")
    wrapper.innerHTML = productIds.map((id) => `<div class="elem">
<span> Product ${id}</span>
<img src="${products[id]}"/>
<button data-productId="${id}">Add to cart!</button>
</div>`).join('');
    return wrapper;
}

const wrapper = renderProducts(initialIds);
document.body.append(wrapper);

const cartDiv = document.createElement('div');
document.body.append(cartDiv);

function renderCart() {
    const existingDataList = JSON.parse(localStorage.getItem(CART_KEY) || "[]");
    cartDiv.innerHTML = `${existingDataList.length}`;
    cartDiv.append(renderProducts(existingDataList));
}

wrapper.addEventListener("click", (e) => {
    if (e.target.tagName !== "BUTTON") return;

    // BUTTON
    const productId = e.target.dataset.productid;

    const existingDataList = JSON.parse(localStorage.getItem(CART_KEY) || "[]")
    if (existingDataList.includes(productId)) {
        localStorage.setItem(CART_KEY,
            JSON.stringify(existingDataList.filter(id => id !== productId)))
    } else {
        localStorage.setItem(CART_KEY,
            JSON.stringify([...existingDataList, productId]))
    }

    renderCart();
})

renderCart();

// Create app with products
// App needs to have a cart where we can save products and persist

//  JSON topic
const jsonObj = {
    name: "Josh",
    "weight": 175,
    "age": 30,
    "eyecolor": "brown",
    "isHappy": true,
    "cars": ["Chevy", "Honda"],
    "favoriteBook": {
        "title": "The Last Kingdom",
        "author": "Bernard Cornwell",
        "rating": 8.38
    }
}

const stringifiedObj = JSON.stringify(jsonObj);

const parsedObj = JSON.parse(stringifiedObj);


const OldJSON = jsonObj
const str = JSON.stringify(JSON.parse(JSON.stringify(jsonObj)))
// const deepCopy = { ...jsonObj }

console.log(jsonObj === parsedObj);

// const timerId = setInterval(() => console.log("Tick"), 2000);
// setTimeout(() => clearInterval(timerId), 5000)


// TODO Kahoot question 9
// TODO Kahoot question 10

// for (let i = 3; i > 0; i--) {
//     const delay = i * 1000;
//     // console.log(`Browser, please, log to the console number ${i} after ${delay} milliseconds`)
//     setTimeout(() => console.log(i), delay);
// }


// let y = 0


// function a1() {
//     y = y + 1
// }

// function a2() {
//     y = y + 1
// }

// setTimeout(a1, 1000);

// a1()

// a2()

// y = 2 if synchroniusly
// y = 1 if multi thread

const timerDiv = document.createElement("h1");
document.body.append(timerDiv);

let count = 0;

// const deadline = Date.now() + 1000 * 60 * 5 + 2000;

// setInterval(() => {
//     const milliseconds = deadline - Date.now()
//     console.log(milliseconds)
//     timerDiv.textContent = `minutes: ${((milliseconds / 1000) / 60).toFixed(0)} seconds ${(milliseconds / 1000).toFixed(0) % 60}`;
// }, 1)





const animationWrapper = document.createElement("div");
document.body.append(animationWrapper);
const square = document.createElement("div");
animationWrapper.style.position = "relative";
animationWrapper.style.width = "400px";
animationWrapper.style.height = "20vh";
animationWrapper.style.backgroundColor = "black";

square.style.position = "absolute"
square.style.backgroundColor = "red"
square.style.width = "50px"
square.style.height = "50px"
animationWrapper.append(square)
square.style.left = "0px";

let toRight = true;

setInterval((arg1, arg2) => {
    // console.log({ arg1, arg2 })
    // console.log(square.style.left)
    const currentX = parseInt(square.style.left)
    if (currentX > 350) toRight = false;
    if (currentX <= 0) toRight = true;
    const dx = toRight ? +1 : -1;
    square.style.left = (currentX + dx).toString() + "px";
}, 10)

const milliseconds = Date.now();
console.log(milliseconds)
// setTimeout(() => {
//     // prints out "2", meaning that the callback is not called immediately after 500 milliseconds.
//     console.log(`Ran after ${new Date().getSeconds() - seconds} seconds`);
// }, 500)


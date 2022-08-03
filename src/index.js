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
    cartDiv.innerHTML = "";
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


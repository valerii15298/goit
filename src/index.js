// import validator from 'validator';
import * as allFromHelpers from './helpers.js';

import * as lodash from "lodash";

allFromHelpers.default()
console.log(lodash.add(2, 1))

// var validator = require('validator');

// console.log(validator.isEmail("validemail@gmail.com"))

// const message = "Hello, world!";
// console.log(message);

// console.log(square(20))
// allFromHelpers.default()
// console.log(2)
// Create heading node

// Create a class property without a constructor
import myImg from "./images/image1.jpg";
import mySvg from "./images/some.svg";
import './styles/main.scss';
console.log(mySvg);

class Game {
    name = 'Violin Charades'
}
const myGame = new Game()
// Create paragraph node
const p = document.createElement('p')
p.textContent = `I like ${myGame.name}.`

const heading = document.createElement('h1')
heading.textContent = 'Interesting!'

// Append heading node to the DOM
const app = document.querySelector('#root')
app.append(heading)

// const imageElement = document.createElement("img");
// imageElement.src = myImg;
// document.body.append(imageElement);

const mySvgImage = document.createElement("img");
mySvgImage.src = mySvg;
mySvgImage.style.width = "100px";
mySvgImage.style.height = "200px";
document.body.append(mySvgImage);

document.body.append("Some new text")

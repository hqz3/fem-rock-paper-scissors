# Frontend Mentor - Rock, Paper, Scissors solution

This is a solution to the [Rock, Paper, Scissors challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rock-paper-scissors-game-pTgwgvgH). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Notes](#notes)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the game depending on their device's screen size
- Play Rock, Paper, Scissors against the computer
- Maintain the state of the score after refreshing the browser _(optional)_
- **Bonus**: Play Rock, Paper, Scissors, Lizard, Spock against the computer _(optional)_

### Screenshot

#### Mobile

![](./screenshot.jpg)

#### Desktop

![](./screenshot.jpg)

### Links

- [Solution URL](https://www.frontendmentor.io/solutions/mobilefirst-game-w-css-flex-grid-animations-and-javascript-classes-wIOtFJPcdt)
- [Live Site URL](https://hqz3.github.io/fem-rock-paper-scissors/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Flexbox
- CSS Grid
- Mobile-first workflow
- BEM naming convention
- JavaScript modules

### Notes

I challenged myself to write the game logic using a mix of JavaScript classes and pure functions. A mix of OOP (or more accurately OLOO in JavaScript's case) and functional paradigms. OOP is useful for keeping track of game states, the score in this case, but can accommodate more states as the game grows in complexity.

Using JavaScript modules, I wrote each class as its own file. Game elements are instances of a class and work in a semi-modular manner, in the spirit of React components, that I can add and remove from the DOM depending on the game's state and user's input.

Working with JavaScript classes was also an opportunity to work with the idiosyncrasies of JavaScript's `this` keyword as well as using features such as arrow functions, `call`, `apply`, and `bind` to tame the `this`'s object reference depending on the execution context.

In addition to OOP, there are a handful of helper functions, notably one to generate sub-elements that are too small to warrant its own class and one to generate the game results using conditional checks. These functions are pure and only return results to be used in the original calling context. They are also abstractions that remove significant lines of code off the class declarations for clean and concise code.

Finally, this project was a good refresher on CSS transition and animation, which I used to create a more natural user experience as I did not want to show and hide game elements in a sudden manner.

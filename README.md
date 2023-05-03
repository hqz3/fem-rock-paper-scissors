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

### Screenshot

#### Mobile
![hqz3 github io_fem-rock-paper-scissors_(iPhone SE)](https://user-images.githubusercontent.com/68667158/235543027-0465a7dc-551b-4d43-9f77-60c534707867.png)


#### Desktop
![hqz3 github io_fem-rock-paper-scissors_(Nest Hub Max)](https://user-images.githubusercontent.com/68667158/235543042-8bec049b-da0a-4efb-81c2-067bbde2e6aa.png)


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
- JavaScript classes
- JavaScript modules

### Notes

I challenged myself to write the game logic using a mix of JavaScript classes and pure functions. A mix of OOP (or more accurately OLOO in JavaScript's case) and functional paradigms. OOP is useful for tracking the state of the game and accommodating more states if new features are added.

Using JavaScript modules, I wrote each class as its own file. Game elements are instances of a class and function in a semi-modular manner, in the spirit of React components, as they are added and removed from the DOM depending on the game's state and user's input.

Working with JavaScript classes also meant working with the idiosyncrasies of JavaScript's `this` keyword as well as using features such as arrow functions, and function methods such as `call`, `apply`, and `bind` to tame the `this` reference in relation to its calling context.

In addition, there are various pure helper functions, notably one to generate sub-elements that are too small to warrant its own class and one to generate the game results using conditional checks, that abstract away significant lines of code from the class declarations.

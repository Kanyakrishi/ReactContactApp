# Getting Started with Create React App

This project was inspired by a tutorial on YouTube - [React Contact App Tutorial](https://www.youtube.com/watch?v=0riHps91AzE)

## Introduction

This React Contact App tutorial is designed to help learn various React concepts through a practical project. Users can add, view, and delete contacts.

## Tech Stack

- React
- Semantic UI
- CSS
- React Router

## Features

- View the contact list
- Add new contacts
- Delete contacts

## Process

The project was initiated by following a YouTube tutorial, linked above. Challenges were faced particularly with styling and implementing routes.

## Learnings

1. Understanding `useState` and `useEffect` hooks, including dependencies.
2. Creating functional and class components(use render)
3. Facilitating parent-to-child component communication via props.
4. Utilizing callback functions for child-to-parent data transmission.
5. Rendering lists in React effectively.
6. Use of Flexbox for styling
**Explicit Grouping**: the image and text (`name` and `email`) are wrapped together in a new `div`. This effectively groups them as a single flex item. The outer `.item` container then only has two major elements to layout: the group (image+text) and the icon.
**Use of Flexbox**: By applying `display: 'flex'` to the outer `.item` container and using `justify-content: 'space-between'`, we ensure that there are two main items (the grouped content and the icon) laid out across the main axis of the container. The `space-between` value pushes these two main items to opposite ends of the container.
**Flex Grow on Group**: Adding `flex: '1'` to the grouping div allows it to take up any available space, ensuring the icon remains aligned to the end. This is not strictly necessary to achieve the alignment but helps in ensuring the grouped content (image+text) and the icon use the available space efficiently.

## Prerequisites

- Node.js
- npm
- react-router-dom
- semantic-ui

If a high version is used then:
1. React Router v6, where Switch has been replaced by Routes for defining route configurations.
2. Route tag contains 'element' instead of 'component' which includes the Child component.
   


## Run the code
npm start 

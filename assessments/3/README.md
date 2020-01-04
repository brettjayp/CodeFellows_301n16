# 301 Mid-Term Skills Assessment

## Execution Instructions

1. Create a new repository for your work, called `301-assessment`
1. Create this repository using the github.com options to create both a README.md and a .gitignore (Node)
1. Work in a non-master branch
1. Commit and push your work frequently
1. Create a Pull Request when you are finished and merge to your `master` branch
1. Submit a link to this Pull Request for grading purposes

## Questions

In your **README.md**, write the answers to the following questions.  Please state the question in bold text, and the answer beneath it in either normal text or formatted for code.

1. **How long is the array returned by `.map()`? `.filter()`?**
1. **What does the following code do:**

   ```javascript
   $('button#primary').on('click', function() {
     placeOrder(shoppingCartItems);
   });
   ```

1. **Write a function that takes an array of names as an argument and outputs each name in uppercase to the console.**

   ```javascript
   Your code goes here
   ```

## Application

Build an express server with the following features

1. Listens on port 3000
1. Can respond to a get request on the route: `/`
   - Send a status of 200 with the text "Home Page"
1. Can respond to a get request on the route: `/data`
   - Send a status of 200 with a JSON object of your choosing to the browser
1. Sends a status message of 404 with the text 'Not Found' for any other route.
  
---

> Assessment v1.03

<!--
    Grading Notes:  80% to pass
    
    - Questions: 5% each (15%) 
    - Operational Application - all features met (35%)
    - Uses .env instead of hard coding the port (10%)
    - Properly initializes the package.json with a 'start' script (10%) 
-->

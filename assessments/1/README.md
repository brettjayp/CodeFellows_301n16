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

1. **What library do we use in Node on the server side to allow us to create and run an HTTP server that obeys the HTTP protocol?**
1. **Explain this snippet of code from a server-side application**

   ```javascript
   response.status(200).send('Hello World!');
   ```

1. **Write a function that takes an array of numbers as an argument and outputs the square of each number in that array.**

   ```javascript
   Your code goes here
   ```

## Application Requirements

Build a website with the following features:

1. One page (index.html)
1. Header with your name
1. Footer with the name of this course
1. Content area to show a list of people
1. Loads a .json file with an array of 4 objects, each with names and ages
1. Dynamically iterates through that array and creates a `<li>` for each name and appends each of them to a `<ul>` on the page
1. Style the header with a black background and white text
1. Style footer with dark-grey background and black text
1. Style the content area with a near-white background and dark blue text
1. Style the list items as follows
   - No dot in front of the items.
   - Each item should be styled next to the others in a row
   - Name contained in a box with sufficient background, border, padding 
  
*It is recommended, but not required, that you use jQuery and Handlebars*

---

> Assessment v1.01

<!--
    Grading Notes:  80% to pass
    
    - Questions: 5% each (15%) 
    - Operational Application - all features met (35%)
    - Have proper, standard, semantic HTML structure (10%)
    - Use proper CSS (bonus for good SMACSS) (10%)
    - Create a proper JSON object/file (10%)
    - Use $.get() to fetch the JSON (10%)
    - Run each entry in the array through a constructor (5%)
      - Render each one using a prototype method
    - Use Handlebars (5%)
-->

# 301 Mid-Term Skills Assessment 

## Execution Instructions

1. Create a new repository for your work, called `301-assessment`
1. Create this repository using the github.com options to create both a README.md and a .gitignore (Node)
1. Work in a non-master branch
1. Commit and push your work frequently
1. Create a Pull Request when you are finished and merge to your `master` branch
1. Submit a link to this Pull Request for grading purposes

## Questons

In your **README.md**, write the answers to the following questions.  Please state the question in bold text, and the answer beneath it in either normal text or formatted for code.

1. **In an express server application, what does `dotenv` do**
1. **What does the following code do:**

   ```javascript
   function render( item ) {
     let markup = $('#item-template').html();
     let runTemplate = Handlebars.compile(markup);
     $("#list").append( runTemplate(markup) );
   };
   ```

1. **What is the difference between `relative` and `absolute` positioning in CSS?  In which SMACSS file would you put a rule with positioning?**

## Application

Write a Node application named `app.js` with the following features. Note that this is not to be an express server, but a .js file that can be run using `node app.js` to achieve the desired results. All output should be simply printed to the console.

1. Read in the contents of a .json file with the contents given below
1. Output a list of **each** property of the object and it's value, separated by a colon. For example:

   ```name: John```

1. Output a list (array) of all pets that start with the letter 'R'
1. Create a new instance of "Person" for each child, with the properties "name" and "age"
1. Create a method for a Person instance that outputs their age in dog years (their current age * 7)
1. For each Person in the children array, output their name, current age, and age in dog years

```json
{
  "name": "John",
  "pets": ["Rosie", "Rocky", "Luna"],
  "children": {
    "zach": {"age": 21},
    "allie": {"age": 14}
  },
  "job": "Instructor" 
}
```

---

> Assessment v1.04

<!--
    Grading Notes:  80% to pass
    
   - Questions: 5% each (15%) 
    - Operational Application - all features met (35%)
    - Proper Constructor (10%)
    - Proper Prototype Method (10%)
    - Reads in the .json file (10%)
    - 
-->

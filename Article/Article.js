// Because classes are not hoisted you will need to start your code at the bottom 
//of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement;
    // create a reference to the ".expandButton" class. 
    this.expandButton = this.domElement.querySelector(".expandButton");
    // Using your expandButton reference, update the text on your 
    //expandButton to say "expand"
    this.expandButton.textContent = "expand";
    // Set a click handler on the expandButton reference, 
    //calling the expandArticle method.
    this.expandButton.addEventListener("click", this.expandArticle.bind(this));
  }

  expandArticle() {
    // Using our reference to the domElement, toggle a class to 
    //expand or hide the article.
    this.domElement.classList.toggle("article-open");

  }
}

/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable to 
iterate over the articles NodeList and create a new instance of Article by 
passing in each article as a parameter to the Article class.

*/

let articles = document.querySelectorAll(".article");

articles.forEach(function(iteratedArticle){
  return new Article(iteratedArticle);
});

class Comp{
  constructor(domElement){
    this.domElement = domElement;
    this.subContainer = subContainer;
    this.window = window;
    this.heading = domElement.querySelector("h2");
    this.content = domElement.querySelectorAll("p");
    this.button = domElement.querySelector(".component-button");
    this.button.textContent = this.heading.textContent;
    this.window.addEventListener("load", this.addBtn.bind(this));
    this.button.addEventListener("click",this.hide.bind(this));
  }
  hide(){
    this.subContainer.forEach(function(paragraph){
      paragraph.classList.toggle("hide-contents")
    });
    //this.heading.classList.toggle("hide-contents");
  }
  addBtn (){
    buttonContainer.append(this.button);
    
  }
  
}

let buttonContainer = document.querySelector(".button-container");

let subContainer = document.querySelectorAll(".sub-container");

let newComp = document.querySelectorAll(".sub-container");
console.log(newComp);

newComp.forEach(function(info){
  return new Comp(info);
});



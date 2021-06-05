//BASICS
function a(){
    //Show error
    console.error("Error 133123");

    //Show Warning
    console.warn("Warning 12312")


    //Js variables types:
    // var, let, const

    //Can modify
    let age = 30
    age = 31

    console.log(age)

    //Can't modify and can't do "const x;" you have to assign a value
    const agee = 19
    //age = 30;

    console.log(agee)


    //String, Numbers, Boolean, null, undefined

    const name = 'John'
    const bb = 30
    const rating = 4.5
    const isCool = true
    const x = null
    const y = undefined // same thing as "let z;"

    //Concatenate

    let _x = 3
    let _y = 3

    console.log("x + y = " + (_x+_y));

    const test = "teste"

    console.log("x + y = " + test);
    //or
    console.log(`x + y = ${test}`); //Called tempalte string
}

//STRING MANIPULATION ETC BASIC THINGS
function b(){
    //Length of something
    const s = "Hello World"

    console.log(s.length);
    console.log(s.toUpperCase());
    console.log(s.toLowerCase());

    //Gets the first 5 chars from pos 0 to pos 5
    console.log(s.substring(0, 5).toUpperCase());

    //Splits the string into an array
    console.log(s.split(''));

    let test = "abd abd bfd hgb sdf"
    console.log(test.split(" "));
}

//ARRAYS AND MANIPULATE THEM
function c(){
    //Arrays
    //when we have "new" is like a constructor
    const numbers = new Array(1,2,3,4,5)
    console.log(numbers);

    const fruits = new Array("apples", "oranges", "pears")
    console.log(fruits);

    //JS can have differente data types
    const difDT = new Array("apples", 123, true)
    console.log(difDT);

    //How to get first item of an array
    console.log(fruits[0]);

    //How to add something to the end of the array
    fruits.push("grapes")
    console.log(fruits);

    //How to add to the beginning of the array
    fruits.unshift("strawberries")
    console.log(fruits);

    //How to remove something from the end
    fruits.pop()
    console.log(fruits);

    //How to know if is something is an array
    console.log(Array.isArray(fruits));

    //Get the index of a specific value
    console.log(fruits.indexOf("oranges"));
}

//OBJECT LITERALS
function d(){
    //Object Literals

    // Key : Value
    const person = {
        firstName: "John",
        lastName: "Doe",
        age: 30,
        hobbies: ["music", "movies", "sports"],
        address: {
            street: "50 main st",
            city: "Boston",
            state: "Ma"
        }
    }

    console.log(person)
    console.log(person.firstName)
    console.log(person.firstName, person.lastName)
    console.log(person.hobbies[1])
    console.log(person.address)
    console.log(person.address.street)

    //Destructuring
    //this is the same as like const firstName = person.firstName
    const { firstName, lastName, address:{city} } = person
    //Embedded  object like address you can do address:{city}
    console.log(firstName, lastName, city);

    //Can add properties to the object
    person.email = "john@gmail.com"
    console.log(person);

    //Arrays of objects
    const todos = [
        {
            id: 1,
            text: "Take out trash",
            isCompleted: true
        },
        {
            id: 2,
            text: "Drink Water",
            isCompleted: true
        },
        {
            id: 3,
            text: "Meeting with boss",
            isCompleted: false
        }
    ]

    console.log(todos[0].text)
    console.log("Is completed? " + todos[0].isCompleted)

}

//JSON, forEach, map, filter
function e(){
    //JSON
    const todos = [
        {
            id: 1,
            text: "Take out trash",
            isCompleted: true
        },
        {
            id: 2,
            text: "Drink Water",
            isCompleted: true
        },
        {
            id: 3,
            text: "Meeting with boss",
            isCompleted: false
        }
    ]

    //const todoJSON = JSON.stringify(todos) -> TO SEND TO A SERVER
    //console.log(todoJSON);

    // for(let todo of todos){
    //     console.log(todo);
    // }

    //foreach 
    todos.forEach(function (todo){ //todo is the variable that you want to use as each item in this case each todo
        console.log(todo.text);
    })

    //map returns an array
    const todoTextMap = todos.map(function (todo){ //todo is the variable that you want to use as each item in this case each todo
        return todo.text
    })

    //filter technically it filters something from the array of objects
    const todoCompletedFilter = todos.filter(function (todo){ //todo is the variable that you want to use as each item in this case each todo
        return todo.isCompleted === true
    })

    console.log(todoCompletedFilter);

    //filter + map
    const todoCompletedFilterMap = todos.filter(function (todo){ //todo is the variable that you want to use as each item in this case each todo
        return todo.isCompleted === true
    }).map(function(todo){
        return todo.text
    })

    console.log(todoCompletedFilterMap);
}

//Functions
function f(){
    
    //Functions
    function addNumsA(num1 = 1, num2 = 1){
        return num1 + num2
    }
    console.log(addNumsA());

    //arrow function
    const addNumsB = (num1 = 1, num2 = 1) => {
        console.log(num1 + num2)
    }

    //or

    /*
    const addNumsB = (num1 = 1, num2 = 1) => console.log(num1 + num2)

    if want to return
    const addNumsB = (num1 = 1, num2 = 1) => num1 + num2
    */
    addNumsB()

    const addNumsC = num1 => num1 + 5
    console.log(addNumsC(10));

    //good to use for example in forEach:
    /* 

    todos.forEach( (todo) => console.log(todo.text) )

    */


}

//Function with lexical this || OOP
function g(){
    

    //Functions with lexical this
    //Constructor Function
    function Person(firstName, lastName, dob){
        this.firstName = firstName
        this.lastName = lastName
        this.dob = new Date(dob)

        //Not good to have in the object it self
        //It's ok to use here the arrow function
        //because the "this" is inside this scope(inside this function)
        //so it refers to the function it self (1)
        // this.getBirthYear = () => this.dob.getFullYear()
        // this.getFullName = () => `${this.firstName} ${this.lastName}`
    }

    //Good to have the functions in the prototype
    //Here we have to use the function() {] and not the arrow function
    //(1) Although here we can't use the arrow function
    //because "this" is undefined
    //SEE https://stackoverflow.com/questions/34361379/are-arrow-functions-and-functions-equivalent-interchangeable
    Person.prototype.getBirthYear = function(){
        return this.dob.getFullYear()
    }

    Person.prototype.getFullName = function(){
        `${this.firstName} ${this.lastName}`
    } 

    //Instantiate object
    const person1 = new Person("Andre", "Sousa", "3-2-2002")

    console.log(person1);
    console.log(person1.getBirthYear());
    console.log(person1.getFullName());
}

//Classes || OOP
function h(){
    //Class
    //BETTER TO USE THEN THE g() function
    class Person{
        //Constructor dentro de uma class
        constructor(firstName, lastName, dob){
            this.firstName = firstName
            this.lastName = lastName
            this.dob = new Date(dob)
        }

        getBirthYear(){
            return this.dob.getFullYear()
        }

        getFullName(){
            return `${this.firstName} ${this.lastName}`
        }
    }



    const person1 = new Person("André", "Sousa", "3-2-2002")

    console.log(person1);
    console.log(person1.getBirthYear());
}

//DOM
function i(){
    //SELECT THINGS FROM DOM
    // Single Element Selectors
    console.log(document.getElementById("my-form")) //only select the first
    console.log(document.querySelector(".container")) //only select the first
    console.log(document.querySelector("h1")) //only select the first

    // Multiple Element Selectors
    console.log(document.querySelectorAll(".item")); //NodeList
    console.log(document.getElementsByClassName("item")); //HTMLCollection for class
    console.log(document.getElementsByTagName("li")); //HTMLCollection for tags


    console.log("\n");

    const items = document.querySelectorAll(".item")

    items.forEach((item) => {
        console.log(item);
    })


    //MODIFY THINGS FROM DOM
    const ul = document.querySelector(".items")
    //ul.remove()
    //ul.lastElementChild.remove() remove the last child of the element
    ul.firstElementChild.textContent = "TEST1"
    ul.children[1].innerText = "TEST2"
    ul.lastElementChild.innerHTML = "<h2>TEST3</h2>"

    const btn = document.querySelector(".btn")
    btn.style.background = "red"
    btn.style.fontSize = "30px"

    btn.addEventListener("click", (e) => {
        e.preventDefault()
        console.log(e);
        console.log(e.target);
        console.log(e.target.className);
        document.querySelector("#my-form").style.background = "green"
        document.querySelector("body").classList.add("bg-dark")
    })

}
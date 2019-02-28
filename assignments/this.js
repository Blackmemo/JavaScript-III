/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Implicit Binding
    - Whatever object is to the left of the "." when calling
    is what "this" will refer to.

* 2. Explicit Binding
    - Whenever you see/use the call or apply method, it is
    explicitly defined.

* 3. New Binding
    - Using a constructor function "this" will refer to
    the object that is created, using the "new" keyword.

* 4. Window Binding
    - Using "this" in the global scope, this will return   
    the window/console object.



*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Implicit Binding
const implicitbinding = {
name: 'Implicit-binding',
age: 'today',
message: function(){
  return `Here is an example of ${this.name} that i made ${this.age}.`
}
}

//Implicitbinding being left of the "."
console.log(implicitbinding.message());


// Principle 2
// code example for Explicit Binding
const example = {
    name: 'John'
}

const activities = ["hiking", 'coding', 'running'];

function hello(activities1, activities2, activities3) {
return `My name is ${this.name} and these are my favorite activities ${activities1}, ${activities2}, ${activities3}`
}

console.log(hello.apply(example, activities));
//console.log(hello.call(example, activities))

// Principle 3
// code example for New Binding

function NewBinding(message, name) {
this.name = name;
this.message = message;
this.say = function(){
    return `${this.name} has a message for you: ${this.message}.`
}
}

test = new NewBinding('Hello', 'Number1');
test2 = new NewBinding('These are examples', 'Number2')
console.log(test.say());
console.log(test2.say())

// Principle 4
// code example for Window Binding

function window() {
    console.log(this);
}

//window();

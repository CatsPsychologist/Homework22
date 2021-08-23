'use strict'
// Метод bind() создаёт новую функцию, которая при вызове устанавливает в качестве
// контекста выполнения this предоставленное значение.
//
// let someObj = {
//     firstName: 'Ihor',
//     lastName: 'Cat'
// }
//
// function example(a, b) {
//     console.log(this, a, b);
// }
//
// const exampleWithContext = example.bind(someObj, 'string1', 'string2');
//
// console.log(exampleWithContext, typeof(exampleWithContext))
//
// exampleWithContext();
// example();
// //
// console.log(exampleWithContext === example)



let someObj = {
    firstName: 'Ihor',
    lastName: 'Cat'
}
function example(a, b) {
    console.log(this, a, b);
}

function bind(fn, context, ...rest){
    return function (){
        return fn.call(context, ...rest)
    }
}

const exampleWithContext = example.bind(someObj, '2', '3');

console.log(exampleWithContext())

// example(2,3)

// let a = this;
//
// console.log(a)
//
// function thisOne(){
//     console.log(this)
// }
//
// thisOne();
//
// function example(a, b) {
//     console.log(this, a, b);
// }
//
// console.log(example(2, 3));

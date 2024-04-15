#! /usr/bin/env node
//Task # 36
// T-shirt write a function called make_shirt() that accepts a size and the text of a message that shouldbe printed on the shirt.
// The function should print a sentence summarizing the size of the shirt and the message printed on it. call the function.
function makeShirt(size, text) {
    console.log(`You order a ${size} shirt that says ${text}`);
}
makeShirt('large', '"I love typescript"');
makeShirt('medium', '"I need a big shirt"');
export {};

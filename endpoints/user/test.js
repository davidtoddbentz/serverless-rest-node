class Test{
    constructor(create, post, update, patch, delet){
        console.log("hoh");

    }
}

class Greeting extends Test {

    constructor(create, post, update, patch, delet){
        super(create, post, update, patch, delet);
    }

    greet() {
        return "hi";
    }
}


exports.handler = (event, context, callback) => {

    var a = new Greeting();
    callback(null, a.greet());

}

// var a = new Greeting('a','b','c','d');
// console.log(a.greet());

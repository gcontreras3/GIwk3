console.log("Hello");

/* HARD: Data security exercise. Inside of a closure, create an object called pii (Personally Identifiable Information)that cannot be accessed directly. The object should have at least two properties: name and ssn. Only the name property should be accessible, and it should be called through a public function. The ssn property should not be accessible at all.
Creating private objects and private properties helps you control who has access to what data and helps you prevent people who shouldn't see important info like social security numbers from getting access to the data.
You can use 'getName' or other get methods to access data that people might need. For example, people addressing a package or email may need a customer's name, but they definitely shouldn't have access to their ssn. */

let secure = (function() {
    let ssn = function (){console.log("123-45-6789");}

    let pii = {
        name: "Jerry Contreras",
        accessGranted: function (phrase) {
            if(phrase === "Password"){
                ssn();
            } else {
                console.log("Wrong password")
            }
        } 
    }
    return {
        pii: pii,
    };
})();
// secure.pii.accessGranted("Password")
console.log(secure.pii.name)
secure.pii.accessGranted("Password")
// secure.pii.accessGranted("Hello world")
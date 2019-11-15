var myApp = function() {

    console.log("Hello from external js file.");

    /* This is a comment */
    console.log("Hello again");
    
    let x = 1;
    //x = 'Katze';
    //x = true;
    x = 1.1;
    
    x = new Date();
    console.log("x:",  x);
    console.log("datatype:",  typeof x);
    
    let myFunction = function() {
        console.log("Hi, I am a function!");
        return "function called!";
    }
    
    x = {
        name : 'Bello',
        species: 'dog',
        age: 4,
        birthday: new Date(),
        goodBoy: false,
        adress: {
            city: "Ravensburg",
            street: 'Marienplatz2'
        },
        bellosFunction: myFunction
    }
    x.favoritFood = "beef";
    
    let y = new Object();
    y.course = "Web-Development";
    y.location = "MP 312";
    
    console.log("console:", console);
    console.log("bello is from:", x.adress.city);
    
    let X; // <- undefined
    
    let myArray = ['Mom', 'Dad', 1, false, x, console];
    myArray.push('Pushed!');
    console.log(myArray);
    
    
    console.log(myFunction);
    console.log("bellos function: ", x.bellosFunction())
    
    
    let sayHi = function(name, lastname) {
        if (lastname == 'Norris') {
            console.log("Ohoh!");
        } else if (name){
            console.log("Hi, ", name);
        } else if (lastname && name){
            console.log("Hi, ", name, lastname);
        } else if (lastname){
            console.log("Hi, ", lastname);
        }
    }
    
    let functionWithScope = function() {
        for (var i = 0; i < 10; i++){
            sayHi(i, "Müller");
        }
    }
    functionWithScope();
    
    for (let j = 0; j < 10; j++){
        sayHi(j, "Müller");
    }
    
    //console.log(j);
    
    function Student(name, age) {
        this.name = name;
        this.age = age;
    }

    let student1 = new Student("Test", 1);
    student1.lastname = 'Müller';
    
    
    //myFunction();
}
myApp();






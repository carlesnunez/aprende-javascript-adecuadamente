//1
var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-777",
    email: "bob.jones@example.com"
};

console.log(bob.firstName);
console.log(bob.lastName);
console.log(bob.email);

//2
var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};

var mary = {
    firstName : "Mary",
    lastName : "Johnson",
    phoneNumber : "(650) 888 - 8888",
    email : "mary.johnson@example.com"
};

var contacts = [bob, mary];

console.log(contacts[1].phoneNumber);

//3
var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};

var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"
};

var contacts = [bob, mary];

// printPerson added here
var printPerson = function PrintPerson(person){
    console.log(person.firstName + " " + person.lastName);
};

printPerson(contacts[0]);

printPerson(contacts[1]);

//4
var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};

var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"
};

var contacts = [bob, mary];

function printPerson(person) {
    console.log(person.firstName + " " + person.lastName);
}

var list = function list(){
    var contactsLength = contacts.length;
    
    for(var i = 0; i < contactsLength ; i++){
        printPerson(contacts[i]);    
    }
};


list();

//5
var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};

var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"
};

var contacts = [bob, mary];

function printPerson(person) {
    console.log(person.firstName + " " + person.lastName);
}

function list() {
	var contactsLength = contacts.length;
	for (var i = 0; i < contactsLength; i++) {
		printPerson(contacts[i]);
	}
}

/*Create a search function
then call it passing "Jones"*/
var search = function search(lastName){
    var contactsLength = contacts.length;
    for (var i = 0; i < contactsLength; i++) {
        if(contacts[i].lastName === lastName){
		    printPerson(contacts[i]);
        }
	}
};

search("Jones");

//6
var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};

var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"
};

var contacts = [bob, mary];

function printPerson(person) {
    console.log(person.firstName + " " + person.lastName);
}

function list() {
	var contactsLength = contacts.length;
	for (var i = 0; i < contactsLength; i++) {
		printPerson(contacts[i]);
	}
}

/*Create a search function
then call it passing "Jones"*/
var search = function search(lastName){
    var contactsLength = contacts.length;
    for (var i = 0; i < contactsLength; i++) {
        if(contacts[i].lastName === lastName){
		    printPerson(contacts[i]);
        }
	}
};

var add = function add(firstName, lastName, email, phoneNumber){
    var newContact = {
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
        email: email
    };
    
    contacts.push(newContact);
}
add("Carles", "Núñez", "carles.nunez@hotmail.es", "93-850-99-20");

list();


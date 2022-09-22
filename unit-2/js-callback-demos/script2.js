// // Option 1 (not the best way, but appears in the wild)
 /*window.onclick = () => {
    console.log('Window clicked')
 };*/

// // Option 2 (the best way)
// const button = document.querySelector('.action-button');
// button.addEventListener('click', (event) => {
//     event.stopPropagation();
//     console.log('Button clicked event: ', event);
// });

function printHelloName(fname, lname, callback) {
    console.log("Hello"+" "+callback(fname, lname));
    ;
}

function printName(fname, lname) {
    return fname + " " + lname;
}

printHelloName('Ankur', 'Bag', printName);


// Button click example
let inlineClickfn = () => {
    console.log('I have clicked inline')
}

document.querySelector('.action-button__on').onclick = () =>{
    console.log('I have clicked by ON button');
};


const button = document.querySelector('.action-button__event');

button.addEventListener("click", () => {
    console.log(`Button clicked by add listener!`);
});


// Input field example
const inputEl = document.querySelector('.input-field');

inputEl.addEventListener("input", (event) => {
    console.log(event.target.value);
});


// Form submit example, with named event handler
const formEl = document.querySelector('#my-form');

const handleSubmit = (event) => {
    // event.preventDefault();
    
    const firstName = event.target.firstname.value;
    const lastName = event.target.lastname.value;
    
    const myNameEl = document.querySelector('#my-name');
    myNameEl.innerText = firstName + " " + lastName;

    //event.target.reset();

    //formEl.removeEventListener("submit", handleSubmit);
};

formEl.addEventListener("submit", handleSubmit);

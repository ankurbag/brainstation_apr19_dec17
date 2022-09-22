# JS Event Handling and Async

## Agenda

- Callback --> Calling Function back from another
    - Synchronous Callback
      Example : 
     // Example 1
      function add(num1, num2) {
        return num1 + num2;
      }

      function subtract(num1, num2) {
        return num1 - num2;
      }

      function multiply(num1, num2) {
        return num1 * num2;
      }

      function operation(num1, num2) {
        let result;
        // add
        result = add(num1, num2); // 15
        
        // subtract
        result = subtract(result, num2); //15,10 // 5
        
        // multiply
        result = multiply(result, num2); //5 10 // 50
        
        // return the result
        return result;
      }

      console.log(operation(5, 10)); // 50

      // Example 1 version 2

     function add(num1, num2) {
        return num1+num2;
     }

     function subtract(num1, num2) {
        return num1 - num2;
      }

      function multiply(num1, num2) {
        return num1 * num2;
      }

     function operation(num1, num2, callbackFn) {
        
        // return the result
        result = callbackFn(num1, num2); // add(num1, num2)
        
        // subtract
        result =  operation(5, 10 , subtract); //
        
        // multiply
        result =  operation(5, 10 , multiply); //
       
        return result;
      }
      
      operation(5, 10 , add);

    - Asynchronous Callback
     - Asynchronous : Functions running in parallel with other functions are called asynchronous
      --> Programming
      --> DrinkingCoffee
     - Async Callback are functions being called parllely from another function
       - File Download
       - API calls
       - Read and Write operations
       - Screen Savers

     - Example 1: Paul's WorkDay
       function programming() {
         console.log("I m programming!");
       }
       function drinkingCoffee() {
         console.log("I m drinking coffee!");
       }
       // TIme : 10 am
       setTimeout(programming, 2000); 10.02
       setTimeout(drinkingCoffee, 5000);10.05
       ---- STOP --- 
       setTimeout(programming, 2000);
       setTimeout(drinkingCoffee, 5000);
    
    - What is Event Handlers?
- Events (An Implementation of Asynchronous Callbacks)
    - What is an Event? Event is a Trigger or interaction(DOM)
      - Interface in HTML DOM API :  Event
    - Browser Events
        - Examples : 


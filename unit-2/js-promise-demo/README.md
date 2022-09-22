# Promises Image Demo

Promises are often used when waiting for a request like fetching data to complete. 
Since we haven't learned about fetching data with axios yet, this demo shows another use case of promises. 

There are two function calls at the bottom of the `main.js` file. The first function being called is `appendImagesWithPromise();` which only appends images after they have been completely loaded/downloaded from a url. The second function call `appendImages();` is not waiting and just appending images right away, and the images slowly complete downloading after. Try commenting out one of the function calls at a time to observer the difference.
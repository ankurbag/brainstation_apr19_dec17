import React, { useState, useEffect } from 'react';

function HooksDemo() {
  // Set State Using Hooks
  const [count, setCount] = useState(0);
  

  // Implement LifeCycle methods using Hooks
  // Similar to componentDidMount and componentDidUpdate:
   useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <h2>Hooks Demo</h2>
      <main>
        The count is {count}
      </main>
      <button onClick={ () => setCount(count+1)}>Increment Count</button>
    </div>
  );
}

export default HooksDemo;

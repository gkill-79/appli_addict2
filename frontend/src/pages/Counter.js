


import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <div className="counter">
        <h2>Compteur : {count}</h2>
        <button onClick={() => setCount(count + 1)}>Incrémenter</button>
        <button onClick={() => setCount(count - 1)}>Décrémenter</button>
      </div>
    </div>
  );
};

export default Counter;






















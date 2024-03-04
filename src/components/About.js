import { useEffect, useState } from "react";

export default function About() {
  const [count, setCount] = useState(0);
  const [x, setX] = useState(0);

  useEffect(() => {
    console.log("welcome");
  }, [count]);

  return (
    <div>
      <h1>the value of count is {count}</h1>
      <h1>the value of x is {x}</h1>
      <button onClick={() => setCount(count + 1)}>increment count </button>

      <button onClick={() => setX(x + 1)}>increment x</button>
    </div>
  );
}

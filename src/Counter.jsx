import { useState } from "react";

export function Counter() {
  const [Count, setCount] = useState(11);

  function addClick() {
if(Count<15){

        const newCount = Count + 1;
    setCount(newCount);
}
  }

  function dicClick() {
    if (Count > 0) {
      const newCount = Count-1;
      setCount(newCount);
    }
  }

  return (
    <>
      <h3>Count : {Count}</h3>

      <button onClick={addClick}> Add</button>

      <button onClick={dicClick}> dic</button>
    </>
  );
}

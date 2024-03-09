import React, { useState } from "react";

const Count = () => {
  const [count, setCount] = useState<number>(0);

  const handleAdd = () => {
    setCount((prev) => prev + 1);
  };

  const handleRemove = () => {
    setCount((prev) => prev - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="count">
      <div className="counting">
        <h2> {count}</h2>
      </div>
      <button onClick={handleRemove}>Remove</button>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Count;

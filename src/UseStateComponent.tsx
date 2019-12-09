import React, { useState } from "react";

export function UseStateComponent() {
  const [count, setCount] = useState(0);
  return (
    <div style={{ border: "solid 1px #ccc", float: "left", padding: 20 }}>
      <div>UseStateComponent</div>
      <div>{count}</div>
      <input type="button" onClick={() => setCount(count + 1)} value="加" />
      <input type="button" onClick={() => setCount(count - 1)} value="减" />
    </div>
  );
}

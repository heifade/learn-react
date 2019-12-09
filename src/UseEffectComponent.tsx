import React, { useEffect, useState } from "react";

export function UseEffectComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(count + 1);

    return () => {
      console.log("UseEffectComponent will unload");
    };
  }, []);

  return (
    <div style={{ border: "solid 1px #ccc", float: "left", padding: 20 }}>
      <div>UseEffectComponent</div>
      <div>{count}</div>
      <input type="button" onClick={() => setCount(count + 1)} value="加" />
      <input type="button" onClick={() => setCount(count - 1)} value="减" />
    </div>
  );
}

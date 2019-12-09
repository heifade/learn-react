import React, { useReducer } from "react";

function reducer(
  state: { num: number },
  action: { type: string; payload: any }
): { num: number } {
  switch (action.type) {
    case "add": {
      return {
        num: state.num + action.payload
      };
    }
    case "reduce":
    default: {
      return {
        num: state.num - action.payload
      };
    }
  }
}

export function UseReducerComponent() {
  const [state, dispatch] = useReducer(reducer, { num: 0 });
  return (
    <div style={{ border: "solid 1px #ccc", float: "left", padding: 20 }}>
      <div>UseReducerComponent</div>
      <div>{state.num}</div>
      <input
        type="button"
        onClick={() => dispatch({ type: "add", payload: 1 })}
        value="加"
      />
      <input
        type="button"
        onClick={() => dispatch({ type: "reduce", payload: 1 })}
        value="减"
      />
    </div>
  );
}

import React, { useState } from "react";
import styled from "styled-components";

const Box = styled.div`
  width: 50%;
  border: 1px solid gray;
  padding: 15px;
  margin: 20px auto;
`;

function Counter({ initialCount }) {
  const [count, setCount] = useState(initialCount);
  return (
    <Box>
      <h3>Count: {count}</h3>
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
    </Box>
  );
}

export default function App() {
  return <Counter initialCount={0} />;
}

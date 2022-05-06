import React, { useState, useRef, useCallback } from 'react';
import './style.css';

export default function App() {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(10000);

  let countRef = useRef(0);

  const incrementage = useCallback(() => {
    setAge((prev) => prev + 1);
  }, [age]);
  const incrementsalary = useCallback(() => {
    setSalary((prev) => prev + 10000);
  }, [salary]);
  return (
    <div>
      {/* {console.log(countRef.current++)} */}
      {/* {count} */}
      {/* <button onClick={clickEvent}>click</button> */}
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <Child text="age" count={age} />
      <Button clickEvent={incrementage}>Age</Button>
      <Child text="salary" count={salary} />
      <Button clickEvent={incrementsalary}>salary</Button>
    </div>
  );
}

export const Child = React.memo(({ text, count }) => {
  let countRef = useRef(0);

  return (
    <div>
      {text} {count}
      {console.log(text, countRef.current++)}
    </div>
  );
});

export const Button = React.memo(({ clickEvent, children }) => {
  return <button onClick={clickEvent}>{children}</button>;
});

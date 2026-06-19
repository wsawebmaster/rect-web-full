import { createContext, useContext, useState } from "react";

const CounterContext = createContext();

function CounterContextProvider({ children }) {
  const [counter, setCounter] = useState(0);
  const [counterHistory, setCounterHistory] = useState([]);

  return (<CounterContext.Provider value={{ 
    counter, setCounter, counterHistory, setCounterHistory 
  }}>
    {children}
  </CounterContext.Provider>);
}

export function Counter() {
  return <CounterContextProvider>
    <CounterArea />
    <CounterHistoryList />
    <CounterIncrementButton />;
  </CounterContextProvider>;
}

function CounterArea() {
  const { counter } = useContext(CounterContext);
  return <span>{counter}</span>;
}

function CounterIncrementButton() {
  const { 
    setCounter, 
    counter, 
    counterHistory, 
    setCounterHistory 
  } = useContext(CounterContext); 

  function increment() {
    setCounterHistory([...counterHistory, counter]);
    setCounter(counter + 1);
  }
  
  return <button 
    onClick={increment}>
      +1
    </button>;
  }

function CounterHistoryList() {
  const { counterHistory } = useContext(CounterContext);

  return <ul>
      {counterHistory.map( i => <li key={i}>
        {i}
      </li>)}
    </ul>;
}
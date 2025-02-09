// import { useState } from 'react';
// import ChildComponent from './ChildComponent';

// const ParentComponent = () => {
//  const [count, setCount] = useState(0);

//  return (
//    <>
//      <div className="text-center mt-3">
//        <h2 className="text-3xl">Parent Component</h2>
//        <small>Not using the count state</small>
//      </div>


//      <ChildComponent count={count} setCount={setCount} />
//    </>
//  );
// };

import { useState, createContext } from "react";
import ChildComponent from "./ChildComponent";

const UserContext = createContext();

function ParentComponent() {
    const [user, setUser] = useState("Jesse Hall");

    return (
        <UserContext.Provider value={user}>
      <h1>{`Hello ${user}!`}</h1>
      <Component2 />
    </UserContext.Provider>
  );
}

function Component2() {
    return (
        <>
      <h1>Component 2</h1>
      <Component3 />
    </>
  );
}

function Component3() {
    return (
        <>
      <h1>Component 3</h1>
      <Component4 />
    </>
  );
}

function Component4() {
    return (
        <>
      <h1>Component 4</h1>
      <ChildComponent />
    </>
  );
}


export default ParentComponent;




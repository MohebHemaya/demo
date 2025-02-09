// /* eslint-disable react/prop-types */
// import GrandChildComponent from "./GrandchildComponent";

// const ChildComponent = ({ count, setCount }) => {
//  return (
//    <>
//      <div className="text-center mt-3">
//        <h2 className="text-3xl">Child Component</h2>
//        <small>Not Using the count state too</small>
//      </div>

//      <GrandChildComponent count={count} setCount={setCount} />
//    </>
//  );
// };
import { useContext } from "react";
import * as  UserContext  from "./ParentComponent"
function ChildComponent() {
    const user = useContext(UserContext);
    
    return (
        <>
      <h1>Component 5</h1>
      <h2>{`Hello ${user} again!`}</h2>
    </>
  );
}
export default ChildComponent;
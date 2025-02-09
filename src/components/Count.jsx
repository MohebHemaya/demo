import { useState } from "react";

const Count = () => {
    const [count, setCount] = useState(0);
    const [username, setUsername] = useState("");
    return (
        <>
            <h1>Count  is : {count} </h1>
            <button onClick={() => setCount(count + 1)}>Increament</button>
            <button onClick={() => setCount(count - 1)}>Decreament</button>

            <input type="text" placeholder="insert username" onChange={(e) => setUsername(e.target.value)} />
            <p>Your name is : {username} </p>
        </>
    );
}

export default Count; 
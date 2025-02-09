import axios from "axios";
import { useState } from "react";

const Store = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");


    async function saveUser(userData) {
        const { status } = await axios.post("http://localhost:8000/users", userData);
        if (status === 201) {
            setUsername("");
            setEmail("");
            alert("user has been successfully");
        }

    }
    return (
        <>

            <div className="text-center bg-red-950 ">
                <h1>Store User</h1>
                <div className="grid grid-rows-3 grid-flow-col gap-4">

                <input type="text" placeholder="insert name" value={username} onChange={(e) => setUsername(e.target.value)} className=""/>
                <input type="email" placeholder="insert email" value={email} onChange={(e) => setEmail(e.target.value)} className=""/>
                <button onClick={() => saveUser({"name": username, "email": email})}>Save</button>
                </div>
            </div>
        </>
    )
}

export default Store;
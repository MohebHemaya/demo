import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";

const Update = () => {
    const [user, setUser] = useState({});
    async function updateUser({ id } = useParams()) {
        const { data } = await axios.get(`http://localhost:8000/users/${id}`)
        setUser(data);
    }

    updateUser();
    return (
        <>
            <h1>Update user</h1>
            <input type="text" value={user.name}  />
            <input type="text" value={user.email} />
        </>
    );
}

export default Update
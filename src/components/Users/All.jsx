import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const All = () => {
    const [users, setUsers] = useState([]);

    async function getUsers() {
        const { data } = await axios.get("http://localhost:8000/users");
        setUsers(data);
    }
    useEffect(() => {
        getUsers();
    }, []);
    async function deleteUser(id) {
        const { status } = await axios.delete(`http://localhost:8000/users/${id}`);

        if (status === 200) {
            alert("user has been deleted");
            getUsers(); //Bravo ya Abdo 
        }

    }

    return (
        <>
            <h1 className=" text-center bg-zinc-950">Users</h1>
            {users.map((user) => {
                return (
                    <div key={user.id} className="flex  flex-col text-center content-center ">
                        <h1 className="bg-red-700 font-black ">{user.name}</h1>
                        <Link to={`/users/${user.id}`} className="btn bg-slate-200 flex-auto  ">View</Link>
                        <Link to={`/users/${user.id}/edit`} className="btn bg-amber-600 flex-auto">Update</Link>
                        <button onClick={() => deleteUser(user.id)} className=" flex-auto ">Delete</button>
                    </div>
                );
            })}

        </>)
}

export default All;
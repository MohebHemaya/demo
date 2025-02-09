import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
const Show = () => {
    const [show, setShow] = useState([]);
    async function showUser(  { id } = useParams() ) {
        const { data } = await axios.get(`http://localhost:8000/users/${id}`)
        setShow(data);
    }
    showUser();


    return (
        <>
            <h1>Show user</h1>
            <div>
                <h1>{show.id}</h1>
                <h1>{show.name}</h1>
                <h1>{show.email}</h1>
            </div>

        </>
    );
}
export default Show;
import { useLoaderData } from "react-router-dom";
import User from "../User/User";

const Users = () => {
    //state-->data
    //state-->loader
    //use effect
    //fetch-->state set -->set state
    const users=useLoaderData();
 
    return (
        <div>
            <h2>Our Users:{users.length}</h2>
            <p>Fantastic and Vodro Users</p>
            <div className="grid grid-cols-3 gap-10">
            {
                users.map(user=><User key={user.id} user={user}></User>)
            }
            </div>
           
        </div>
    );
};

export default Users;
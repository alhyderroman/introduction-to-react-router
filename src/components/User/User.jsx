import { Link } from "react-router-dom";

const User = ({ user }) => {
    const { id, name, email, phone } = user;

    return (


        <div className=" border-2 bg-[green] shadow-xl rounded-2xl gap-10 w-80 h-32 text-white text-center pt-7">
            <h2 >Name:{name}</h2>

            <p>Email:{email}</p>
            <p>Phone:{phone}</p>
            <Link to={`/user/${id}`}>Show Details</Link>
            <Link to={`/user/${id}`}><button>Click Me</button></Link>
        </div>







    );
};

export default User;
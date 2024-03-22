import { Link, useNavigate } from "react-router-dom";

const Post = ({post}) => {
    const {id,title}=post;

    const navigate=useNavigate();

    const handleShowDtail=()=>{
        navigate(`/post/${id}`);

    }
    return (
        <div className="border-2 bg-[green] shadow-xl rounded-2xl gap-10 w-80 h-32 text-white text-center pt-7">
            <h4>Post Id:{id}</h4>
            <p>{title}</p>
            <Link to={`/post/${id}`}>Post Detail</Link>
            <Link to={`/post/${id}`}><button>Show Details</button></Link>
            <button onClick={handleShowDtail}>Click to see details</button>
            
        </div>
    );
};

export default Post;
import { useLoaderData, useNavigate } from "react-router-dom";


const CommentShow = () => {
    const comments = useLoaderData();
    const navigate = useNavigate();

    const handelGoBack = ()=>{
        navigate(-1)
    }


    const {body, id} = comments;
    console.log(comments);
    return (
        <div>
            <h1>comment id {id}</h1>
            <h3>{body}</h3>
            <button onClick={handelGoBack}>Go Back</button>
        </div>
    );
};

export default CommentShow;
import { useLoaderData } from "react-router-dom";


const CommentShow = () => {
    const comments = useLoaderData()
    const {body, id} = comments;
    console.log(comments);
    return (
        <div>
            <h1>comment id {id}</h1>
            <h3>{body}</h3>
        </div>
    );
};

export default CommentShow;
import { useLoaderData } from "react-router-dom";
import Comment from "../Comment/Comment";
import './Comments.css'


const Comments = () => {
    const userComments = useLoaderData();
    console.log(userComments);

    return (
        <div>
            <h1>Total Comments Are: {userComments.length}</h1>
            <div className="comments-style">
                {
                    userComments.map(comment => <Comment key={comment.id} comment={comment}></Comment> )
                }
            </div>
        </div>
    );
};

export default Comments;
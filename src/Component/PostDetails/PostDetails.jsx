import { useLoaderData, useParams } from "react-router-dom";


const PostDetails = () => {
    const post = useLoaderData();
    const {postId} = useParams()
    console.log(postId);
    
    const { id, title, body} = post;
    return (
        <div>
            <h1>hello post for my user {id}</h1>
            <h4>title:{title}</h4>
            <p>{body}</p>
        </div>
    );
};

export default PostDetails;
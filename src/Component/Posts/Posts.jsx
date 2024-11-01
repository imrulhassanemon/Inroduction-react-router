import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";
import './Posts.css'


const Posts = () => {
    const userPost = useLoaderData();
    // const {id, title, body} = userPost;
    return (
        <div>
            <h1>Post {userPost.length} </h1>
            <div className="post" >
                {
                    userPost.map(post => <Post post={post} key={post.id}></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;
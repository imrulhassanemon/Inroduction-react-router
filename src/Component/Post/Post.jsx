import { Link } from "react-router-dom";


const Post = ({post}) => {
    const {id, title, body} = post;
    const userPostStyle = {
        border:'2px solid green',
        padding:'5px',
        margin:'10px',
        borderRadius: '15px'
    }
    return (
        <div style={userPostStyle}>
            <h1>my Id {id}</h1>
            <p>Tile{title}</p>
            <Link to={`/post/${id}`}>
            <button>Click me to see post</button>
            </Link>
        </div>
    );
};

export default Post;
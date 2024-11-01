import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const Post = ({post}) => {
    const {id, title} = post;
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
Post.propTypes = {
    post: PropTypes.object
}


export default Post;
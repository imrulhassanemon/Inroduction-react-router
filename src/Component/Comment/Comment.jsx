import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Comment = ({comment}) => {
    const {id, name, email} = comment;
    const userPostStyle = {
        border:'2px solid green',
        padding:'5px',
        margin:'10px',
        borderRadius: '15px'
    }
    return (
        <div style={userPostStyle}>
            <h3>My id is {id}</h3>
            <h4>{name}</h4>
            <h5>{email}</h5>
            
            <Link to={`/comment/${id}`}> <button>Click me to see body</button></Link>
        </div>
    );
};

Comment.propTypes = {
    comment: PropTypes.object
}

export default Comment;
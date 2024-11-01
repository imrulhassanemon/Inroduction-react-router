import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';




const Comment = ({comment}) => {
    const navigates = useNavigate()
    const {id, name, email} = comment;
    const userPostStyle = {
        border:'2px solid green',
        padding:'5px',
        margin:'10px',
        borderRadius: '15px'
    }
    const handelClickBtn = ()=>{
        navigates(`/comment/${id}`)
    }
    return (
        <div style={userPostStyle}>
            <h3>My id is {id}</h3>
            <h4>{name}</h4>
            <h5>{email}</h5>
            <button onClick={handelClickBtn}>Click me to see body</button>
            {/* <Link to={`/comment/${id}`}> <button>Click me to see body</button></Link> */}
        </div>
    );
};

Comment.propTypes = {
    comment: PropTypes.object
}

export default Comment;
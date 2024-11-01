

const User = ({user}) => {
    const {id, name, email, phone} = user;
    const userStyle = {
        border:'2px solid yellow',
        padding:'10px',
        borderRadius: '20px',
        margin: '20px'
    }
    return (
        <div style={userStyle}>

            <h2>{name}</h2>
            <p>{id}</p>
            <p>{email}</p>
            <p>{phone}</p>
        </div>
    );
};

export default User;
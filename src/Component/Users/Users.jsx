import { useLoaderData } from "react-router-dom";
import User from "../User.jsx/User";
import './Users.css'

const Users = () => {


    const users = useLoaderData()
    

    return (
        <div >
            <h1>Our users is {users.length}  </h1>
            <p>hello users</p>
            <div className="border users">
                {
                    users.map(user => <User user={user} key={user.id}></User>)
                }
            </div>
        </div>
    );
};

export default Users;
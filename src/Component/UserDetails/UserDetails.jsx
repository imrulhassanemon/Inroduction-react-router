import { useLoaderData } from "react-router-dom";


const UserDetails = () => {
    const user = useLoaderData();
    console.log(user);
    const {name} = user;
    return (
        <div>
            <h1>hello, My name is {name}</h1>
        </div>
    );
};

export default UserDetails;
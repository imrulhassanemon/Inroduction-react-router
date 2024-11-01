import { Link, useRouteError } from "react-router-dom";


const Error = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <div>
            <h1>Opps!</h1>
            <h3>{error.statusText || error.data}</h3>
            {
                error.status === 404 && 
                <div>
                    <h3>Page not found</h3>
                    <p>Go back where you form</p>
                    <Link to={'/'}> <button>Go Back</button></Link>
                </div>
            }
        </div>
    );
};

export default Error;
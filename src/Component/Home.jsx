import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { Rings } from "react-loader-spinner";


const Home = () => {
    const navigation = useNavigation();
    const location = useLocation();
    console.log(location)
    return (
        <div>
            <Header></Header>
            {
                navigation.state === 'loading'?   (<Rings
                    visible={true}
                    height="80"
                    width="80"
                    color="#4fa94d"
                    ariaLabel="rings-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    />):<Outlet></Outlet>
            }
            {/* <Outlet></Outlet> */}
            <Footer></Footer>
        </div>
    );
};

export default Home;
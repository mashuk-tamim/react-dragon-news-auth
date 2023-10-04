import { useParams } from "react-router-dom";
import Header from "../Home/Shared/Header/Header";
import Navbar from "../Home/Shared/Navbar/Navbar";


const NewsDetails = () => {
    const {id} = useParams();
    // console.log(id);

    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <h2>News details here....</h2>
            <p>{id}</p>

        </div>
    );
};

export default NewsDetails;
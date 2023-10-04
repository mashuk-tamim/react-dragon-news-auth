import { useLoaderData } from "react-router-dom";
import NewsContainer from "../../components/NewsContainer/NewsContainer";
import BreakingNews from "./BreakingNews";
import Header from "./Shared/Header/Header";
import LeftNav from "./Shared/LeftNav/LeftNav";
import Navbar from "./Shared/Navbar/Navbar";
import RightNav from "./Shared/RightNav/RightNav";


const Home = () => {
    const allNews = useLoaderData();
    console.log(allNews)

    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
                <div className="">
                    <LeftNav></LeftNav>
                </div>
                <div className="md:col-span-2 ">
                   {
                    allNews?.map(news => <NewsContainer news={news} key={news._id}></NewsContainer>)
                   }
                </div>
                <div className="">
                    <RightNav></RightNav>
                </div>
            </div>
        </div>
    );
};

export default Home;
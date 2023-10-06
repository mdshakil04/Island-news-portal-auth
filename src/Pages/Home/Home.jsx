import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header/Header";
import LeftSideContent from "../Shared/LeftSideContent/LeftSideContent";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideContent from "../Shared/RightSideContent/RightSideContent";
import BreakingNews from "./BreakingNews";
import NewsCard from "./NewsCard";

const Home = () => {
    const news = useLoaderData();
    // console.log(news)
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className=" border">
                    <LeftSideContent></LeftSideContent>
                </div>
                {/* News Container */}
                <div className=" md:col-span-2 border">
                    {
                        news.map(aNews => <NewsCard id={aNews.id} news={aNews}></NewsCard>)
                    }

                </div>
                <div className=" border">
                    <RightSideContent></RightSideContent>
                </div>
            </div>
        </div>
    );
};

export default Home;
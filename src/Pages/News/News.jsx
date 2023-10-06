import { useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import RightSideContent from "../Shared/RightSideContent/RightSideContent";
import Navbar from "../Shared/Navbar/Navbar";

const News = () => {
    const {id} = useParams();
    return (
        <div className=" container mx-auto">
            <Header></Header>
            <Navbar></Navbar>
            <div className=" grid md:grid-cols-4">
                <div className=" col-span-3">
                    <h2 className="text-5xl">News Details here</h2>
                    <p>{id}</p>
                </div>
                <div>
                    <RightSideContent></RightSideContent>
                </div>
            </div>
        </div>
    );
};

export default News;
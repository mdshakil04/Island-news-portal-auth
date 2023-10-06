import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import image1 from '../../../assets/1.png';
import image2 from '../../../assets/2.png';
import image3 from '../../../assets/3.png';

const LeftSideContent = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() =>{
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    }, [])

    return (
        <div className=" p-4">
            <h2 className="lg:text-2xl text-xl font-bold rounded-lg border-2 p-2">All Categories</h2>
            {
                categories.map(category => <Link 
                    className=" block my-2 px-2 font-semibold lg:text-lg"
                    to={`/category/${category.id}`}
                    key={category.id}
                    >{category.name}</Link>)
            }
            <div>
                <div className=" mb-4 p-2">
                    <img src={image1} alt="" />
                    <h2 className="lg:text-lg">Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
                    <div className=" grid grid-cols-2">
                        <p className=" font-bold">Sports</p>
                        <span>Jan 4, 2023</span>
                    </div>
                </div>
                <div className=" mb-4 p-2">
                    <img src={image2} alt="" />
                    <h2 className="lg:text-lg">Bayern Slams Authorities Over Flight Delay to Club World Cup</h2> 
                    <div className=" grid grid-cols-2">
                        <p className=" font-bold">Sports</p>
                        <span>Jan 4, 2023</span>
                    </div>
                </div>
                <div className=" mb-4 p-2">
                    <img src={image3} alt="" />
                    <h2 className="lg:text-lg">Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
                    <div className=" grid grid-cols-2">
                        <p className=" font-bold">Sports</p>
                        <span>Jan 4, 2023</span>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default LeftSideContent;
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideContent = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() =>{
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    }, [])

    return (
        <div className=" p-4">
            <h2 className="text-2xl font-bold rounded-lg border-2 p-2 ">All Categories</h2>
            {
                categories.map(category => <Link 
                    className=" block my-2 font-semibold text-lg"
                    to={`/category/${category.id}`}
                    key={category.id}
                    >{category.name}</Link>)
            }
        </div>
    );
};

export default LeftSideContent;
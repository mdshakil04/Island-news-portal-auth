import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const { title, image_url,thumbnail_url, details,_id } = news;
  return (
    <div className=" p-4">
        <h2 className="card-title">{title}</h2>
      <div >
        <figure>
          <img src={image_url} alt="news-image" />
        </figure>
            {
               details.length > 200 
               ? <p>{details.slice(0,200)}<Link to={`/news/${_id}`} className=" text-red-700 font-bold"> Read More....</Link> </p> 
               : <p>{details}</p>
            }
        <hr className="mt-2" />
      </div>
    </div>
  );
};

export default NewsCard;

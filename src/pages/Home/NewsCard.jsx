import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
    const { _id, title, image_url, details } = news;
    return (
        <div className="card bg-base-100 shadow-xl mb-16">
            <h2 className="card-title">{title}</h2>
            <figure><img src={image_url} alt="Shoes" /></figure>
            <div className="card-body">
                {
                    details.length > 200 ?
                        <p>{details.slice(0, 200)} <Link
                            to={`/news/${_id}`}
                            className="text-orange-600 hover:underline font-semibold">Read more...</Link></p> :
                        <p>{details}</p>
                }

            </div>
        </div>
    );
};

export default NewsCard;

import PropTypes from 'prop-types';
import { FaRegBookmark, FaShareAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';

NewsContainer.propTypes = {
    news: PropTypes.object.isRequired,
};

function NewsContainer({ news }) {

    const { image_url, title, details, author: { img, name, published_date }, _id } = news;

    return (
        <div className='mb-10 space-y-5 border border-gray-700'>
            <div className='flex justify-between items-center bg-gray-500 px-4 py-1'>
                <div className='flex gap-5 items-center'>
                    <img className='w-1/12 h-1/2 rounded-full' src={img} alt={name} />
                    <div>
                        <h4>{name}</h4>
                        <p>{published_date?.slice(0, 10)}</p>
                    </div>
                </div>
                <div className='flex gap-3'>
                    <FaRegBookmark></FaRegBookmark>
                    <FaShareAlt></FaShareAlt>
                </div>
            </div>
            <div className='px-2'>
                <img src={image_url} alt={title} />
                <h3 className='font-bold'>{title}</h3>
                <p className='font-light text-sm'>{details.slice(0, 200)}
                    <span>...
                        <Link to={`/news/${_id}`}>
                            <button className='text-orange-400'>Read More</button>
                        </Link>
                    </span>
                </p>
            </div>
        </div>
    );
}

export default NewsContainer;
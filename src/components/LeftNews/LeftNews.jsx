import { MdDateRange } from "react-icons/md";
import PropTypes from 'prop-types';

LeftNews.propTypes = {
    news: PropTypes.object.isRequired,
    categories: PropTypes.object.isRequired,
};

function LeftNews({ news, categories }) {
    // console.log(news, categories)
    const { image_url, title, category_id, author: { published_date } } = news;
    // console.log(image_url, title, category_id, published_date)

    const category = categories.find(category => category.id === category_id);
    console.log(category.name)
    return (
        <div className="text-sm mb-5 space-y-1">
            <img src={image_url} alt={title} />
            <h3>{title.slice(0, 52)}...</h3>
            <div className='lg:flex justify-between'>

                <p>{category.name}</p>
                <div className="flex items-center gap-1">
                    <span><MdDateRange></MdDateRange></span>
                    <p>{published_date.slice(0, 10)}</p>
                </div>
            </div>
        </div>
    );
}

export default LeftNews;
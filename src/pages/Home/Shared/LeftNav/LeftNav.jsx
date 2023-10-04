import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import LeftNews from "../../../../components/LeftNews/LeftNews";


const LeftNav = () => {
    const [categories, setCategories] = useState([]);
    const [allNews, setAllNews] = useState([])

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
        fetch('news.json')
            .then(res => res.json())
            .then(data => setAllNews(data))
    }, [])
    return (
        <div className="space-y-10 p-2">
            <div className="space-y-4">
                <h2 className="text-3xl">All Category</h2>
                {
                    categories.map(category => <NavLink
                        className="block px-3 md:text-lg lg:text-xl font-semibold"
                        key={category.id}
                        to={`/category/${category.id}`}>
                        {category.name}
                    </NavLink>)
                }
            </div>
            <div>
                <h2 className="text-3xl">All news: {allNews.length}</h2>
                {
                    allNews?.slice(0,3).map(news => <LeftNews news={news} categories={categories} key={news._id}></LeftNews>)
                }
            </div>
        </div>
    );
};

export default LeftNav;
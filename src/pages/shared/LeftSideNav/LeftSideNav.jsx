import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('/categories.json')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, [])
    return (
        <div className="space-y-4 p-4">
            <h2 className="text-2xl">All Category</h2>
            {
                categories.map(category => <NavLink
                    key={category.id}
                    className="block ml-4 font-semibold"
                    to={`/category/${category.id}`}
                ><button className="btn btn-ghost">{category.name}</button></NavLink>)
            }
        </div>
    );
};

export default LeftSideNav;
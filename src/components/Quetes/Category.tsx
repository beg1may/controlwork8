import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import axiosApi from './../../axiosApi';

const Category = ({ category }) => {
    const [quotes, setQuotes] = useState([]);

    useEffect(() => {
        const fetchQuotesByCategory = async () => {
            try {
                const response = await axiosApi.get(`/quotes.json?orderBy="category"&equalTo="${category}"`);
                if (response.data) {
                    const fetchedQuotes = Object.values(response.data);
                    setQuotes(fetchedQuotes);
                }
            } catch (error) {
                console.error('Error fetching quotes:', error);
            }
        };

        fetchQuotesByCategory();
    }, [category]);

    return (
        <div className="container-fluid mt-5 mx-5 pt-5">
            <ul className="list-group list-group-flush ">
                <li>
                    <NavLink to="/quotes/add" className="link-body-emphasis">Add</NavLink>
                </li>
                <li>
                    <NavLink to="/quotes/star-wars" className="link-body-emphasis">Star Wars</NavLink>
                </li>
                <li>
                    <NavLink to="/quotes/famous-people" className="link-body-emphasis">Famous people</NavLink>
                </li>
                <li>
                    <NavLink to="/quotes/saying" className="link-body-emphasis">Saying</NavLink>
                </li>
                <li>
                    <NavLink to="/quotes/humour" className="link-body-emphasis">Humour</NavLink>
                </li>
                <li>
                    <NavLink to="/quotes/motivational" className="link-body-emphasis">Motivational</NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Category;

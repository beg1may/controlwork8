import React, {useState} from 'react';
import {Quote} from "../../types";

interface Props {
    onSubmit: (quote: Quote) => void
}

const QuotesForm:React.FC<Props> = ({onSubmit}) => {

    const [quote, setQuote] = useState({
        category: '',
        author: '',
        text: '',
    });

    const changeQuote = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setQuote(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    };

    const onFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit({
            id: Math.random().toString(),
            ...quote
        });
    };

    return (
        <form onSubmit={onFormSubmit}>
        <h4>Submit new quote</h4>
            <div className="form-group">
                <label htmlFor="category">Category</label>
                <select
                    name="category"
                    id="category"
                    className="form-control"
                    value={quote.category}
                    onChange={changeQuote}
                >
                    <option value="All">All</option>
                    <option value="Star Wars">Star Wars</option>
                    <option value="Famous people">Famous people</option>
                    <option value="Saying">Saying</option>
                    <option value="Humour">Humour</option>
                    <option value="Motivational">Motivational</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="author">Author</label>
                <input
                type="text"
                name="author"
                id="author"
                className="form-control"
                value={quote.author}
                onChange={changeQuote}
                />
            </div>
            <div className="form-group">
                <label htmlFor="text">Text</label>
                <textarea
                    name="text"
                    id="text"
                    className="form-control"
                    value={quote.text}
                    onChange={changeQuote}
                />
            </div>
            <button type="submit" className="btn btn-outline-dark mt-3">Save</button>
        </form>
    );
};

export default QuotesForm;
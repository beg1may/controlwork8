import React from 'react';
import { Quote } from "../../types";
import axiosApi from "../../axiosApi";

interface Props {
    quote: Quote;
    onDelete: () => void;
}

const QuoteItem: React.FC<Props> = ({ quote, onDelete }) => {
    const handleDelete = async () => {
        try {
            await axiosApi.delete(`/quotes/${quote.id}.json`);
            onDelete();
        } catch (error) {
            console.error('Error occurred while deleting quote:', error);
        }
    };

    return (
        <div className="card g-0 my-4">
            <div className="card-header">
                {quote.author}
                <div className="float-end">
                    <button type="button" className="btn btn-primary mx-2">Edit</button>
                    <button type="button" className="btn btn-primary" onClick={handleDelete}>Delete</button>
                </div>
            </div>
            <div className="card-body">
                <p className="card-text">
                    {quote.text}
                </p>
                <p>{quote.category}</p>
            </div>
        </div>
    );
};

export default QuoteItem;

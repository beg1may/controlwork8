import React from 'react';
import QuotesForm from "../components/QuotesForm/QuotesForm";
import {Quote} from "../types";

interface Props {
    addQuote:(quote: Quote) => void;
}

const NewQuotes:React.FC<Props> = ({addQuote}) => {
    return (
        <div className="row">
            <div className="col-8 mx-auto mt-5">
                <QuotesForm onSubmit={addQuote}/>
            </div>
        </div>
    );
};

export default NewQuotes;
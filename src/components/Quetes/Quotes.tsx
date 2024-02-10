import React from 'react';
import QuoteItem from "./QuoteItem";
import {Quote} from "../../types";

interface Props {
    quotes: Quote[];
}

const Quotes:React.FC<Props> = ({quotes}) => {

    return (
        <>
            <h4>Quotes</h4>
            {quotes.map(quote => (
                <QuoteItem
                key={quote.id}
                quote={quote}
                />
            ))}
        </>
    );
};

export default Quotes;
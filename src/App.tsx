import React, {useState} from 'react';
import Appbar from "./components/Appbar/Appbar";
import {Quote} from "./types";
import {Route, Routes} from "react-router-dom";
import Home from "./containers/Home";
import NewQuotes from "./containers/NewQuotes";

function App() {
    const [quotes, setQuotes] = useState<Quote[]>([]);

    const addQuote = (quote: Quote) => {
        setQuotes(prevState => [...prevState, quote]);
    }

    return (
        <>
            <header>
                <Appbar/>
            </header>
            <main className="container-fluid">
                <Routes>
                    <Route path="/quotes" element={(
                        <Home quotes={quotes} />
                    )} />
                    <Route path="/add-quote" element={(
                        <NewQuotes addQuote={addQuote}  quotes={quotes}/>
                    )} />
                    <Route path="*" element={
                        <h1>Not found!</h1>
                    } />
                </Routes>
            </main>
        </>
    );
}

export default App;
